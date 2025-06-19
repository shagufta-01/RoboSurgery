import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SpecialtyPage from './pages/SpecialtyPage';
import AppointmentPage from './pages/AppointmentPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/specialty/:specialtyId" element={<SpecialtyPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;