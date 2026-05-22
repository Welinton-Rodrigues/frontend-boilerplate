import logo from '../assets/haven.svg'

// Links do menu (aparecem só no desktop)
const navLinks = ['Home', 'Services', 'About', 'Contact']

function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo (imagem exportada do Figma) */}
        <a href="#">
          <img src={logo} alt="HAVEN" className="h-8 w-auto" />
        </a>

        {/* Menu de navegação — só no desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Ícones da direita */}
        <div className="flex items-center gap-5 text-primary">
          {/* Hambúrguer — só no mobile (no desktop o menu acima já aparece) */}
          <button aria-label="Abrir menu" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Carrinho */}
          <button aria-label="Carrinho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
