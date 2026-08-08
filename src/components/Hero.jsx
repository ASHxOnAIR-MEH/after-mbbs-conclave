import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import Button from './Button';
import {
  Users, MonitorPlay, MessageCircle, Globe, TrendingUp,
  Calendar, ArrowRight, Compass
} from 'lucide-react';

const features = [
  { Icon: Users,        label: 'Expert Speakers' },
  { Icon: MonitorPlay,  label: 'Interactive Sessions' },
  { Icon: MessageCircle,label: 'Live Q&A' },
  { Icon: Globe,        label: 'Networking' },
  { Icon: TrendingUp,   label: 'Career Growth' },
  { Icon: Compass,      label: 'One-to-One Guidance' },
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
          <div className="hero-presents">
            <span className="hero-presents-event">● ONLINE CONCLAVE 2026 ●</span>
          </div>

          <h1 className="hero-title">
            CAREER AFTER <span className="hero-accent">MBBS</span>
          </h1>
          <p className="hero-tagline">Exploring Hidden Treasures</p>
          <h2 className="hero-subtitle">
            Build The Medical Career<br />
            <em>You Actually Want.</em>
          </h2>

          <p className="hero-desc">
            Explore PG pathways, GCC careers, hospital administration,
            healthcare entrepreneurship, AI in medicine, research,
            and <u>global opportunities</u>.
          </p>

          <div className="hero-cta-row">
            <Button href="#pricing" variant="primary" className="btn-lg">
              <Calendar size={15} /> Register Now <ArrowRight size={15} />
            </Button>
            <Button href="#agenda" variant="secondary" className="btn-lg hero-outline-btn">
              <Calendar size={15} /> View Agenda <ArrowRight size={15} />
            </Button>
          </div>

          <div className="hero-features-card">
            {features.map(({ Icon, label }) => (
              <div key={label} className="hero-feat-item">
                <Icon size={18} strokeWidth={2} className="feat-icon" />
                <span className="feat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT ─── */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/images/new-hero-doctors.png" alt="Doctors" className="hero-img" />
          </div>
        </div>
      </div>

      {/* ─── PREMIUM INFO CARDS ─── */}
      <div className="hero-bottom-cards container">
        <div className="info-card countdown-card">
          <div className="info-card-title">Event Starts In</div>
          <Countdown />
        </div>
        
        <div className="info-card highlights-card">
          <div className="hl-item">
            <div className="hl-val">11+</div>
            <div className="hl-label">Career Tracks</div>
          </div>
          <div className="hl-item">
            <div className="hl-val">20+</div>
            <div className="hl-label">Speakers</div>
          </div>
          <div className="hl-item">
            <div className="hl-val">1 to 1</div>
            <div className="hl-label">Interactive Sessions</div>
          </div>
          <div className="hl-item">
            <div className="hl-val">Live</div>
            <div className="hl-label">Q&A</div>
          </div>
        </div>
      </div>
    </section>
  );
}
