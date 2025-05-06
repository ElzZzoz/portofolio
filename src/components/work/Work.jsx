import React, { useState } from 'react';
import './Work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import images
import portfolioImg from '../../assets/portofolio.png';
import bankistV1Img from '../../assets/bankist_v1.png';
import bankistV2Img from '../../assets/bankist_v2.png';
import jadooImg from '../../assets/jadoo.png';
import pigImg from '../../assets/pig.png';
import leonImg from '../../assets/leon.png';

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers",
      image: portfolioImg,
      tags: ["HTML", "CSS", "JavaScript" , "React" ,"Bootstrap"],
      github: "https://github.com/yourusername/portfolio",
      demo: "/", // Changed to home route
      isInternal: true // Flag to identify internal links
    },
    {
      id: 2,
      title: "Bankist Website",
      description: "A fully responsive bakist app that applies advanced dom principles",
      image: bankistV1Img,
      tags: ["Html", "Css", "JavaScript"],
      github: "https://github.com/ElzZzoz/bankist-v2",
      demo: "https://elzzzoz.github.io/bankist-v2/"
    },
    {
      id: 3,
      title: "Bankist Version 2",
      description: "Bankist website that applies money transactions dealing with arrays and objects and destructring ",
      image: bankistV2Img,
      tags: ["Html", "Javascript", "CSS"],
      github: "https://github.com/ElzZzoz/bankist-v1",
      demo: "https://elzzzoz.github.io/bankist-v1/"
    },
    {
      id: 4,
      title: "Jadoo travel agency",
      description: "A responsive travel agency website that applies advanced dom principles",
      image: jadooImg,
      tags: ["Html", "Css"],
      github: "https://github.com/ElzZzoz/landing_task",
      demo: "https://elzzzoz.github.io/landing_task/"
    },
    {
      id: 5,
      title: "Pig game",
      description: "Funny javascript game that can be played with two players",
      image: pigImg,
      tags: ["Html", "Javascript", "Css"],
      github: "https://github.com/ElzZzoz/pig-game",
      demo: "https://elzzzoz.github.io/pig-game/"
    },
    {
      id: 6,
      title: "Leon site",
      description: "A responsive website that applies responsive design principles",
      image: leonImg,
      tags: ["React", "Socket.io", "Express"],
      github: "https://github.com/ElzZzoz/template-1",
      demo: "https://elzzzoz.github.io/template-1/"
    }
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="work-container">
      <div className="work-content">
        <h6 className="work-subtitle">MY PORTFOLIO</h6>
        <h4 className="work-title">Recent Projects</h4>
        
        <div className="work-text">
          <p>
            Here are some of the projects I've worked on. Each project represents a unique challenge
            and showcases different aspects of my skills and problem-solving approach.
          </p>
        </div>
        
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  {project.isInternal ? (
                    <Link to={project.demo} className="project-link">
                      <FaExternalLinkAlt />
                    </Link>
                  ) : (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length > 4 && (
          <button className="show-more-button" onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;