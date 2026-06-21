import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import Button from './Button';
import {
  Users, MonitorPlay, MessageCircle, Globe, TrendingUp,
  Calendar, ArrowRight, Video, Award, PlayCircle
} from 'lucide-react';

const features = [
  { Icon: Users, label: 'Expert\nSpeakers' },
  { Icon: MonitorPlay, label: 'Interactive\nSessions' },
  { Icon: MessageCircle, label: 'Live\nQ&A' },
  { Icon: Globe, label: 'Networking\nOpportunities' },
  { Icon: TrendingUp, label: 'Career\nGrowth' },
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
            <span className="hero-presents-org">INDIAN MEDICAL ASSOCIATION PARIPPALLY BRANCH</span>
            <span className="hero-presents-mid">— presents —</span>
            <span className="hero-presents-event">● ONLINE CONCLAVE 2026 ●</span>
          </div>

          <h1 className="hero-title">
            CAREER AFTER <span className="hero-accent">MBBS</span>
          </h1>
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

          <div className="hero-features">
            {features.map(({ Icon, label }) => (
              <div key={label} className="hero-feat">
                <div className="hero-feat-icon"><Icon size={20} strokeWidth={2} /></div>
                <span className="hero-feat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT ─── */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/images/hero-doctors.png" alt="Doctors" className="hero-img" />
            <div className="hero-float hero-float-1"><Globe size={20} color="#10b981" /></div>
            <div className="hero-float hero-float-2"><Award size={20} color="#10b981" /></div>
            <div className="hero-float hero-float-3"><TrendingUp size={20} color="#10b981" /></div>
            <div className="hero-float hero-float-4"><MessageCircle size={20} color="#10b981" /></div>
          </div>
        </div>
      </div>

      {/* ─── PROGRAMME BAR ─── */}
      <div className="hero-prog-bar">
        <div className="hero-prog-inner container">
          <div className="hero-prog-left">
            <div className="hero-prog-label">3-DAY PROGRAMME</div>
            <div className="hero-prog-meta">
              <div className="hero-prog-chip"><Calendar size={14} /> <span>11–13 SEPT 2026</span></div>
              <div className="hero-prog-chip"><Users size={14} /> <span>Doctors, PGs & Medical Professionals</span></div>
              <div className="hero-prog-chip"><Video size={14} /> <span>Live on Zoom</span></div>
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
            { icon: <TrendingUp size={22} />, val: '11+', label: 'Career Paths' },
            { icon: <Users size={22} />, val: '15+', label: 'Expert Speakers' },
            { icon: <Calendar size={22} />, val: '3', label: 'Live Days' },
            { icon: <PlayCircle size={22} />, val: 'Available', label: 'Recorded Sessions' },
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
