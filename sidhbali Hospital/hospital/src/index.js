import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';

import Navbar from './navbar';
import Footer from './footer';
import Hospitalhomepage from './landing-page/home/Hospital';
import About from './landing-page/about/About';
import Services from './landing-page/services/services';
import Contact from './landing-page/contact/contact-us';
// import ScrollImage from './scrollImage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  <Navbar/>
  <Routes>
     <Route path="/" element={<Hospitalhomepage/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/services" element={<Services/>}/>
     <Route path="/contact" element={<Contact/>}/>
     
    
   
      </Routes>
      {/* <ScrollImage/> */}
      <Footer/>
      </BrowserRouter>
  
  
 );

