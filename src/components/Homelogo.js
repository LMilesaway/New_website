import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from '../images/Something_Moves_24.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Homelogo = () => {
  return (
    <div className="homelogo" style={{ width: '100%', height: '200px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' , zIndex: '2' }}>
    <img className='logoimage' src={logo} alt="Description of your image"/>
  </div>
    );
  }

export default Homelogo;