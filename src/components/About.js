import React, { useState, useEffect } from 'react';
import './Style.css';
import './App.css';
import Header from './Header';
import Homelogo from './Homelogo';
import Footer from './Footer';
import Body from './Body';
import Tittle from './Tittle'; 
import background from './WebsiteBackGroundCopy.jpg'
import BurgerMenu from './BurgerMenu';
import Contentbox from './Contentbox';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const About = () => {


  return (

    <div className="background-image">
    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '1' }}>
   <div style={{ width: '100%', height: '40px' }}>

     <BurgerMenu />
   </div>
   <h1 className='Pagetitle'>About</h1>
  
   <div className="container">
    <div className="item item-1">
        <h2 className='tittle'>Tittle</h2>
        <div className='text'>
        <p  >Join usf from June 7th to the 9th 2024, to kick the summer off with the very first Something Moves Festival. We are still in the early stages, so this is just for you to get it in your diary nice and early!

        We thought it was about time we did something with all the people we love. The idea is that everyone contributes in whatever way they can and want, whether that’s music, games, art, decorations or food. This is what we make of it; we want to pull together all you creative, crafty, funny, playful, practical people to create something magical. Fill out the form below to RSVP and let us know if you have something you would like to bring or have an idea that needs more people involved.

        Tickets will go on sale soon! We'll send you the ticket link via email, so keep an eye out. </p>
        </div>

    </div>
  
    <div className="item item-2">
    <h2 className='tittle'><Link to="/home" style={{ textDecoration: 'none' }} >Home</Link></h2>
    <h2 className='tittle'><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></h2>
    <h2 className='tittle'><Link to="/tickets" style={{ textDecoration: 'none' }}>Tickets</Link></h2>
    <h2 className='tittle'><Link to="/getting_there" style={{ textDecoration: 'none' }}>Getting There</Link></h2>

    </div>

  

    

    <div className="item item-3">
    <p>Contact US</p>
        <p>Email: Somethingmovesfestival@gmail.com</p>

    </div>
  </div>
  
   



   </div>
     
 
</div>

    
  );
}

export default About;



/*</div>
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
</div>*/