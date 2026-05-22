const bottomLinks = ['FAQ', 'Shipping & returns', 'Contact', 'Terms', 'Privacy']

function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Seção principal — About Us + Social Media */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2">
        {/* About Us */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            About Us
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            Helping businesses thrive with tailored solutions and expert guidance.
            Driven by innovation, we focus on real results and lasting partnerships.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Social Media
          </h3>
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-white/70 transition-colors hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" aria-label="Pinterest" className="text-white/70 transition-colors hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.48 1.806 1.773 0 3.142-1.874 3.142-4.579 0-2.394-1.72-4.068-4.177-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .858.33 1.778.742 2.282a.3.3 0 0 1 .07.285l-.278 1.133c-.044.183-.146.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="text-white/70 transition-colors hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-white/10" />

      {/* Rodapé inferior — links + copyright */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8">
        <nav className="flex flex-wrap justify-center gap-6">
          {bottomLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
        <p className="text-xs text-white/40">Copyright 2024</p>
      </div>
    </footer>
  )
}

export default Footer
