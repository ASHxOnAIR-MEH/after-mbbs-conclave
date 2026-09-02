import React, { useEffect, useRef } from 'react';
import './Hero.css';
import './Hospex.css';
import Countdown from './Countdown';
import Button from './Button';
import { ArrowRight, MapPin, Wifi, Calendar } from 'lucide-react';

const stats = [
  { value: '50,000+',      label: 'Expected Event Reach' },
  { value: '3.5 Lakh+',   label: 'IMA Doctors · India' },
  { value: '45,000–55,000', label: 'Active Doctors · Kerala' },
  { value: '1-to-1',      label: 'Interactive Career Guidance' },
];

export default function Hero({ setCurrentPage }) {
  const heroRef = useRef(null);

  /* Subtle parallax on desktop only */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const img = hero.querySelector('.hero-img');
      if (img && window.innerWidth > 900) {
        img.style.transform = `translateY(${y * 0.04}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>

      {/* ── Subtle medical SVG background art ── */}
      <div className="hero-art" aria-hidden="true">
        {/* ECG line */}
        <svg className="hero-art-ecg" viewBox="0 0 800 120" fill="none">
          <polyline
            points="0,60 80,60 110,10 130,110 150,30 170,90 200,60 800,60"
            stroke="currentColor" strokeWidth="2" fill="none"
          />
        </svg>
        {/* DNA helix circles */}
        <svg className="hero-art-dna" viewBox="0 0 80 300" fill="none">
          {[0,1,2,3,4,5,6].map(i => (
            <ellipse key={i} cx="40" cy={20 + i * 40} rx="30" ry="10"
              stroke="currentColor" strokeWidth="1.5" fill="none"
              opacity={0.6 - i * 0.05}
            />
          ))}
          <line x1="20" y1="20" x2="20" y2="260" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="60" y1="20" x2="60" y2="260" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        {/* Medical cross */}
        <svg className="hero-art-cross" viewBox="0 0 60 60" fill="none">
          <rect x="20" y="4" width="20" height="52" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="4" y="20" width="52" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
        {/* Network nodes */}
        <svg className="hero-art-nodes" viewBox="0 0 200 200" fill="none">
          {[[100,50],[50,130],[150,130],[30,70],[170,70]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          ))}
          <line x1="100" y1="50" x2="50" y2="130" stroke="currentColor" strokeWidth="1"/>
          <line x1="100" y1="50" x2="150" y2="130" stroke="currentColor" strokeWidth="1"/>
          <line x1="50"  y1="130" x2="150" y2="130" stroke="currentColor" strokeWidth="1"/>
          <line x1="100" y1="50" x2="30" y2="70"  stroke="currentColor" strokeWidth="1"/>
          <line x1="100" y1="50" x2="170" y2="70" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      {/* ── Emerald glow behind image ── */}
      <div className="hero-img-glow" aria-hidden="true" />

      <div className="hero-inner container">

        {/* ════════ LEFT COLUMN — TEXT ════════ */}
        <div className="hero-left">

          {/* Main title */}
          <h1 className="hero-title hero-animate-up" style={{ '--delay': '80ms' }}>
            CAREER AFTER<br />
            <span className="hero-accent">MBBS</span>
          </h1>

          {/* Elegant italic tagline */}
          <p className="hero-tagline hero-animate-up" style={{ '--delay': '140ms' }}>
            Exploring Hidden Treasures
          </p>

          {/* Subtitle */}
          <h2 className="hero-subtitle hero-animate-up" style={{ '--delay': '180ms' }}>
            Build The Medical Career <em>You Actually Want.</em>
          </h2>

          {/* Description */}
          <p className="hero-desc hero-animate-up" style={{ '--delay': '220ms' }}>
            Explore PG pathways, GCC careers, global opportunities, hospital administration,
            healthcare entrepreneurship, research, innovation and diverse medical careers.
          </p>

          {/* Event info — NO card, pure typography */}
          <div className="hero-event-strip hero-animate-up" style={{ '--delay': '260ms' }}>
            <div className="hero-event-main-row">
              <span className="hero-ev-item">
                <Calendar size={13} strokeWidth={2.5} />
                24–26 SEPTEMBER 2026
              </span>
              <span className="hero-ev-dot">·</span>
              <span className="hero-ev-item">
                <MapPin size={13} strokeWidth={2.5} />
                KOCHI, KERALA
              </span>
              <span className="hero-ev-dot">·</span>
              <span className="hero-ev-item hero-ev-hybrid">HYBRID EVENT</span>
            </div>
            <p className="hero-ev-sub">
              Offline at Chakolas Pavilion Events Center&nbsp;·&nbsp;Live online via Zoom
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-cta-row hero-animate-up" style={{ '--delay': '310ms' }}>
            <Button variant="primary" className="btn-lg hero-btn-primary" href="https://chat.whatsapp.com/He6WRwKDYvvJ118837dfH9" target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight size={16} />
            </Button>
            <Button href="#agenda" variant="secondary" className="btn-lg hero-btn-outline">
              View Agenda <ArrowRight size={16} />
            </Button>
          </div>

        </div>

        {/* ════════ RIGHT COLUMN — IMAGE + COUNTDOWN ════════ */}
        <div className="hero-right hero-animate-img">
          {/* Gold accent line — desktop only */}
          <div className="hero-gold-line" aria-hidden="true" />

          {/* Image */}
          <div className="hero-img-wrap">
            <img
              src="/images/new-hero-doctors.png"
              alt="Medical professionals at Career After MBBS Conclave"
              className="hero-img"
            />
          </div>

          {/* Countdown — floating card on desktop, inline card on mobile */}
          <div className="hero-countdown-float" aria-label="Event countdown">
            <div className="hero-cd-label">Event Starts In</div>
            <Countdown />
          </div>
        </div>

      </div>

      {/* ════════ STATS STRIP ════════ */}
      <div className="hero-stats-strip container">
        {stats.map((s, i) => (
          <div key={s.label} className="hero-stat-item">
            <div className="hero-stat-value">{s.value}</div>
            <div className="hero-stat-label">{s.label}</div>
            {i < stats.length - 1 && <div className="hero-stat-divider" aria-hidden="true" />}
          </div>
        ))}
      </div>

    </section>
  );
}
