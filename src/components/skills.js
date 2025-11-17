import React from "react"
import "./skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Program & Project Management",
      icon: "📊",
      skills: [
        "Program Governance",
        "Strategic Planning",
        "Agile/Scrum",
        "Risk Mitigation",
        "Budget Management",
        "Cross-functional Team Leadership",
        "Stakeholder Communication",
        "Roadmap Development",
        "KPI Tracking",
        "Process Improvement"
      ]
    },
    {
      title: "Technical Expertise",
      icon: "💻",
      skills: [
        "JavaScript",
        "CSS",
        "HTML5",
        "Python",
        "PHP",
        "MySQL",
        "Node.js",
        ".NET",
        "Cloud Architecture",
        "UI/UX Design",
        "Web Development",
        "Application Development",
        "Performance Optimization"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        "Git",
        "Visual Studio",
        "Adobe Creative Suite",
        "CMS Platforms",
        "IIS",
        "JSON",
        "AJAX",
        "XML",
        "Jira",
        "Confluence",
        "Trello",
        "Microsoft Project"
      ]
    },
    {
      title: "Data & Analysis",
      icon: "📈",
      skills: [
        "Data-Driven Decision Making",
        "Performance Metrics",
        "Dashboard Reporting",
        "Database Optimization",
        "SEO Best Practices",
        "Analytics Implementation",
        "Business Intelligence",
        "Reporting Automation"
      ]
    },
    {
      title: "Leadership & Interpersonal",
      icon: "👥",
      skills: [
        "Team Mentorship",
        "Vendor Management",
        "Contract Negotiation",
        "Conflict Resolution",
        "Executive Presentation",
        "Change Management",
        "Cultural Transformation",
        "Succession Planning"
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Comprehensive technology and leadership capabilities</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <h4>50+</h4>
              <p>Technical Skills</p>
            </div>
            <div className="stat-item">
              <h4>20+</h4>
              <p>Teams Led</p>
            </div>
            <div className="stat-item">
              <h4>100+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h4>Multiple</h4>
              <p>Industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills