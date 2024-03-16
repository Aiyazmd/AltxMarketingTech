import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
import Service from "./Service/Service"
import Contact from './Contact/ContactUs';
const HeaderRoute = () => {
  return (
    <div>
         <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  )
}

export default HeaderRoute