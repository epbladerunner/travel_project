import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './components/travel';
import TravelCreditCardFeatures from './components/TravelCreditCardFeatures';
import { SearchBar } from './components/common/search';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/nav';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home-page';

const App = () => {
  return (
    <><Router>
      <div>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router><TravelCreditCardFeatures /></>
  );
};

export default App;