import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyAttend from './components/WhyAttend';
import Pillars from './components/Pillars';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import RegistrationCTA from './components/RegistrationCTA';
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
          <WhyAttend />
          <Pillars />
          <Speakers />
          <Agenda />
          <Pricing />
          <FAQ />
          <RegistrationCTA />
        </>
      ) : (
        <LegalPage page={currentPage} />
      )}

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
