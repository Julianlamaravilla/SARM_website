import React from 'react'
import { useLanguage } from './context/LanguageContext'
import { translations } from './translations'
import Header from './components/Header'
import Footer from './components/Footer'
import LazyHero from './components/LazyHero'
import './App.css'

function App() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="app">
      <Header />
      
      {/* Sección 1: Bienvenida - Hero con imagen de fondo */}
      <LazyHero 
        id="bienvenida"
        imageUrl="/material_visual/imagenes_originales/cerebro_de_frutas.png"
        overlay={true}
      >
        <h1 className="hero-title">{t.sections.bienvenida.title}</h1>
        <p className="hero-subtitle">{t.sections.bienvenida.text1}</p>
        <p className="hero-description">{t.sections.bienvenida.text2}</p>
      </LazyHero>

      {/* Sección 2: Servicios - Grid 2x2 */}
      <section id="servicios" className="section section-services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">{t.sections.servicios.title}</h2>
            <p className="services-subtitle">{t.sections.servicios.subtitle}</p>
          </div>
          <div className="services-grid">
            {/* Caja 1: Cuidados Alimenticios */}
            <div className="service-card" style={{ backgroundColor: '#A3D437' }}>
              <div className="service-card-image">
                <img 
                  src="/material_visual/imagenes_originales/plato_de_comida.jpg" 
                  alt={language === 'es' ? 'Plato de comida saludable' : 'Healthy food plate'} 
                  className="service-image"
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{t.sections.servicios.cuidadosAlimenticios.title}</h3>
                <p className="service-card-text">{t.sections.servicios.cuidadosAlimenticios.text1}</p>
                <p className="service-card-text">{t.sections.servicios.cuidadosAlimenticios.text2}</p>
                <p className="service-card-highlight">{t.sections.servicios.cuidadosAlimenticios.highlight}</p>
              </div>
            </div>

            {/* Caja 2: Buenos Hábitos */}
            <div className="service-card" style={{ backgroundColor: '#F5A623' }}>
              <div className="service-card-image">
                <img 
                  src="/material_visual/imagenes_originales/cerebro_de_frutas.png" 
                  alt={language === 'es' ? 'Cerebro representado con frutas saludables' : 'Brain represented with healthy fruits'} 
                  className="service-image"
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{t.sections.servicios.buenosHabitos.title}</h3>
                <p className="service-card-text">{t.sections.servicios.buenosHabitos.text1}</p>
                <p className="service-card-highlight">{t.sections.servicios.buenosHabitos.highlight}</p>
              </div>
            </div>

            {/* Caja 3: Alimentación + Ejercicio */}
            <div className="service-card" style={{ backgroundColor: '#4C8F2F' }}>
              <div className="service-card-image">
                <img 
                  src="/material_visual/imagenes_originales/gimnasio_4.jpg" 
                  alt={language === 'es' ? 'Persona ejercitándose en el gimnasio' : 'Person exercising at the gym'} 
                  className="service-image"
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{t.sections.servicios.alimentacionEjercicio.title}</h3>
                <p className="service-card-text">{t.sections.servicios.alimentacionEjercicio.text1}</p>
                <p className="service-card-text">{t.sections.servicios.alimentacionEjercicio.text2}</p>
              </div>
            </div>

            {/* Caja 4: Día a Día */}
            <div className="service-card" style={{ backgroundColor: '#FFD25D' }}>
              <div className="service-card-image">
                <img 
                  src="/material_visual/imagenes_originales/mesa_con_comida.jpg.png" 
                  alt={language === 'es' ? 'Mesa con comida saludable y balanceada' : 'Table with healthy and balanced food'} 
                  className="service-image"
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{t.sections.servicios.diaADia.title}</h3>
                <p className="service-card-text">{t.sections.servicios.diaADia.text1}</p>
                <p className="service-card-text">{t.sections.servicios.diaADia.text2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Final: Llamado a la acción */}
      <section id="transformacion" className="section section-cta">
        <div className="cta-container">
          <div className="cta-header">
            <h2 className="cta-section-title">{t.sections.transformacion.title}</h2>
            <p className="cta-section-text">
              {t.sections.transformacion.text1}
            </p>
            <p className="cta-section-highlight">
              {t.sections.transformacion.highlight}
            </p>
          </div>
          
          <div className="cta-books-grid">
            {/* Libro 1 */}
            <a 
              href="https://go.hotmart.com/J101993411T" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-book-card"
            >
              <div className="book-image-container">
                <img 
                  src="/material_visual/libros/libro2_listo.png" 
                  alt={language === 'es' ? 'Libro: Cuidado Alimenticio' : 'Book: Nutritional Care'} 
                  className="book-image"
                  loading="lazy"
                />
              </div>
              <div className="book-content">
                <h3 className="book-title">{t.sections.transformacion.button1}</h3>
              </div>
            </a>

            {/* Libro 2 */}
            <a 
              href="https://go.hotmart.com/H102729492S?dp=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-book-card"
            >
              <div className="book-image-container">
                <img 
                  src="/material_visual/libros/libro1_listo.png" 
                  alt={language === 'es' ? 'Libro: Balance entre alimentación y ejercicio' : 'Book: Balance between nutrition and exercise'} 
                  className="book-image"
                  loading="lazy"
                />
              </div>
              <div className="book-content">
                <h3 className="book-title">{t.sections.transformacion.button2}</h3>
              </div>
            </a>
          </div>

          <p className="cta-final-message">
            {t.sections.transformacion.finalMessage}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App

