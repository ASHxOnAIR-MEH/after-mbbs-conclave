import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import Button from './Button';

/* ── Inline SVG Icons ── */
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const IconCal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);

const features = [
  { emoji: '👨‍⚕️', label: 'Expert\nSpeakers' },
  { emoji: '💻', label: 'Interactive\nSessions' },
  { emoji: '🔴', label: 'Live\nQ&A' },
  { emoji: '🌐', label: 'Networking\nOpportunities' },
  { emoji: '📈', label: 'Career\nGrowth' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src="/images/bg.png" alt="" className="hero-bg-img" />
        <div className="hero-gradient" />
      </div>

      <div className="hero-main container">
        {/* ─── LEFT ─── */}
        <div className="hero-left">
          {/* Presents badge */}
          <div className="hero-presents">
            <span className="hero-presents-org">INDIAN MEDICAL ASSOCIATION PARIPPALLY BRANCH</span>
            <span className="hero-presents-mid">— presents —</span>
            <span className="hero-presents-event">● ONLINE CONCLAVE 2026 ●</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            CAREER AFTER <span className="hero-accent">MBBS</span>
          </h1>
          <h2 className="hero-subtitle">
            Build The Medical Career<br />
            <em>You Actually Want.</em>
          </h2>

          {/* Desc */}
          <p className="hero-desc">
            Explore PG pathways, GCC careers, hospital administration,
            healthcare entrepreneurship, AI in medicine, research,
            and <u>global opportunities</u>.
          </p>

          {/* CTA */}
          <div className="hero-cta-row">
            <Button href="#pricing" variant="primary" className="btn-lg">
              <IconCal /> Register Now <IconArrow />
            </Button>
            <Button href="#agenda" variant="secondary" className="btn-lg hero-outline-btn">
              <IconCal /> View Agenda <IconArrow />
            </Button>
          </div>

          {/* Feature icons */}
          <div className="hero-features">
            {features.map(f => (
              <div key={f.label} className="hero-feat">
                <div className="hero-feat-icon">{f.emoji}</div>
                <span className="hero-feat-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT ─── */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/images/hero-doctors.png" alt="Doctors" className="hero-img" />
            {/* Floating decorative icons */}
            <div className="hero-float hero-float-1">🩺</div>
            <div className="hero-float hero-float-2">🤖</div>
            <div className="hero-float hero-float-3">🌍</div>
            <div className="hero-float hero-float-4">💊</div>
          </div>
        </div>
      </div>

      {/* ─── PROGRAMME BAR ─── */}
      <div className="hero-prog-bar">
        <div className="hero-prog-inner container">
          <div className="hero-prog-left">
            <div className="hero-prog-label">3-DAY PROGRAMME</div>
            <div className="hero-prog-meta">
              <div className="hero-prog-chip"><IconCal /> <span>11–13 SEPT 2026</span></div>
              <div className="hero-prog-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                <span>Doctors, PGs & Medical Professionals</span>
              </div>
              <div className="hero-prog-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="13" height="12" rx="2"/><polygon points="23 7 16 12 23 17 23 7"/></svg>
                <span>Live on Zoom</span>
              </div>
            </div>
          </div>
          <div className="hero-prog-countdown">
            <Countdown />
          </div>
        </div>
      </div>

      {/* ─── STATS STRIP ─── */}
      <div className="hero-stats">
        <div className="hero-stats-inner container">
          {[
            { icon: '🎯', val: '11+', label: 'Career Paths' },
            { icon: '⭐', val: '15+', label: 'Expert Speakers' },
            { icon: '📅', val: '3',   label: 'Live Days' },
            { icon: '👥', val: '1000+', label: 'Expected Participants' },
          ].map(s => (
            <div key={s.label} className="hero-stat-item">
              <span className="hero-stat-emoji">{s.icon}</span>
              <span className="hero-stat-val">{s.val}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
