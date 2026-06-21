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
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4b5563', fontWeight: '600' }}>
            INDIAN MEDICAL ASSOCIATION PARIPPALLY BRANCH
          </div>
          <div style={{ fontStyle: 'italic', color: '#16a34a', margin: '8px 0', fontSize: '0.95rem' }}>
            — presents —
          </div>
          <div style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--black-1)', fontSize: '1.1rem' }}>
            ONLINE CONCLAVE 2026
          </div>
        </div>

        <h1 className="hero-title">
          After MBBS?<br />
          <span>Exploring hidden</span><br />
          <span className="text-emerald">treasures</span>
        </h1>

        <p className="hero-subtitle">
          Exploring Global &amp; Emerging Career Opportunities &mdash;{' '}
          <strong>Online Conclave 2026</strong>
        </p>


        <Countdown />

        <div className="hero-chips float-2">
          <Chip icon={<rect x="3" y="4" width="18" height="18" rx="2" />} text="Sept 11, 12 & 13, 2026" />
          <Chip icon={<circle cx="12" cy="12" r="10" />} text="6:00 – 9:00 PM IST" />
          <Chip icon={<polygon points="23 7 16 12 23 17 23 7" />} text="Live on Zoom" />
        </div>

        <div className="hero-recorded-badge">
          <div className="badge-dot" />
          <span>Recorded Content available for missed sessions</span>
        </div>

        <div className="hero-cta">
          <Button href="#pricing" variant="primary" className="btn-lg">
            Secure Your Pass
          </Button>
          <Button href="#agenda" variant="secondary" className="btn-lg">
            View Agenda
          </Button>
        </div>

      </div>
    </section>
  );
}
