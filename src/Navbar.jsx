import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
         
          <Link to="/">Home</Link>
          
          <Link to="/projetos">Projetos</Link>
        
          <Link to="/Contato">Contato</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
