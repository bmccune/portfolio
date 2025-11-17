import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Brian McCune</h1>
        <h2 className="hero-subtitle">Senior Technology Leader & Program Manager</h2>
        <p className="hero-description">
          15+ years delivering multi-million-dollar programs, cross-functional initiatives, 
          and enterprise software solutions. Expert in strategic planning, stakeholder alignment, 
          and team leadership driving innovation and operational efficiency.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="cta-button primary">Get In Touch</a>
          <a href="#experience" className="cta-button secondary">View Experience</a>
        </div>
      </div>
    </section>
  )
}

export default Hero