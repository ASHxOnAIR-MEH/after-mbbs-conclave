import React, { useState } from 'react';
import './Pillars.css';
import {
  Stethoscope, GraduationCap, Globe, Building2, Brain,
  Rocket, Microscope, Heart, ChevronDown, Check,
  MessageCircle, Users, Lightbulb
} from 'lucide-react';

const careers = [
  { label: 'Clinical Practice', Icon: Stethoscope },
  { label: 'MD / MS', Icon: GraduationCap },
  { label: 'DNB', Icon: GraduationCap },
  { label: 'GCC Careers', Icon: Globe },
  { label: 'Europe', Icon: Globe },
  { label: 'USA', Icon: Globe },
  { label: 'Hospital Admin', Icon: Building2 },
  { label: 'Healthcare Entrepreneurship', Icon: Rocket },
  { label: 'Medical Research', Icon: Microscope },
  { label: 'Finding Your Passion', Icon: Heart },
];

export default function Pillars() {
  const [activePath, setActivePath] = useState(null);

  return (
    <section id="pillars" className="pillars-section">

      {/* ── A: Global Perspectives ── */}
      <div className="pillar-block">
        <div className="pillar-bg">
          <div className="pillar-bg-pattern grid-pattern" />
        </div>
        <div className="pillar-content container">
          <div className="pillar-tag">
            <span className="pillar-num">A</span>
            Global Perspectives
          </div>
          <h2 className="pillar-h">
            Hear from doctors<br />across the globe.
          </h2>
          <p className="pillar-p">
            Expert physicians from every continent share first-hand experience of
            building extraordinary careers &mdash; the real costs, real rewards, and real paths.
          </p>
          <div className="flag-chips">
            {['India', 'GCC', 'UK', 'Germany', 'USA', '& more'].map(f => (
              <span key={f} className="flag-chip">{f}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── B: Career Paths ── */}
      <div className="pillar-block" style={{ background: 'var(--gray-bg)' }}>
        <div className="pillar-bg">
          <div className="pillar-bg-pattern dot-pattern" />
        </div>
        <div className="pillar-content center container">
          <div className="pillar-tag" style={{ margin: '0 auto 20px' }}>
            <span className="pillar-num">B</span>
            Diverse Career Paths
          </div>
          <h2 className="pillar-h">
            Every path,<br />mapped out clearly.
          </h2>
          <p className="pillar-p">
            From clinical practice to entrepreneurship &mdash; every option explored so you can
            make the informed choice that fits <em>your</em> life.
          </p>
          <div className="career-grid">
            {careers.map((c, i) => (
              <div key={c.label} className="career-item float-1" style={{ animationDelay: `${i * 0.2}s` }}>
                <button 
                  className={`career-chip ${activePath === i ? 'active' : ''}`}
                  onClick={() => setActivePath(activePath === i ? null : i)}
                >
                  <c.Icon size={16} strokeWidth={2} />
                  <span>{c.label}</span>
                  <ChevronDown size={16} className={`chevron ${activePath === i ? 'rotated' : ''}`} />
                </button>
                <div className={`career-drawer ${activePath === i ? 'open' : ''}`}>
                  <div className="career-drawer-inner">
                    <p><strong>What's happening here:</strong> [Small description of the field]</p>
                    <p><strong>Who is taking the session:</strong> [Speaker Details]</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── C: Live Q&A ── */}
      <div className="pillar-block">
        <div className="pillar-bg">
          <div className="pillar-bg-pattern grid-pattern" />
        </div>
        <div className="pillar-content right container">
          <div className="pillar-tag">
            <span className="pillar-num">C</span>
            Live Q&amp;A
          </div>
          <h2 className="pillar-h">
            Interact directly<br />with our experts.
          </h2>
          <p className="pillar-p">
            Don't just watch &mdash; engage. Ask your burning questions and get personalised
            guidance in real time from the doctors who've been where you want to go.
          </p>
          <div className="qa-grid">
            {[
              { text: 'Real-time questions', Icon: MessageCircle },
              { text: 'Direct expert access', Icon: Users },
              { text: 'Networking', Icon: Lightbulb },
            ].map(f => (
              <div key={f.text} className="qa-item">
                <div className="qa-item-icon">
                  <f.Icon size={28} strokeWidth={1.5} color="var(--emerald)" />
                </div>
                <div className="qa-item-text">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
