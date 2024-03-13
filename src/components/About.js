import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';
import Header from './Header';
import Tittle from './Tittle';
import Footer from './Footer';



const About = () => {


  return (
    <div>
    <Header/>
    <Tittle Tittle={'About'}/>
    <div style={{ width: '100%', height: '340px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377' }}>Box 2</div>
    <div style={{ width: '100%', height: '180px', backgroundColor: '#FFFFFF', borderBottom: '2px solid #120377' }}>Box 3</div>
    <Footer/>
  </div>
    
  );
}

export default About;
