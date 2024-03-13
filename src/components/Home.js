import React, { useState, useEffect } from 'react';
import './Style.css';
import './App.css';
import Header from './Header';
import Homelogo from './Homelogo';
import Footer from './Footer';
import Body from './Body';



const Home = () => {
  return (
    <div>
      <Header/>
      <Homelogo/>
      <Body/>
      <Footer/>
  </div> 
  );
}

export default Home;
