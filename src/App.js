import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="overlay">
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="works" element="tanga" />
        <Route path="about" element="about" />
      </Route>
    </Routes>
  </div>
);
export default App;
