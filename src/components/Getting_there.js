import React, { useState, useEffect } from 'react';
import './Style.css';
import Map from './map';

import './App.css';
import Header from './Header';
import Homelogo from './Homelogo';
import Footer from './Footer';
import Body from './Body';
import background from '../images/WebsiteBackGroundCopy.jpg'
import BurgerMenu from './BurgerMenu';
import Contentbox from './Contentbox';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Getting_there = () => {
  return (
    <div className="background-image gtbg">
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '1' }}>
        <div style={{ width: '100%', height: '40px' }}>

          <BurgerMenu />
        </div>
        <h1 className='Pagetitle'>Getting There</h1>
        <div className="container gettingthere ">
          <Map />
          <div className="container about">


            <div class="row row1">
              <div class="column2" style={{ fontSize: '1em' }}>
                <h2 className='tittle'>By Train:</h2>
                <p  >
                  Our nearest stations are East Grinstead and Cowden.
                  The train runs directly from London Victoria or London Bridge to East Grinstead in about 1 hour.
                  From East Grinstead, you can take the 291 bus to Upper Hartfield, where it stops at the entrance of the farm (you will then need to walk about 15 minutes to reach the site – all downhill!). Alternatively, you could take a taxi which would be a 15 minute drive from the station.
                </p>
                <p>
                  Check the 291 bus timetable here. The route would be from East Grinstead Station to Upper Hartfield, Garage.
                  Cowden station is an 11 minute drive away, however it is quite remote and there are no buses or other transport links from here to the farm.
                </p>

                <h2 className='tittle'>Taxi</h2>
                <p  >Local Taxi Services:
                  Uber don’t run around these parts so you may want to plan ahead and book your taxi in advance just to be sure.
                  Local companies include:</p>
                <p>
                  Western Cars - 01342 300000</p>
                <p>
                  Meridian Carz - 01342 326595</p>
                <p>
                  Friends Cars - 01342 618082 </p>

                <h2 className='tittle'>Cycling:</h2>
                <p  >
                  The Forest Way is a beautiful cycling path that runs along an old railway track all the way from East Grinstead and directly through the farm. The ride is about 7 miles long. </p>

              </div>
            </div>




            <div class="row row1">
              <div class="column2" style={{ fontSize: '1em' }}>
                <h2 className='tittle'>By Car:</h2>
                <p  >
                  We have a very limited amount of parking and ask that you please do not arrive by car. If you absolutely need to please contact us asap.
                  The parking will also only be available from 17:30 Pm on Friday. So if you want to arrive early come by train 🙂
                </p>



              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Getting_there;


/*
        <div class="row row1">

          <div class="column2" style={{ fontSize: '1em' }}>
            <h2 className='tittle'>Cycling</h2>


            <p  >Local Taxi Services:
              Uber don’t run around these parts so you may want to plan ahead and book your taxi in advance just to be sure.
              Local companies include:</p>
            <p>
              Western Cars - 01342 300000</p>
            <p>
              Meridian Carz - 01342 326595</p>
            <p>
              Friends Cars - 01342 618082 </p>
          </div>










          <div className="item item-1 white smallp">
            <h2 className='tittle'>By Car</h2>
            <div className='text'>
              <p  >
                We have a very limited amount of parking and ask that you please do not arrive by car. If you absolutely need to please contact us asap. </p>

            </div>

          </div>



          <div className="item item-3 ">
            <p>Contact US</p>
            <p>Email: Somethingmovesfestival@gmail.com</p>
            <p>Instagram</p>*/