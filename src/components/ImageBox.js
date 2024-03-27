import React, { useState, useEffect } from 'react';
import './Style.css';
import './App.css';
import BurgerMenu from './BurgerMenu';



const imageBox = () => {
  return (

        <div style={{  Flex : '1', backgroundColor: 'lightblue', padding: '20px', margin: '10px',alignItems:'center'}}>
          <h2>Tittle</h2>
          <p>This is the first inner flexbox.</p>
        </div>

    );
  }

export default  imageBox;