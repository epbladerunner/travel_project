import React from 'react';

import './App.css';

import {  Route, Routes, } from 'react-router-dom';

import {Home} from './components/pages/home';
import{ About} from './components/pages/about';
import {UserProfile} from './components/pages/user-profile';
import {Blog} from './components/pages/blog';
import{Bookings} from './components/pages/Bookings';
import {Plan} from './components/pages/Plan';

import {Support} from './components/pages/Support';
import {Nav} from './components/common/nav'

function App() {
  return (
 
    <Routes>  
    <Route path="/" element = {<Nav/>}>
    <Route index element = {<Home/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/Plan" element={< Plan/>} />
    <Route path="/user-profile" element={<UserProfile />} />
    <Route path="/Bookings" element={<Bookings/>} />
    <Route path="/Support" element={<Support />} />
  </Route>
</Routes>
  );

}

export default App;
