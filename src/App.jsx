import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StrangeDoctor from './components/StrangeDoctor';
import Pillars from './components/Pillars';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <StrangeDoctor />
      <Pillars />
      <Speakers />
      <Agenda />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
