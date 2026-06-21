import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StrangeDoctor from './components/StrangeDoctor';
import Pillars from './components/Pillars';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Pricing from './components/Pricing';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import LegalPage from './components/LegalPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <>
      <FloatingBackground />
      <Navbar setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <About />
          <StrangeDoctor />
          <Pillars />
          <Speakers />
          <Agenda />
          <Pricing />
          <Sponsors />
        </>
      ) : (
        <LegalPage page={currentPage} />
      )}

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
