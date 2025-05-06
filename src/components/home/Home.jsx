import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [currentState, setCurrentState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState(prev => prev === 1 ? 2 : 1);
    }, 8000); // Changed to 8 seconds for better synchronization

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home ${currentState === 2 ? 'second-image' : ''}`}>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className={`heading ${currentState === 2 ? 'second-heading' : 'first-heading'}`}>
            {currentState === 1 ? (
              <>Hi,<br />I am Hazem</>
            ) : (
              <>I am<br />Front-End Developer</>
            )}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home