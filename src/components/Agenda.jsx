import React, { useState } from 'react';
import './Agenda.css';

const DAYS = [
  {
    label: 'Day 1', date: 'Sept 11',
    theme: 'Foundations & New Horizons',
    color: '#10b981',
    sessions: [
      { time:'6:00 PM', title:'Grand Inauguration',
        speaker:'Dr. M.N. Menon, President IMA Kerala', type:'ceremony' },
      { time:'6:30 PM', title:'Hospital Administration: A Doctor\'s Role in Management',
        speaker:'Hospital Admin Expert', type:'talk' },
      { time:'7:30 PM', title:'Life After PG: What\'s Next?',
        speaker:'MD / MS Specialist', type:'talk' },
      { time:'8:15 PM', title:'Pharma & Medical Affairs: The Unseen Career',
        speaker:'Pharma Industry Expert', type:'talk' },
      { time:'8:50 PM', title:'Live Q&A — Day 1',
        speaker:'All Day 1 Panellists', type:'qa' },
    ],
  },
  {
    label: 'Day 2', date: 'Sept 12',
    theme: 'Technology & Global Visions',
    color: '#059669',
    sessions: [
      { time:'6:00 PM', title:'AI in Healthcare: Is Your Job Safe?',
        speaker:'AI & Healthcare Expert', type:'talk' },
      { time:'6:50 PM', title:'MBBS Enough to Excel: Debunking the PG Myth',
        speaker:'MBBS Success Panel', type:'panel' },
      { time:'7:45 PM', title:'Sun Sets in Europe? Opportunities Across the EU',
        speaker:'European Medicine Expert', type:'talk' },
      { time:'8:40 PM', title:'Live Q&A — Day 2',
        speaker:'All Day 2 Panellists', type:'qa' },
    ],
  },
  {
    label: 'Day 3', date: 'Sept 13',
    theme: 'Innovation, Passion & Purpose',
    color: '#34d399',
    sessions: [
      { time:'6:00 PM', title:'Doctors for Innovation & Entrepreneurship',
        speaker:'Startup Physician Expert', type:'talk' },
      { time:'6:55 PM', title:'Practice in Arab Countries: The GCC Deep-Dive',
        speaker:'GCC Experienced Doctor', type:'talk' },
      { time:'7:55 PM', title:'Finding Your Love: Discovering Your True Career',
        speaker:'Career Guidance Expert', type:'keynote' },
      { time:'8:50 PM', title:'Grand Closing Q&A & Networking',
        speaker:'All Experts', type:'qa' },
    ],
  },
];

const typeStyle = {
  ceremony:{ color:'#d97706', border:'rgba(217,119,6,0.2)', bg: 'rgba(217,119,6,0.05)' },
  talk:    { color:'#2563eb', border:'rgba(37,99,235,0.2)', bg: 'rgba(37,99,235,0.05)' },
  panel:   { color:'#7c3aed', border:'rgba(124,58,237,0.2)', bg: 'rgba(124,58,237,0.05)' },
  keynote: { color:'#e11d48', border:'rgba(225,29,72,0.2)', bg: 'rgba(225,29,72,0.05)' },
  qa:      { color:'#059669', border:'rgba(5,150,105,0.2)', bg: 'rgba(5,150,105,0.05)' },
};

export default function Agenda() {
  const [active, setActive] = useState(0);
  const day = DAYS[active];

  return (
    <section id="agenda" className="section agenda-section">
      <div className="container">
        <div className="agenda-intro">
          <p className="eyebrow">3-Day Programme</p>
          <h2 className="display-xl">Event <span className="text-emerald">Agenda</span></h2>
          <p className="sub">
            Three power-packed evenings of learning, inspiration, and real connection.
          </p>
        </div>

        <div className="agenda-tabs">
          {DAYS.map((d, i) => (
            <button key={d.label}
              className={`ag-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}>
              <span className="ag-tab-day">{d.label}</span>
              <span className="ag-tab-date">{d.date}</span>
            </button>
          ))}
        </div>

        <div className="ag-day-header">
          <div className="ag-accent-bar" style={{ background: day.color }} />
          <div>
            <div className="ag-day-title">{day.label}: {day.theme}</div>
            <div className="ag-day-meta">
              {day.date}, 2026 &bull; 6:00 PM – 9:00 PM IST &bull; Zoom
            </div>
          </div>
        </div>

        <div className="timeline">
          {day.sessions.map((s, i) => {
            const ts = typeStyle[s.type];
            return (
              <div key={i} className="tl-item">
                <div className="tl-time">{s.time}</div>
                <div className="tl-track">
                  <div className="tl-dot" style={{ background: day.color }} />
                  {i < day.sessions.length - 1 && (
                    <div className="tl-line" style={{ background: day.color }} />
                  )}
                </div>
                <div className="tl-card">
                  <div className="tl-body">
                    <div className="tl-title">{s.title}</div>
                    <div className="tl-speaker">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {s.speaker}
                    </div>
                  </div>
                  <span className="tl-type" style={{ color: ts.color, borderColor: ts.border, backgroundColor: ts.bg }}>
                    {s.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ag-info-bar float-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="23 7 16 12 23 17 23 7"/>
            <rect x="1" y="5" width="15" height="14" rx="2"/>
          </svg>
          All sessions held live on <strong>&nbsp;Zoom&nbsp;</strong>. Join links are sent to
          registered attendees via email and WhatsApp before each session.
        </div>
      </div>
    </section>
  );
}
