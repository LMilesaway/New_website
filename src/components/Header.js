import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
    <div style={{ width: '100%', height: '40px', backgroundColor: '#FFFFFF', position: 'relative', zIndex: '1' }}>
      <BurgerMenu />
    </div>
    </div>
    );
  }

export default  Header;



