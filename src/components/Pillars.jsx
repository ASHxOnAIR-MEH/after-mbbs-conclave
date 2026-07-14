import React, { useState } from 'react';
import './Pillars.css';
import {
  Stethoscope, GraduationCap, Globe, Building2, Brain,
  Rocket, Microscope, Heart, ChevronDown, Check,
  MessageCircle, Users, Lightbulb
} from 'lucide-react';

const careers = [
  { 
    label: 'Clinical Practice', Icon: Stethoscope,
    points: [
      'What a practice after MBBS worthy', 
      'How to create your own career after MBBS', 
      'Social Media optimization'
    ]
  },
  { 
    label: 'MD / MS', Icon: GraduationCap,
    points: [
      'How to choose your dream career', 
      'Hidden possibilities after specialization', 
      'Plan for settle early in life'
    ]
  },
  { 
    label: 'DNB', Icon: GraduationCap,
    points: [
      'How to choose a DNB courses', 
      'Approach to 6 year M.Ch courses', 
      'Career after DNB'
    ]
  },
  { 
    label: 'GCC Careers', Icon: Globe,
    points: [
      'Pathway to GCC countries', 
      'Possibilities in GCC countries', 
      'Challenges in GCC countries'
    ]
  },
  { 
    label: 'Europe', Icon: Globe,
    points: [
      'Plan Europe in MBBS itself', 
      'Pathway to Europe', 
      'Which european country to choose'
    ]
  },
  { 
    label: 'USA', Icon: Globe,
    points: [
      'How to approach USMLE', 
      'Challenges in USA migration', 
      'Career after USA migration'
    ]
  },
  { 
    label: 'Hospital Admin', Icon: Building2,
    points: [
      'How to choose your career in administration', 
      'Is your degree enough to excell', 
      'Top unexplored opportunities'
    ]
  },
  { 
    label: 'Healthcare Entrepreneurship', Icon: Rocket,
    points: [
      'When to start your entrepreneurship', 
      'How to find your niche', 
      'Basic skills for excellence'
    ]
  },
  { 
    label: 'Medical Research', Icon: Microscope,
    points: [
      'How to start your research career', 
      'Best countries for research career', 
      'Converting research into financial goals'
    ]
  },
  { 
    label: 'Finding Your Passion', Icon: Heart,
    points: [
      'How to shape your career', 
      'How to avoid the regret later', 
      'Best resources for career support'
    ]
  },
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
        <div className="pillar-content-wrapper container">
          <div className="pillar-content">
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
          <div className="pillar-image-container">
            <img src="/images/global-poster.png" alt="Global Connectivity" className="pillar-poster-landscape float-1" />
          </div>
        </div>
      </div>

      {/* ── B: Career Paths ── */}
      <div className="pillar-block pillar-block-b">
        <div className="pillar-bg">
          <div className="pillar-bg-pattern career-bg-pattern" />
        </div>
        <div className="container">
          <div className="pillar-b-inner">

            {/* Header — fully centred */}
            <div className="pillar-b-header">
              <div className="pillar-tag">
                <span className="pillar-num">B</span>
                Diverse Career Paths
              </div>
              <h2 className="pillar-h">
                Every path,<br />mapped out clearly.
              </h2>
              <p className="pillar-p pillar-p-center">
                From clinical practice to entrepreneurship &mdash; every option explored so you can
                make the informed choice that fits <em>your</em> life.
              </p>
            </div>

            {/* Career poster image — centred */}
            <div className="pillar-b-image">
              <img
                src="/images/career-poster.png"
                alt="Career Path Thinking"
                className="pillar-poster-portrait float-2"
              />
            </div>

            {/* Career chips grid — centred */}
            <div className="career-grid career-grid-center">
              {careers.map((c, i) => (
                <div key={c.label} className="career-item" style={{ animationDelay: `${i * 0.2}s` }}>
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
                      <ul style={{ listStyleType: 'none', paddingLeft: '4px', margin: 0 }}>
                        {c.points.map((p, idx) => (
                          <li key={idx} style={{ marginBottom: '8px', lineHeight: 1.4, position: 'relative', paddingLeft: '16px' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--emerald)' }}>•</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── C: Live Q&A ── */}
      <div className="pillar-block">
        <div className="pillar-bg">
          <div className="pillar-bg-pattern grid-pattern" />
        </div>
        <div className="pillar-content standalone right container">
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
