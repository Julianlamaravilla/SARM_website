import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

function Footer() {
  const { language } = useLanguage()

  const footerText = {
    es: {
      tagline: 'Tu partner en salud y bienestar.',
      quickLinks: 'Enlaces Rápidos',
      contactUs: 'Contacto',
      copyright: '©2025 SARM. Todos los derechos reservados.'
    },
    en: {
      tagline: 'Your partner in health and wellness.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      copyright: '©2025 SARM. All rights reserved.'
    }
  }

  const t = footerText[language]

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <span className="footer-logo-text">SARM</span>
            <p className="footer-tagline">{t.tagline}</p>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">{t.quickLinks}</h3>
          <ul className="footer-links">
            <li><a href="#bienvenida">{language === 'es' ? 'Inicio' : 'Home'}</a></li>
            <li><a href="#servicios">{language === 'es' ? 'Servicios' : 'Services'}</a></li>
            <li><a href="#transformacion">{language === 'es' ? 'Transformación' : 'Transformation'}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">{t.contactUs}</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:sarm2025mejorandovidas@gmail.com">sarm2025mejorandovidas@gmail.com</a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/sarm_mejorando_vidas?igsh=amYwbXQ5MnhhczBl&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer

