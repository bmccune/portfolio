import React, { useEffect, useState } from "react"
import "./contact.css"

const Contact = () => {
  const [formState, setFormState] = useState({ status: "idle", error: "" })

  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }

    const existingScript = document.getElementById("netlify-recaptcha")
    if (existingScript) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    script.id = "netlify-recaptcha"
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    if (formState.status === "submitting") {
      return
    }

    const form = event.target
    const formData = new FormData(form)
    const isLocal =
      typeof window !== "undefined" &&
      /localhost|127\.0\.0\.1/.test(window.location.hostname)

    const captchaResponse = formData.get("g-recaptcha-response")
    if (!captchaResponse) {
      setFormState({
        status: "error",
        error: "Please complete the reCAPTCHA challenge before sending your message.",
      })
      return
    }

    setFormState({ status: "submitting", error: "" })

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) {
        if (isLocal && response.status === 404) {
          throw new Error(
            "Local development server cannot process Netlify form submissions. Deploy the site or run `netlify dev` to test the contact form."
          )
        }

        const errorText = await response.text()
        throw new Error(`Network response was not ok: ${response.status} ${errorText}`)
      }

      setFormState({ status: "success", error: "" })
      form.reset()

      if (typeof window !== "undefined" && window.grecaptcha?.reset) {
        try {
          window.grecaptcha.reset()
        } catch (resetError) {
          console.warn("Unable to reset reCAPTCHA", resetError)
        }
      }
    } catch (error) {
      console.error("Contact form submission failed", error)
      setFormState({
        status: "error",
        error:
          error.message ||
          "Something went wrong. Please try again or email me directly at brian.mccune@gmail.com.",
      })
    }
  }

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
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
            >
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

              <div data-netlify-recaptcha="true" className="recaptcha-container" />
              
              <button
                type="submit"
                className="submit-btn"
                disabled={formState.status === "submitting"}
              >
                {formState.status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {formState.status === "success" && (
                <p className="form-status success" role="status" aria-live="polite">
                  Thanks for reaching out! I'll get back to you shortly.
                </p>
              )}

              {formState.status === "error" && (
                <p className="form-status error" role="alert" aria-live="assertive">
                  {formState.error}
                </p>
              )}
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