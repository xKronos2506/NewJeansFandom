//import modules and libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Members from './Components/Members/Members';
import Discography from './Components/Discography/Discography';
import Merch from './Components/Merch/Merch';
import Feedback from './Components/Feedback/Feedback';

const App = () => { // app component that renders the navbar and routes
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;