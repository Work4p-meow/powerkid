import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Cost from './page/Cost';
import Course from './page/Course';
import Enroll from './page/Enroll';
import Trial from './page/Trial';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cost' element={<Cost />} />
        <Route path='/course' element={<Course />} />
        <Route path='/enroll' element={<Enroll />} />
        <Route path='/trial' element={<Trial />} />
      </Routes>
    </Router>
  );
}

export default App;
