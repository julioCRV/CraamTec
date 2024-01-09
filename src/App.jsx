import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Header from './components/HeaderBostrap/HeaderBostrap';
import Footer from './components/Footer/Footer';
// import Pr from './pruebas'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Footer />
      </div>
      {/* <Pr /> */}

    </Router>
  );
}

export default App;
