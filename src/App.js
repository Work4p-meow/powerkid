import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Cost from './page/Cost';
import Course from './page/Course';
import Enroll from './page/Enroll';
import Trial from './page/Trial';
import Footer from './component/Footer';
import EnterpCourse from './page/EnterpCourse';
import FinanceCourse from './page/FinanceCourse';
import TechCourse from './page/TechCourse';

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/cost' element={<Cost />} />
      <Route path='/course' element={<Course />} />
      <Route path='/enterp-course' element={<EnterpCourse />} />
      <Route path='/finance-course' element={<FinanceCourse />} />
      <Route path='/tech-course' element={<TechCourse />} />
      <Route path='/enroll' element={<Enroll />} />
      <Route path='/trial' element={<Trial />} />
    </Routes>
  </Router>
  <Footer />
    </>
  );
}

export default App;
