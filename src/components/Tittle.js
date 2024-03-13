import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';



const Tittle = ({Tittle}) => {
  return (
    <div style={{ width: '100%', height: '200px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{Tittle}</h1>
    </div>
    );
  }

export default  Tittle;