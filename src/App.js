import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About.jsx';
import Cards from './pages/Cards';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cards" element={<Cards />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;