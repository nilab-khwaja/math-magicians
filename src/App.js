import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import Quote from './components/quote';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
