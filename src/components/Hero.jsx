import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import Button from './Button';

/* Tiny inline SVG icons */
const IconSpeaker = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBoard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconLive = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
    <rect x="2" y="6" width="13" height="12" rx="2"/><polygon points="23 7 16 12 23 17 23 7"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconCertificate = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const highlights = [
  { Icon: IconSpeaker, text: 'Expert Speakers' },
  { Icon: IconBoard,   text: 'Interactive Sessions' },
  { Icon: IconLive,    text: 'Live Q&A' },
  { Icon: IconBriefcase, text: 'Career Opportunities' },
];

const eventMeta = [
  { Icon: IconCalendar,    text: '11-13 SEPT 2026' },
  { Icon: IconMonitor,     text: 'Live on Zoom' },
  { Icon: IconUsers,       text: 'Doctors, PGs & Medical Professionals' },
  { Icon: IconCertificate, text: 'Certificate of Participation' },
];

const floatingTags = [
  'Global Opportunities',
  'AI in Healthcare',
  'Research & Innovation',
  'Leadership & Beyond',
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
          <div className="hero-presents-bar">
            <span className="hero-presents-text">
              INDIAN MEDICAL ASSOCIATION PARIPPALLY BRANCH
            </span>
            <span className="hero-presents-divider">— presents —</span>
            <span className="hero-presents-sub">● ONLINE CONCLAVE 2026 ●</span>
          </div>

          <h1 className="hero-title">
            BEYOND <span className="hero-title-accent">MBBS</span>
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
            {highlights.map(({ Icon, text }) => (
              <div key={text} className="hero-hl-item">
                <div className="hero-hl-icon"><Icon /></div>
                <span className="hero-hl-text">{text}</span>
              </div>
            ))}
          </div>

          <div className="hero-event-bar">
            <div className="hero-event-label">3-DAY PROGRAMME</div>
            <div className="hero-event-meta">
              {eventMeta.map(({ Icon, text }) => (
                <div key={text} className="hero-event-chip">
                  <Icon /><span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Right Column ─── */}
        <div className="hero-right">
          <div className="hero-image-wrap">
            <img
              src="/images/beyond-mbbs.png"
              alt="Doctors discussing careers beyond MBBS"
              className="hero-main-img"
            />
            {/* Floating tag pills */}
            <div className="hero-float-tags">
              {floatingTags.map(tag => (
                <div key={tag} className="hero-float-tag">{tag}</div>
              ))}
            </div>
          </div>
          <div className="hero-countdown-wrap">
            <Countdown />
          </div>
        </div>
      </div>

      {/* ─── Stats Strip ─── */}
      <div className="hero-stats-strip">
        <div className="hero-stats-inner container">
          {[
            { value: '11+', label: 'Career Paths', icon: '🎯' },
            { value: '15+', label: 'Expert Speakers', icon: '⭐' },
            { value: '3',   label: 'Live Days', icon: '📅' },
            { value: '1000+', label: 'Expected Participants', icon: '👥' },
          ].map(s => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-icon">{s.icon}</span>
              <div>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
