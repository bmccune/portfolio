import React from "react"
import "./experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Teacher",
      company: "Cedar Park Schools",
      location: "Bothell, WA",
      period: "June 2024 - Present",
      highlights: [
        "Designed, implemented, and managed 5+ concurrent curricula aligning 100% with state standards",
        "Led coordination between 20+ faculty members, increasing teacher productivity by 30%",
        "Oversaw 15+ project-based learning initiatives for 100+ students using Agile workflows",
        "Improved project quality scores by 20% through data-driven interventions",
        "Mentored 40+ students with 80% achieving real-world client expectations"
      ]
    },
    {
      title: "Vice President - Lead Architect",
      company: "JPMorgan Chase & Co.",
      location: "Seattle, WA",
      period: "January 2021 - March 2024",
      highlights: [
        "Led architecture and delivery of 12+ large-scale applications impacting 58M+ users",
        "Managed cross-functional teams of 8-15 engineers with 98% adherence to release schedules",
        "Reduced feature delivery time by 30% through optimized backlog prioritization",
        "Oversaw budgets up to $2M for front-end initiatives",
        "Increased page load speed by 55% and reduced defect rates by 20%",
        "Mentored 6 junior architects with 100% promotion/retention rate"
      ]
    },
    {
      title: "Vice President - Software Development Manager",
      company: "JPMorgan Chase & Co.",
      location: "Seattle, WA",
      period: "January 2013 - January 2021",
      highlights: [
        "Directed 10-20 person teams delivering 95% of projects on/ahead of schedule",
        "Managed end-to-end lifecycles with budgets up to $5M spanning 6-18 months",
        "Increased on-time feature releases by 40% through multi-project roadmaps",
        "Secured $400K+ in vendor cost savings through strategic negotiations",
        "Reduced production defects by 25% year-over-year through KPI tracking",
        "Enabled 3 internal promotions through mentorship of team leads and engineers"
      ]
    },
    {
      title: "Associate - UI Frameworks Developer",
      company: "JPMorgan Chase & Co.",
      location: "San Francisco, CA",
      period: "March 2011 - January 2013",
      highlights: [
        "Led design of reusable UI component library adopted by 7+ product teams",
        "Reduced front-end development time by 45% across organization",
        "Saved $350K in development costs through enterprise application migration",
        "Increased internal framework utilization from 40% to 95% within one year",
        "Reduced UI defects by 25% through code quality standards for 20+ engineers"
      ]
    },
    {
      title: "Sr. Front End Web Developer",
      company: "Pacific Sunwear",
      location: "Orange County, CA",
      period: "July 2008 - March 2011",
      highlights: [
        "Developed 20+ responsive web applications improving user engagement by 35%",
        "Reduced page load times by 50% and increased conversion rates by 15%",
        "Handled 100K+ daily transactions with custom PHP/MySQL solutions",
        "Cut development time by 30% through reusable CSS frameworks",
        "Achieved 3 team promotions through effective mentorship"
      ]
    },
    {
      title: "Online Editor",
      company: "Bonnier Publications",
      location: "Orange County, CA",
      period: "October 2006 - October 2007",
      highlights: [
        "Produced 100+ articles annually driving 40% increase in website traffic",
        "Boosted social media engagement by 60% through photo/video content",
        "Increased average time-on-page by 25% through custom design",
        "Achieved 99.9% uptime managing magazine website with HTML/CSS/JavaScript",
        "Generated $250K+ in annual revenue through branded content"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <p>15+ years of technology leadership and software development</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="location">{exp.location}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience