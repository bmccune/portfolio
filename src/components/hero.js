import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Brian McCune</h1>
        <h2 className="hero-subtitle">Senior Technology Leader</h2>
        <p className="hero-description">
          15+ years delivering multi-million-dollar programs, cross-functional initiatives, 
          and enterprise software solutions. Expert in strategic planning, stakeholder alignment, 
          and team leadership driving innovation and operational efficiency.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="cta-btn cta-primary"><span>Get In Touch</span></a>
          <a href="#experience" className="cta-btn cta-secondary"><span>View Experience</span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero