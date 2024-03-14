import React, { useState, useEffect } from 'react';
import './Style.css';
import logo from './Logo_Square.png';
import './App.css';
import BurgerMenu from './BurgerMenu';
import Textbox from './Texbox';
import ImageBox from './ImageBox';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const Contentbox = () => {
  return (


    <div className="container">
    <div className="item item-1">
        <h2 className='tittle'>Tittle</h2>
        <div className='text'>
        <p  >Join us from June 7th to the 9th 2024, to kick the summer off with the very first Something Moves Festival. We are still in the early stages, so this is just for you to get it in your diary nice and early!

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
  
   
   
    );
  }

export default  Contentbox;



/*

<div className="myFlexedImage">
            <img src="/your-image.jpg" alt="Image Description" />
    </div>

 <div style={{ display: 'flex', backgroundColor: 'Green', width: '100%', minHeight: '340px', justifyContent: 'space-evenly', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '95%', marginTop: '20px', marginBottom: '20px', alignItems: 'center' }}>
      
      <div style={{ flex: '1', backgroundColor: 'lightblue', padding: '20px', margin: '10px', alignItems: 'center' }}>
        <h2>Title</h2>
        <p>This is the first inner flexbox.</p>
      </div>
  
      <div style={{ flex: '', backgroundColor: 'lightgreen1', padding: '20px', margin: '10px', alignItems: 'center' }}>
        <h2>Inner Flexbox 2</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
  
    </div>
  </div>

<div style={{ display:'item', backgroundColor: 'Green', width:'380px', height: '340px'}}>
         <div style={{ display: 'flex',flexDirection: 'Column', alignItems: 'flex-start', width: '100%',justifyContent:'space-evenly'}}>

         <div style={{ display:'item', backgroundColor: 'Red', width:'50%', height: '95%'}}></div>
         <div style={{ display:'item', backgroundColor: 'Red', width:'50%', height: '95%'}}></div>

         </div>
        HelloHelloHelloHello </div>*/