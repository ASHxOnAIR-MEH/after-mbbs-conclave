import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import Button from './Button';

const Chip = ({ icon, text }) => (
  <div className="hero-chip">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{icon}</svg>
    {text}
  </div>
);

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src="/images/bg.png" alt="background" className="hero-bg-img" />
        <div className="hero-gradient" />
      </div>

      <div className="hero-content container">
        <p className="hero-presents">
          <span>Indian Medical Association</span><br />
          <span>Parippally branch of Kerala State</span><br />
          <span>presents</span><br />
          <span>Online Conclave 2026</span>
        </p>

        <h1 className="hero-title">
          After MBBS?<br />
          <span>Exploring hidden</span><br />
          <span className="text-emerald">treasures</span>
        </h1>

        <p className="hero-subtitle">
          Exploring Global &amp; Emerging Career Opportunities &mdash;{' '}
          <strong>Online Conclave 2026</strong>
        </p>

        {/* Floating Badges */}
        <div className="hero-floating-badges float-1">
          <div className="hero-badge badge-left">
            <div className="badge-dot" /> 20+ Expert Speakers
          </div>
          <div className="hero-badge badge-right">
            <div className="badge-dot" /> Recorded Content available for missed sessions
          </div>
        </div>

        <Countdown />

        <div className="hero-chips float-2">
          <Chip icon={<rect x="3" y="4" width="18" height="18" rx="2" />} text="Sept 11, 12 & 13, 2026" />
          <Chip icon={<circle cx="12" cy="12" r="10" />} text="6:00 – 9:00 PM IST" />
          <Chip icon={<polygon points="23 7 16 12 23 17 23 7" />} text="Live on Zoom" />
        </div>

        <div className="hero-cta">
          <Button href="#pricing" variant="primary" className="btn-lg">
            Secure Your Pass
          </Button>
          <Button href="#agenda" variant="secondary" className="btn-lg">
            View Agenda
          </Button>
        </div>

        <div className="hero-heroes mt-40 float-2">
          <img src="/images/hero-img1.jpg" alt="Medical Hero 1" className="hero-img-item" />
          <img src="/images/hero-img2.jpg" alt="Medical Hero 2" className="hero-img-item" />
          <div className="hero-img-placeholder hero-img-item">
            <span>A doctor in a suit in a professional meeting</span>
          </div>
        </div>
      </div>
    </section>
  );
}
