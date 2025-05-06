import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import profilePhoto from '../../assets/profile_photo.jpg'

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <img 
            src={profilePhoto}
            alt="Profile" 
            className="profile-image"
          />
          <h3>Hazem Soltan</h3>
          <p className="developer-title">
            <span className="highlight">Front-End</span> Developer
          </p>
        </div>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)}>
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/experience" onClick={() => setExpanded(false)}>
            Experience
          </Nav.Link>
          <Nav.Link as={Link} to="/work" onClick={() => setExpanded(false)}>
            Work
          </Nav.Link>
        </Nav>
      </div>

      {/* Mobile Navigation */}
      <Navbar 
        expanded={expanded} 
        className="mobile-navbar d-lg-none" 
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand className="mobile-brand">
          <img 
            src={profilePhoto}
            alt="Profile" 
            className="mobile-profile-image"
          />
          <span>Hazem Soltan</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" onClick={() => setExpanded(false)}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/work" onClick={() => setExpanded(false)}>
              Work
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar