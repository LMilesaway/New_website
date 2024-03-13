import React, { useState } from 'react';
import './BurgerMenu.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About'; // Import the About component
import Home from './Home';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        <div className={isOpen ? "line line1 open" : "line line1"}></div>
        <div className={isOpen ? "line line2 open" : "line line2"}></div>
        <div className={isOpen ? "line line3 open" : "line line3"}></div>
      </button>
      <div className={isOpen ? "dropdown-menu open" : "dropdown-menu"}>
        <ul>
          <li><Link to="/home" style={{ textDecoration: 'none' }} >Home</Link></li>
          <li><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li> {/* Wrap with Link component */}
          <li><Link to="/tickets" style={{ textDecoration: 'none' }}>Tickets</Link></li>
          <li><Link to="/getting_there" style={{ textDecoration: 'none' }}>Getting There</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;



