import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Getting_there = () => {
  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
    <div style={{ width: '100%', height: '40px', backgroundColor: '#FFFFFF', position: 'relative', zIndex: '1' }}>
      <BurgerMenu />
    </div>
    <div style={{ width: '100%', height: '200px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1>Getting There</h1>
    </div>

    <div style={{ width: '100%', height: '340px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377' }}>Box 2</div>
    <div style={{ width: '100%', height: '180px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377' }}>Box 3</div>
    <div style={{ width: '100%', height: '75px', backgroundColor: '#FFFFFF' }}>Box 4</div>
  </div>
    
  );
}

export default Getting_there;
