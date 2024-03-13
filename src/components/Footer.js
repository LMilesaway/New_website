import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Footer = () => {
  return (
    <div className='Footer'style={{ width: '100%', height: '75px', backgroundColor: '#FFFFFF',borderTop: '2px solid #120377' }}>
        <p>Contact US</p>
        <p>Email: Somethingmovesfestival@gmail.com</p>
        
        </div>
    );
  }

export default  Footer;