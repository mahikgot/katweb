import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="overlay">
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  </div>
);
export default App;
