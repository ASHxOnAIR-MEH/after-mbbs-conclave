import React from 'react';
import './Pillars.css';

const careers = [
  { label: 'Clinical Practice' },
  { label: 'MD / MS' },
  { label: 'DNB' },
  { label: 'GCC Careers' },
  { label: 'Europe' },
  { label: 'USA' },
  { label: 'Hospital Admin' },
  { label: 'Healthcare Entrepreneurship' },
  { label: 'Medical Research' },
  { label: 'Finding Your Passion' },
];

export default function Pillars() {
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
              <span key={f} className="flag-chip" dangerouslySetInnerHTML={{ __html: f }} />
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
              <div key={c.label} className="career-chip float-1" style={{ animationDelay: `${i * 0.2}s` }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{c.label}</span>
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
              { text: 'Real-time questions' },
              { text: 'Direct expert access' },
              { text: 'Networking' },
            ].map(f => (
              <div key={f.text} className="qa-item">
                <div className="qa-item-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
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
