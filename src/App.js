// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './styles/Navbar';
import Home from './component/Home';
import Service from './component/Service';
import Contact from './component/Contact';
import Login from './component/Login';
import About from './component/About';
import Register from './component/Register';
import Error from './component/Error';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Error/>} ></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
