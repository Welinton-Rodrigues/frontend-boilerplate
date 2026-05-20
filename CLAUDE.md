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

- **Seja direto e prático** — sem rodeios, sem aulas longas
- **Me explique o "porquê" rapidinho** — preciso entender o que tô colando
- **Aponte armadilhas** — se eu tô prestes a fazer algo que vai dar problema, avisa
- **Foque em fidelidade visual** — esse é o critério principal de avaliação
- **Lembre-se que é cronometrado** — sugestões devem ser viáveis no tempo
- **Code review honesto** — se algo tá ruim ou pode melhorar, fala

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

## 🧠 Conceitos React que domino (não precisa explicar do zero)

- JSX e props
- useState
- useEffect (lifecycle, dependências, cleanup)
- Renderização condicional (`&&`, ternário)
- Listas com `.map()` e `key`
- Event handlers (onClick, onChange, onSubmit)
- Forms controlados
- Composição de componentes
- React Router DOM (se necessário)

**Sou pleno**, então:
- Não precisa explicar o que é componente, prop, estado
- Pode ir direto ao ponto técnico
- Posso receber sugestões mais avançadas (custom hooks, context API, memoização)

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

**VAMOS LÁ! 🚀**
