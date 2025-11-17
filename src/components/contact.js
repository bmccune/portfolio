import React from "react"
import "./contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's discuss how we can work together to drive innovation and results</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Ready to Connect?</h3>
              <p>
                I'm always interested in discussing new opportunities, 
                collaboration possibilities, and innovative projects. Whether 
                you're looking for technical leadership, program management 
                expertise, or strategic guidance, I'd love to hear from you.
              </p>
            </div>
            
            <div className="contact-methods">
              <a 
                href="mailto:brian.mccune@gmail.com" 
                className="contact-method"
                aria-label="Send email to Brian McCune"
              >
                <div className="method-icon">✉️</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>brian.mccune@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+19097022211" 
                className="contact-method"
                aria-label="Call Brian McCune"
              >
                <div className="method-icon">📞</div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>(909) 702-2211</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/bmccune" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="Visit Brian McCune's LinkedIn profile"
              >
                <div className="method-icon">💼</div>
                <div className="method-info">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/bmccune</p>
                </div>
              </a>
              
              <a 
                href="https://mccune.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="Visit Brian McCune's website"
              >
                <div className="method-icon">🌐</div>
                <div className="method-info">
                  <h4>Website</h4>
                  <p>mccune.dev</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Please select a topic</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Tell me about your project, needs, or how I can help..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-footer">
          <p>
            <strong>Location:</strong> Seattle Metro Area | Open to Remote Opportunities
          </p>
          <p>
            <strong>Availability:</strong> Open for consulting, speaking engagements, and advisory roles
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact