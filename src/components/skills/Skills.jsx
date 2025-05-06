import React from 'react'
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h6 className="skills-subtitle">MY SPECIALITY</h6>
        <h4 className="skills-title">My Skills</h4>
        
        <div className="skills-text">
          <p>
            I've developed a diverse set of skills throughout my journey as a front-end developer. 
            I have solid experience in building responsive, user-friendly web interfaces using HTML,
            CSS, and JavaScript. I primarily work with React to create dynamic, component-based applications that are fast and maintainable.
            My focus is on writing clean code, following best practices, and continuously improving my front-end development skills.
          </p>
        </div>
        
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-icon"><FaHtml5 /></span>
              <h5>HTML</h5>
              <span className="skill-percentage">100%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-icon"><FaCss3Alt /></span>
              <h5>CSS</h5>
              <span className="skill-percentage">95%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '95%'}}></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-icon"><FaJs /></span>
              <h5>JavaScript</h5>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-icon"><FaReact /></span>
              <h5>React</h5>
              <span className="skill-percentage">20%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '20%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills