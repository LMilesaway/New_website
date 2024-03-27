import React, { useState, useEffect } from 'react';
import './Style.css';
import './App.css';

import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Chai from '../images/Chai_Square.jpg';
import Food from '../images/Food_Square.jpg';
import Music from '../images/Music.jpg';


const About = () => {


  return (

    <div className="background-image aboutbg">
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '1' }}>
        <div style={{ width: '100%', height: '40px' }}>

          <BurgerMenu />
        </div>
        <h1 className='Pagetitle'>About</h1>






        <div className="container about">
          <div class="row row1">
            <div class="column">
              <img src={Chai} alt="Snow" style={{ width: '100%' }} />
            </div>
            <div class="column" style={{ fontSize: '1em' }}>
              <h2 className='tittle'>Activies</h2>
              <p>Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque</p>

            </div>
          </div>
          <div class="row row1">
            <div class="column">
              <img src={Music} alt="Snow" style={{ width: '100%' }} />
            </div>
            <div class="column colfont" >
              <h2 className='tittle'>Music</h2>
              <p className="colfont">Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque</p>
            </div>
          </div>

          <div class="row row1">
            <div class="column">
              <img class="colimage" src={Food} alt="Snow" style={{ width: '100%' }} />
            </div>
            <div class="column colfont">
              <h2 className='tittle'>Food</h2>
              <p className="colfont">Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque</p>

            </div>
          </div>
          <div class="row row1">
            <div class="column colfont">
              <h2 className='tittle'>Things To Bring</h2>
              <p>Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque</p>
            </div>
            <div class="column colfont" >
              <h2 className='tittle'>Things To Bring</h2>
              <p>Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque</p>
            </div>
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
</div>




 <div className="item item-1">
            <h2 className='tittle'>Activies</h2>
            <div className='text'>
              <p  >Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque </p>
            </div>
          </div>


          <div className="item imagewrapper">
            <div className='infobox'>
              <div className='infoimage'>
                <img src={Chai} alt="Description of the image" />
              </div>
              <div className='infotext'>
                <h2 className='tittle'>Activies</h2>
                <div className='abouttext' >
                  <p  >Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque </p>
                </div>
              </div>
            </div>
          </div>



           <div className="item item-1">
            <h2 className='tittle'>Things to bring</h2>
            <div className='text'>
              <p  >Mauris fringilla lacinia turpis, a cursus felis porta in. Donec rutrum feugiat enim, nec tempus metus mattis in. Pellentesque congue eros vitae ligula aliquet tempus. In consequat, lorem vitae accumsan volutpat, metus justo elementum mauris, quis finibus velit mi eget tellus. Nunc at tortor dui. Vestibulum ante turpis, viverra id nulla id, porttitor scelerisque purus. Vivamus ac lacus id felis malesuada bibendum. Curabitur a dui ac lectus pharetra pellentesque </p>
            </div>
          </div>

          <div className="item item-2">
            <h2 className='tittle'><Link to="/home" style={{ textDecoration: 'none' }} >Home</Link></h2>
            <h2 className='tittle'><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></h2>
            <h2 className='tittle'><Link to="/tickets" style={{ textDecoration: 'none' }}>Tickets</Link></h2>
            <h2 className='tittle'><Link to="/getting_there" style={{ textDecoration: 'none' }}>Getting There</Link></h2>

          </div>
*/