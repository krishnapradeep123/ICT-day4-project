import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';
import Navbar from './Components/Navbar';

 export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
       </Routes>
    </div>
  )
}



