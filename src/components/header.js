import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="brand-link">
            {siteTitle}
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="nav-link"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="nav-link"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
