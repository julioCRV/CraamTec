import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Header from './components/HeaderBostrap/HeaderBostrap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
        </Routes>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
