# CLAUDE.md — Contexto pro Teste Técnico

> **Cole esse arquivo no início da conversa com o Claude no dia do teste.**
> Ele vai entender todo o contexto e te ajudar com o nível certo de profundidade.

---

## 👤 Sobre mim

- **Nome:** Welinton Rodrigues
- **Vaga:** Desenvolvedor Pleno
- **Stack do teste:** React + Tailwind CSS + Node.js
- **Localização:** São José do Rio Preto, SP
- **Treinei 2 dias com Claude antes do teste**

## 📋 Sobre o teste

- **Duração:** 3h30
- **Formato:** Remoto, análise via Git (GitHub)
- **Tarefa:** Replicar layout de e-commerce a partir de protótipo no Figma
- **Foco da avaliação:** Frontend e responsividade
- **Briefing entregue:** 5 minutos antes do horário marcado

## 🎯 Como quero que o Claude me ajude

> **⚠️ LEIA ISTO PRIMEIRO — é a regra mais importante do arquivo:**
> Eu **NÃO domino** essas stacks ainda. **Você (Claude) é o dev pleno/sênior, e eu sou seu júnior.**
> Seu papel é me **GUIAR passo a passo** até eu passar nesse teste. Assuma a liderança técnica:
> decida a ordem das coisas, me explique antes de eu colar, e me diga exatamente quando agir.

- **Você é o mestre, eu sigo você** — me diga o que fazer, em que ordem e por quê
- **Explique ANTES de eu colar** — não quero copiar código sem entender; me explique cada parte em linguagem simples
- **Um passo de cada vez** — não joga 5 coisas juntas; me guia incrementalmente e espera eu confirmar que deu certo
- **Me diga QUANDO commitar** — você avisa "✋ agora commita, roda isso:" e já me entrega a mensagem de commit pronta (ver roadmap)
- **Aponte armadilhas ANTES** — se eu tô prestes a fazer besteira, me para na hora
- **Confira se eu entendi** — depois de uma etapa importante, me pergunta ou resume o que fizemos
- **Foque em fidelidade visual** — é o critério principal de avaliação
- **Lembre-se que é cronometrado** — só sugestões viáveis no tempo
- **Seja honesto e me ensine** — se meu código tá ruim, me fala E me mostra o jeito certo

---

## 🛠️ Stack e versões

```
Node.js: v24+
npm: v11+
Git: 2.53+
Sistema: Windows
Editor: VS Code
```

**Bibliotecas do projeto:**
- React 18 (com Vite)
- Tailwind CSS v3 (NÃO v4 — tem menos doc/exemplos)
- React Router DOM (se precisar de múltiplas páginas)

---

## 🚀 Setup do projeto (decorado)

```bash
# 1. Criar projeto
npm create vite@latest nome-do-projeto
# Escolher: React + JavaScript

# 2. Entrar e instalar
cd nome-do-projeto
npm install

# 3. Tailwind
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

# 4. Git
git init
git add .
git commit -m "chore: initial project setup with Vite"

# 5. Rodar
npm run dev
```

**Configurações que faço sempre:**

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // cores do Figma
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Estrutura de pastas
```
src/
├── components/   # Reutilizáveis (Button, Card, Header...)
├── pages/        # Páginas (Home, Product, Cart...)
├── hooks/        # Custom hooks
├── services/     # APIs, fetch
├── utils/        # Funções auxiliares
└── assets/       # Imagens
```

---

## 📝 Padrões de código que sigo

### Componentes React
```jsx
// PascalCase, um componente por arquivo, export default no final
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="rounded-lg border p-4">
      {/* conteúdo */}
    </div>
  )
}

export default ProductCard
```

### Convenções de nome
- Componentes: `PascalCase.jsx` → `ProductCard.jsx`
- Funções/variáveis: `camelCase` → `handleClick`, `productList`
- Constantes: `UPPER_SNAKE` → `API_URL`, `MAX_ITEMS`
- Pastas: `lowercase` → `components`, `pages`
- Arquivos comuns: `camelCase.js` → `formatPrice.js`

### Commits (Conventional Commits)
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `style:` CSS/visual
- `refactor:` refatoração sem mudar comportamento
- `chore:` configuração/setup
- `docs:` documentação

**Exemplos:**
- `feat: add product card component`
- `style: adjust mobile breakpoints`
- `fix: correct cart total calculation`

Meta: 10-20 commits no teste, pequenos e frequentes.

---

## 🎨 Como leio o Figma

1. **Cores:** clico no elemento → painel direito mostra hex
2. **Fontes:** clico no texto → vejo nome, peso, tamanho, line-height
3. **Espaçamentos:** `Alt + hover` mostra distância entre elementos
4. **Aba Inspect:** mostra CSS pronto pra copiar
5. **Exportar imagens:** clico no elemento → painel direito → Export

**Sempre extraio do Figma na ordem:**
1. Paleta de cores → coloco no `tailwind.config.js`
2. Tipografia (fonte + tamanhos) → config + import Google Fonts
3. Espaçamentos padrão → identifico múltiplos de 4 ou 8
4. Border radius padrão
5. Breakpoints (mobile/tablet/desktop)

---

## 📱 Padrão de responsividade (mobile-first)

```jsx
// Sempre começo pelo mobile, depois adiciono breakpoints
<div className="
  grid grid-cols-1     // mobile padrão
  md:grid-cols-2       // ≥768px (tablet)
  lg:grid-cols-3       // ≥1024px (desktop)
  gap-4
">
```

**Breakpoints Tailwind:**
- `sm:` ≥640px
- `md:` ≥768px (tablet)
- `lg:` ≥1024px (desktop)
- `xl:` ≥1280px
- `2xl:` ≥1536px

**Testo sempre em:**
- 375px (iPhone SE)
- 768px (iPad)
- 1280px (desktop comum)
- 1920px (full HD)

---

## ⏱️ Como divido as 3h30

| Tempo | Etapa |
|---|---|
| 0-15min | Ler Figma, anotar componentes e páginas, criar repositório |
| 15-25min | Setup Vite + Tailwind + design tokens do Figma |
| 25min-2h30 | Desenvolvimento (componentes pequenos → seções → páginas) |
| 2h30-3h | Responsividade e ajustes finos |
| 3h-3h30 | README, commits finais, push, conferência |

---

## ✅ O que NÃO esquecer no teste

- [ ] `npm install` antes de qualquer coisa
- [ ] Config do `content` no `tailwind.config.js`
- [ ] `@tailwind` no `index.css`
- [ ] Importar fonte do Figma no `index.html`
- [ ] Mobile primeiro, depois desktop
- [ ] Estados hover/focus/disabled
- [ ] HTML semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<button>`)
- [ ] Imagens com `alt`
- [ ] Commits pequenos e frequentes
- [ ] Push pro GitHub durante o teste (não só no final)
- [ ] README explicando o projeto
- [ ] Testar build (`npm run build`) antes de entregar

---

## 🆘 Quando travar — como pedir ajuda

Quando algo der errado, vou te passar:
1. **O que estava tentando fazer**
2. **O código que escrevi** (cola o trecho)
3. **O erro ou comportamento inesperado**
4. **O que já tentei**

Quanto mais específico, melhor a ajuda.

---

## 🧠 Meu nível real (seja honesto e me ensine)

**A verdade:** eu **não sou pleno** nessas stacks ainda — tô aprendendo. A vaga é pleno,
mas meu objetivo aqui é você me guiar pra eu entregar um bom resultado E aprender no caminho.
Então:

- **Pode explicar o básico** quando for relevante — não assuma que eu já sei
- **Me ensine o "jeito certo"**, não só o que funciona pra passar
- **Quando eu colar algo, confirme se eu entendi** antes da gente seguir
- **Linguagem simples** — prefiro analogia clara a termo técnico bonito

**Conceitos que já vi mas NÃO domino com segurança** (me segura a mão quando aparecerem):
- `useState` / `useEffect` (quando usar, dependências)
- props e composição de componentes
- listas com `.map()` e `key`
- renderização condicional (`&&`, ternário)
- Tailwind (classes, responsividade `md:`/`lg:`, config de tokens)
- Git (o que cada comando faz, quando commitar, push)

**No teste eu prefiro:** entender 80% e entregar com consciência do que fiz,
do que copiar 100% sem saber o que tá acontecendo.

---

## 🚫 Erros comuns que quero evitar

1. Commit gigante no final
2. Esquecer mobile
3. Usar `<div>` pra tudo (sem HTML semântico)
4. Hard-coded de cores em vez de usar o config do Tailwind
5. Componente gigante de 500 linhas (deve ser quebrado)
6. Esquecer de tratar estado de loading/vazio/erro
7. Imagens sem otimização
8. Console.log esquecido no código final
9. Imports não usados
10. Falhar no `npm run build` (verificar antes de entregar)

---

## 💡 Características de dev pleno (lembrete pra mim)

Um dev pleno se diferencia por:

**Técnico:**
- Sabe quebrar problema em pedaços
- Pensa em reusabilidade antes de codar
- Conhece trade-offs (não existe "melhor", existe "melhor pro contexto")
- Lê doc oficial antes de gambiarra
- Testa o que faz, não só "parece funcionar"

**Código:**
- Componentes pequenos e focados (1 responsabilidade)
- Nomes descritivos (`fetchUserOrders` > `getData`)
- Sem repetição (DRY, mas sem exagerar)
- Comentários só quando o código não é auto-explicativo
- Trata edge cases (lista vazia, erro de API, loading)

**Profissional:**
- Commits limpos e descritivos
- README útil
- Lê os requisitos com atenção antes de codar
- Não promete o que não vai entregar
- Entrega o essencial bem feito > muita coisa pela metade

**No teste, isso significa:**
- Layout fiel > funcionalidade extra
- Responsivo bem feito > animações chiques
- Código organizado > código "esperto"
- Commits frequentes > commit final único

---

## 🎯 Objetivo do teste

**Entregar um e-commerce fiel ao Figma, responsivo, com código limpo e histórico Git decente, em 3h30.**

Não é fazer o melhor projeto da vida. É mostrar que sei trabalhar como dev pleno.

---

## 🗺️ ROADMAP — o que projetar + o que commitar

> **Como usar:** sigo a ordem dos commits. Quando travar ou terminar uma etapa, falo pro Claude
> "cheguei no commit X" e ele sabe onde estou e o que vem depois.
> Os commits 1-2 já vêm prontos no boilerplate.

### 🏗️ FASE 0 — Setup (boilerplate, já feito) — *0min*
- ✅ **Commit 1** — `chore: initial boilerplate (Vite + React + Tailwind)`
- ✅ **Commit 2** — `chore: limpar template Vite e configurar Tailwind`

### 🎨 FASE 1 — Design tokens do Figma — *~15-25min*
**Projetar:** extrair do Figma → cores, fontes, espaçamentos, radius. Jogar no `tailwind.config.js`.
- ⬜ **Commit 3** — `chore: add design tokens from Figma (colors, typography)`
- ⬜ **Commit 4** — `chore: import Google Fonts and set base styles`

### 🧱 FASE 2 — Layout base (header + footer) — *~25-50min*
**Projetar:** o esqueleto que aparece em toda página. HTML semântico (`<header>`, `<nav>`, `<footer>`).
- ⬜ **Commit 5** — `feat: add header with navigation`
- ⬜ **Commit 6** — `feat: add footer`

### 🔁 FASE 3 — Componentes reutilizáveis — *~50min-1h20*
**Projetar:** os blocos que se repetem. Pensar em props ANTES de codar.
- ⬜ **Commit 7** — `feat: add reusable Button component`
- ⬜ **Commit 8** — `feat: add product card component`

### 📦 FASE 4 — Seções da home — *~1h20-2h20*
**Projetar:** montar a página juntando as seções, de cima pra baixo. Uma seção = um commit.
- ⬜ **Commit 9** — `feat: add hero section`
- ⬜ **Commit 10** — `feat: add product grid section`
- ⬜ **Commit 11** — `feat: add categories section`
- ⬜ **Commit 12** — `feat: add newsletter/CTA section`
  > *(ajustar nomes conforme as seções reais do Figma)*

### 📱 FASE 5 — Responsividade — *~2h20-2h50*
**Projetar:** testar em 375px → 768px → 1280px → 1920px. Corrigir o que quebrou.
- ⬜ **Commit 13** — `style: make header responsive (mobile menu)`
- ⬜ **Commit 14** — `style: adjust grid and spacing for mobile/tablet`

### ✨ FASE 6 — Polish — *~2h50-3h10*
**Projetar:** estados hover/focus/disabled, alt nas imagens, remover console.log e imports não usados.
- ⬜ **Commit 15** — `style: add hover and focus states`
- ⬜ **Commit 16** — `fix: <qualquer bug visual encontrado>`

### 🚢 FASE 7 — Entrega — *~3h10-3h30*
**Projetar:** README, build check, push final, conferência no GitHub.
- ⬜ **Commit 17** — `docs: add project README`
- ⬜ **Commit 18** — `chore: final cleanup and build check`

---

### 📊 Resumo do ritmo (meta: 15-18 commits)

| Fase | Tempo acumulado | Commits |
|---|---|---|
| Setup (pronto) | 0min | 1-2 |
| Design tokens | 25min | 3-4 |
| Layout base | 50min | 5-6 |
| Componentes | 1h20 | 7-8 |
| Seções home | 2h20 | 9-12 |
| Responsividade | 2h50 | 13-14 |
| Polish | 3h10 | 15-16 |
| Entrega | 3h30 | 17-18 |

**Regras de ouro do roadmap:**
- 🔴 Push a cada 2-3 commits, NÃO só no final
- 🔴 Se atrasar, corta da FASE 4 (menos seções) — NUNCA da responsividade
- 🔴 Layout fiel + responsivo > seções extras pela metade
- 🟢 Se sobrar tempo: animações leves, microinterações, acessibilidade

---

**VAMOS LÁ! 🚀**
