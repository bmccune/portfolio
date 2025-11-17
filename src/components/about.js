import React from "react"
import "./about.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Technology leader with a passion for innovation and team excellence</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a senior technology leader with over 15 years of experience delivering 
              multi-million-dollar programs, cross-functional initiatives, and enterprise 
              software solutions. My expertise spans strategic planning, stakeholder alignment, 
              and on-time, on-budget execution.
            </p>
            <p>
              I combine deep technical expertise with program governance, risk mitigation, 
              and team leadership to drive innovation, operational efficiency, and measurable 
              business impact across diverse industries. From leading teams of 20+ engineers 
              to presenting to C-level executives, I thrive in environments where technology 
              meets strategic business objectives.
            </p>
            <p>
              Currently, I'm applying my leadership and technical skills in education, 
              designing curricula and managing project-based learning initiatives while 
              continuing to mentor the next generation of technology professionals.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="highlight-item">
              <h3>$5M+</h3>
              <p>Programs Managed</p>
            </div>
            <div className="highlight-item">
              <h3>58M+</h3>
              <p>Users Impacted</p>
            </div>
            <div className="highlight-item">
              <h3>95%</h3>
              <p>On-Time Delivery</p>
            </div>
          </div>
        </div>
        
        <div className="education">
          <h3>Education</h3>
          <div className="education-items">
            <div className="education-item">
              <h4>MS, Information Technology Management</h4>
              <p>Western Governors University • 2020</p>
            </div>
            <div className="education-item">
              <h4>BS, Interactive Media and Web Design</h4>
              <p>The Art Institute of California-Orange County • 2008</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About