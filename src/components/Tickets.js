import React, { useState, useEffect } from 'react';
import './Style.css';
import './App.css';
import Header from './Header';
import Homelogo from './Homelogo';
import Footer from './Footer';
import Body from './Body';
import background from '../images/WebsiteBackGroundCopy.jpg'
import BurgerMenu from './BurgerMenu';
import Contentbox from './Contentbox';

const Tickets = () => {
  return (
    
    <div style={{ position: 'relative', width: '100%', height: '800px', overflow: 'auto' }}>
  <img
    src={background}
    alt="Description of your image"
    style={{
      width: '100%', // Set the width to 50% to keep the left half of the image
      height: '100%', // Keep the height as 100% to maintain aspect ratio
      objectFit: 'cover',
      position: 'fixed', // Make the background image fixed
      zIndex: '0'// Keep the left half of the image
    }}
  />
  <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '1' }}>
    <div style={{ width: '100%', height: '40px' }}>
      <BurgerMenu />
    </div>

  </div>
</div>
    
  );
}

export default Tickets;
