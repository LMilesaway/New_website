import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Something_Moves_24.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Homelogo = () => {
  return (
    <div style={{ width: '100%', height: '200px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' , zIndex: '2' }}>
    <img src={logo} alt="Description of your image" style={{ width: '75%', height: '75%', objectFit: 'cover', zIndex: '2' }} />
  </div>
    );
  }

export default Homelogo;