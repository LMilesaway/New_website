import React from 'react';
import Audio from './Audio'; // Import your Audio component here

function LeftBox({ scrollToForm }) {
  return (

    <div className="header-left">
      <div className="header">
        <h1>Something Moves</h1>
      </div>
      <div className="left-panel">
        <h2>7th-9th June, 2024</h2>
        <p>East Sussex</p>
        <Audio /> {/* Include your Audio component */}
        <br />
        <p className='blurb'>
        Welcome to our little adventure.
        <br />
        <br/>
        Join us from June 7th to the 9th 2024, to kick the summer off with the very first Something Moves Festival. We are still in the early stages, so this is just for you to get it in your diary nice and early!
        <br/>
        <br/>
        We thought it was about time we did something with all the people we love. The idea is that everyone contributes in whatever way they can and want, whether that’s music, games, art, decorations or food. This is what we make of it; we want to pull together all you creative, crafty, funny, playful, practical people to create something magical. Fill out the form below to RSVP and let us know if you have something you would like to bring or have an idea that needs more people involved.
        <br/>
        <br/>
        Tickets will go on sale soon! We'll send you the ticket link via email, so keep an eye out.

        </p>
        <br />
        
        <button onClick={scrollToForm} className="scroll-button button">
          EVENT REGISTRATION
        </button>
        <br/>
        {/* The Scroll button is now in the LeftBox component */}
      </div>
    </div>
  );
}

export default LeftBox;
