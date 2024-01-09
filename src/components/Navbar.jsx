// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar-container ${isMenuOpen ? 'menu-open' : ''} ` }>
      <div className="logo">
        <img src="./media/untitled.png" className="w-12 ml-2" alt="" />
        <div > CLINICAL <span style={{ color: 'red' }}>AI</span> <br /> ASSISTANCE </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'bar1-open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar2-open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar3-open' : ''}`}></div>
      </div>
      <div className={`nav-items ${isMenuOpen ? 'open' : ''} `} style={{
        fontSize:"1.2rem"
      }}>
        <div className="nav-item">Home</div>
        <div className="nav-item">Why We Started</div>
        <div className="nav-item">Swasthya Sathi</div>
        <div className="nav-item">News</div>
        <div className="nav-item">Our Team</div>
        <div className="nav-item"><img src="./media/user.png" className="w-12" alt="" /></div>
      </div>
    </div>
  );
}

export default Navbar;
