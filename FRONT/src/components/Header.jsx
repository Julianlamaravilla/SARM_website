import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Header.css'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

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
        <div className="nav-links">
          <a href="#bienvenida" className="nav-link">{t.nav.bienvenida}</a>
          <a href="#servicios" className="nav-link">{t.nav.servicios}</a>
          <a href="#transformacion" className="nav-link">{t.nav.transformacion}</a>
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

