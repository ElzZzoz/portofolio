import React from 'react'
import './Experience.css'
import { FaCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <h6 className="experience-subtitle">MY JOURNEY</h6>
        <h4 className="experience-title">Work Experience</h4>
        
        <div className="experience-text">
          <p>
          While I don't yet have formal, real-world work experience in the industry, 
          I've completed several simulated real-world projects that reflect the kind 
          of problems and workflows used in professional front-end development. These
          projects challenged me to think like a developer working in a team — handling 
          real user stories, writing clean and modular code, and building fully functional 
          UIs with HTML, CSS, JavaScript, and React.</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon red">
              <FaCode />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">2025</div>
              <h3>Front End Developer</h3>
              <p>
              I've treated every project as if it were for a client or company
              — using Git for version control, writing reusable components, and 
              following best practices to ensure scalability and maintainability.
              you can review my projects on GitHub. by pressing the button below.
              </p>
              <Link to="/work" className="projects-button">
                Projects
              </Link>
            </div>
          </div>
          
          <div className="timeline-circle"></div>
        </div>
      </div>
    </div>
  )
}

export default Experience