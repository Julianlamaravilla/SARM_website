import React, { useState, useRef, useEffect } from 'react'

function LazyHero({ id, imageUrl, overlay, children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Cargar la imagen cuando sea visible
            const img = new Image()
            img.src = imageUrl
            img.onload = () => {
              setImageLoaded(true)
            }
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [imageUrl])

  return (
    <section id={id} ref={sectionRef} className="section section-hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: imageLoaded ? `url(${imageUrl})` : 'none',
          backgroundColor: imageLoaded ? 'transparent' : '#f5f5f5'
        }}
      >
        {overlay && <div className="hero-overlay"></div>}
        <div className="hero-content">
          {children}
        </div>
      </div>
    </section>
  )
}

export default LazyHero

