import React, { useEffect } from 'react';

import Home from './components/Home'; // Import the Home component
import About from './components/About'; // Import the About component
import BurgerMenu from './components/BurgerMenu'; // Import the BurgerMenu component

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Getting_there from './components/Getting_there';
import Tickets from './components/Tickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/Getting_there" element={<Getting_there/>} />
        <Route index element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
