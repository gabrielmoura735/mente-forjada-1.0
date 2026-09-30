# 🔑 Guia Rápido: Onde Criar Chaves de API (API Keys) para Inteligência Artificial

Para que nossos scripts e automações funcionem de forma inteligente, precisamos de "Chaves de API". Elas são como "crachás de acesso" que permitem que nosso código converse com os servidores das grandes inteligências artificiais.

Aqui está uma lista dos melhores sites onde você pode criar suas chaves, focando principalmente nas opções gratuitas ou que oferecem créditos iniciais para testes sem problemas:

## 1. Google AI Studio (Gemini) 🥇 [Recomendado e Gratuito]
O melhor custo-benefício atual. O Google oferece uma cota gratuita bastante generosa para os modelos Gemini (os mesmos que criamos na nossa automação).
- **O que oferece:** Modelos super rápidos e inteligentes (Gemini 1.5 Flash e Pro).
- **Custo:** Gratuito (tem um limite diário de uso bem alto para projetos pequenos).
- **Onde criar:** [https://aistudio.google.com/](https://aistudio.google.com/) (Basta fazer login com o Gmail e clicar em "Get API Key").

## 2. Groq ⚡ [Extremamente Rápido]
Uma plataforma famosa por processar IA de forma incrivelmente veloz. Eles usam chips especializados e oferecem modelos de código aberto.
- **O que oferece:** Modelos como LLaMA 3 (da Meta) e Mixtral em velocidade absurda.
- **Custo:** Totalmente gratuito (no momento) com limites diários.
- **Onde criar:** [https://console.groq.com/keys](https://console.groq.com/keys)

## 3. OpenRouter 🌐 [O "Shopping" das IAs]
O OpenRouter é um agregador. Em vez de criar contas em vários sites, você cria uma conta aqui e tem acesso a centenas de IAs (inclusive algumas 100% gratuitas).
- **O que oferece:** Acesso ao ChatGPT, Claude, Gemini, LLaMA, etc., tudo no mesmo lugar. Filtre por modelos com preço "$0".
- **Custo:** Tem dezenas de modelos de IA gratuitos.
- **Onde criar:** [https://openrouter.ai/keys](https://openrouter.ai/keys)

## 4. Together AI 🧩
Ótima plataforma para modelos "Open Source" (Código aberto). É ideal se um dia você quiser experimentar a IA da Meta (Llama 3) no seu projeto.
- **O que oferece:** Mais de 100 modelos de inteligência artificial de código aberto.
- **Custo:** Ao criar a conta, você ganha US$ 5,00 em créditos de teste (que rendem milhares de frases).
- **Onde criar:** [https://api.together.xyz/](https://api.together.xyz/)

## 5. OpenAI (ChatGPT) 💰 [O Padrão da Indústria]
A criadora do famoso ChatGPT. É a API mais famosa, mas diferente do Google, **não possui plano gratuito eterno**, você precisa colocar créditos (mínimo $5 dólares).
- **O que oferece:** GPT-4o, GPT-4o Mini.
- **Custo:** Pago por uso (Pré-pago). Modelos "Mini" são muito baratos, mas requerem cartão.
- **Onde criar:** [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

---

### 🛡️ Dicas de Segurança para suas API Keys:
- **Nunca publique a chave no código visível:** O motivo de usarmos os *Secrets* do GitHub no nosso projeto é justamente para esconder a chave. Se o arquivo da chave ficar público, bots podem roubá-la e usar seus créditos.
- **Chaves vazadas:** Se você achar que alguém viu sua chave, vá no painel onde você a criou, delete a chave antiga e gere uma nova. É instantâneo.
