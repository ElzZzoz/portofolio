import React from 'react'
import './About.css'
import { FaCode, FaPalette } from 'react-icons/fa'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h6 className="about-subtitle">ABOUT ME</h6>
        <h4 className="about-title">Who I Am</h4>
        
        <div className="about-text">
          <p>
            Hi, I'm Hazem — a passionate software enthusiast and a Computer Science student currently pursuing my degree at university. I'm in my early twenties, and I've been obsessed with building things that live on the web ever since I wrote my first line of code.
          </p>
          <p>
            I specialize in front-end development and love bringing ideas to life through clean, interactive user interfaces. I mainly work with React, a framework I've grown comfortable with for building dynamic, component-based applications that are fast, responsive, and scalable. From HTML and CSS to JavaScript and modern libraries, I enjoy solving problems and making digital experiences feel smooth, intuitive, and meaningful.
          </p>
          <p>
            Even though English isn't my first language, I've grown up using it fluently thanks to my education and personal interests. It's the language I use when learning, coding, and communicating in tech — so it's second nature by now.
          </p>
          <p>
            I'm constantly improving my skills and expanding into new areas like full-stack development, software architecture, and cybersecurity. I don't just want to build websites — I want to build systems that scale, solve real-world problems, and make an impact.
          </p>
          <p>
            When I'm not coding or studying, I'm usually deep-diving into documentation, reverse-engineering something interesting, or learning from the best devs online. I believe in constant growth, collaboration, and never settling for average.
          </p>
        </div>
        
        <div className="service-cards">
          <div className="service-card">
            <div className="card-icon">
              <FaPalette />
            </div>
            <h5>Web Design</h5>
            <p>
              Creating beautiful, responsive, and user-friendly interfaces that provide 
              exceptional user experiences across all devices.
            </p>
          </div>
          
          <div className="service-card">
            <div className="card-icon">
              <FaCode />
            </div>
            <h5>Software Development</h5>
            <p>
              Building robust, scalable, and maintainable applications using modern 
              technologies and best practices in software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About