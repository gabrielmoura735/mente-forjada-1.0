const fs = require('fs');
const path = require('path');

// Agora estamos usando o Groq (Meta Llama 3)
const API_KEY = process.env.GROQ_API_KEY;
if (!API_KEY) {
    console.error("ERRO: A variável de ambiente GROQ_API_KEY não está configurada.");
    process.exit(1);
}

const PRINCIPLES_FILE = path.join(__dirname, '..', 'principles.json');

async function generatePhrases(batchSize) {
    const url = `https://api.groq.com/openai/v1/chat/completions`;
    
    const prompt = `Gere ${batchSize} frases originais sobre estoicismo, disciplina, masculinidade, mentalidade forte e honra.
Retorne um objeto JSON contendo APENAS a chave "phrases", que deve ser um array de objetos. Cada objeto deve ter as seguintes chaves exatas:
- "trail": (escolha uma: "mente", "esforco", "cicatrizes", "silencio", "relacoes", "hombridade", "acao")
- "trailLabel": (o rótulo correspondente: "Mente & Autodomínio", "Esforço & Disciplina", "Cicatrizes & Erros", "O Poder do Silêncio", "Círculo de Caráter", "Hombridade & Peso", "Sonhos na Ação")
- "quote": (a citação de impacto)
- "author": ("O Mestre" ou outro autor fictício/filosófico do sistema)
- "work": ("Fundamentos da Forja" ou outra obra)
- "isClassic": false
- "explanation": (explicação prática e direta sobre a frase)
- "dailyPractice": (uma prática diária conectada ao tema)
- "inquiry": (uma pergunta para reflexão incômoda/poderosa)
- "actionSuggestion": (uma sugestão de ação curta)

IMPORTANTE: Retorne APENAS o JSON válido.`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "llama3-8b-8192", // Modelo ultrarrápido da Meta
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" }
        })
    });

    const data = await response.json();
    try {
        let text = data.choices[0].message.content;
        const parsed = JSON.parse(text);
        return parsed.phrases || [];
    } catch (e) {
        console.error("Erro ao analisar a resposta da IA:", e);
        console.error(data);
        return [];
    }
}

async function main() {
    let principles = [];
    if (fs.existsSync(PRINCIPLES_FILE)) {
        principles = JSON.parse(fs.readFileSync(PRINCIPLES_FILE, 'utf8'));
    }

    let maxId = 0;
    principles.forEach(p => {
        const idNum = parseInt(p.id.replace('p', ''));
        if (idNum > maxId) maxId = idNum;
    });

    const TOTAL_PHRASES = 300;
    const BATCH_SIZE = 30;
    let newPhrases = [];

    console.log(`Iniciando geração automática de ${TOTAL_PHRASES} novas frases usando Groq...`);
    
    for (let i = 0; i < TOTAL_PHRASES / BATCH_SIZE; i++) {
        console.log(`Gerando lote ${i + 1}/${TOTAL_PHRASES / BATCH_SIZE} (${BATCH_SIZE} frases)...`);
        const batch = await generatePhrases(BATCH_SIZE);
        newPhrases = newPhrases.concat(batch);
        
        // Pausa de 5 segundos para não sobrecarregar
        await new Promise(r => setTimeout(r, 5000));
    }

    console.log(`Sucesso: ${newPhrases.length} frases válidas geradas.`);

    newPhrases.forEach((p, index) => {
        if (p.quote) { // garante que a frase é válida
            p.id = `p${maxId + index + 1}`;
            principles.push(p);
        }
    });

    fs.writeFileSync(PRINCIPLES_FILE, JSON.stringify(principles, null, 4), 'utf8');
    console.log(`Arquivo atualizado! Total de frases agora: ${principles.length}.`);
}

main();
