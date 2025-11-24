import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Header.css'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="main-header">
      <nav className="nav">
        <div className="nav-logo">
          <img 
            src="/material_visual/imagenes_originales/logo_con_fondo.jpeg" 
            alt="SARM Logo" 
            className="logo-img"
            loading="eager"
          />
          <span className="logo-text">SARM</span>
        </div>
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-menu-2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#bienvenida" className="nav-link" onClick={handleLinkClick}>{t.nav.bienvenida}</a>
          <a href="#servicios" className="nav-link" onClick={handleLinkClick}>{t.nav.servicios}</a>
          <a href="#transformacion" className="nav-link" onClick={handleLinkClick}>{t.nav.transformacion}</a>
        </div>
        <button 
          className="language-toggle" 
          onClick={toggleLanguage}
          aria-label="Change language"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </nav>
    </header>
  )
}

export default Header

