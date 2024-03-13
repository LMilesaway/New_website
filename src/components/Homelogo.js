import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Homelogo = () => {
  return (
    <div style={{ width: '100%', height: '200px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={logo} alt="Description of your image" style={{ width: '75%', height: '75%', objectFit: 'cover', zIndex: '0' }} />
  </div>
    );
  }

export default Homelogo;