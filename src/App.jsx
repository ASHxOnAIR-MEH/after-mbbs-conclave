import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyAttend from './components/WhyAttend';
import Community from './components/Community';
import Hospex from './components/Hospex';
import Sponsors from './components/Sponsors';
import Pillars from './components/Pillars';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import RegistrationCTA from './components/RegistrationCTA';
import RegistrationPage from './components/RegistrationPage';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import LegalPage from './components/LegalPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top whenever page changes
  const handleSetPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FloatingBackground />
      <Navbar setCurrentPage={handleSetPage} />

      {currentPage === 'home' ? (
        <>
          <Hero setCurrentPage={handleSetPage} />
          <WhyAttend />
          <Community />
          <Hospex />
          <Sponsors />
          <Pillars />
          <Speakers />
          <Agenda />
          <Pricing setCurrentPage={handleSetPage} />
          <FAQ />
          <RegistrationCTA setCurrentPage={handleSetPage} />
        </>
      ) : currentPage === 'register' ? (
        <RegistrationPage setCurrentPage={handleSetPage} />
      ) : (
        <LegalPage page={currentPage} />
      )}

      <Footer setCurrentPage={handleSetPage} />
    </>
  );
}

export default App;
