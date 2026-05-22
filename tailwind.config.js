/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores do Figma — HAVEN (3 tons do mesmo azul-marinho)
        primary: '#10152E',   // mais escuro: títulos + botão principal
        secondary: '#262D4D', // médio: preços, textos de destaque
        muted: '#4E5265',     // mais claro: categorias e textos auxiliares
        navy: '#05091C',      // fundo escuro do footer
        accent: '#CDBB88',  // dourado do stroke da nav bar
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}