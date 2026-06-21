import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import Button from './Button';

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const highlights = [
  { icon: '🎓', text: 'Expert Speakers' },
  { icon: '💬', text: 'Interactive Sessions' },
  { icon: '🔴', text: 'Live Q&A' },
  { icon: '🌍', text: 'Career Guidance' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src="/images/bg.png" alt="" className="hero-bg-img" />
        <div className="hero-gradient" />
      </div>

      <div className="hero-content container">
        {/* ─── Left Column ─── */}
        <div className="hero-left">
          <div className="hero-badge">
            IMA Kerala State &middot; Parippally Branch
          </div>

          <h1 className="hero-title">
            CAREER AFTER{' '}
            <span className="hero-title-accent">MBBS</span>
          </h1>
          <h2 className="hero-headline">
            Build The Medical Career<br />
            <span className="hero-headline-em">You Actually Want.</span>
          </h2>

          <p className="hero-desc">
            Explore PG pathways, GCC careers, hospital administration,
            healthcare entrepreneurship, AI in medicine, research,
            and global opportunities.
          </p>

          <div className="hero-cta">
            <Button href="#pricing" variant="primary" className="btn-lg">
              Register Now <IconArrow />
            </Button>
            <Button href="#agenda" variant="secondary" className="btn-lg hero-cta-outline">
              <IconCalendar /> View Agenda
            </Button>
          </div>

          <div className="hero-highlights">
            {highlights.map(h => (
              <div key={h.text} className="hero-hl-chip">
                <span className="hero-hl-emoji">{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Right Column ─── */}
        <div className="hero-right">
          <div className="hero-image-container">
            <img
              src="/images/hero-doctors.png"
              alt="Team of young doctors ready to explore careers after MBBS"
              className="hero-main-img"
            />
          </div>
        </div>
      </div>

      {/* ─── Event Info Bar ─── */}
      <div className="hero-info-bar">
        <div className="hero-info-inner container">
          <div className="hero-info-chip">
            <IconCalendar /> <span>Sept 11–13, 2026</span>
          </div>
          <div className="hero-info-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="13" height="12" rx="2"/><polygon points="23 7 16 12 23 17 23 7"/></svg>
            <span>Live on Zoom</span>
          </div>
          <div className="hero-info-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span>MBBS Students & Young Doctors</span>
          </div>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
