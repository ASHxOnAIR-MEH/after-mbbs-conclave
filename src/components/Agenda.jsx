import React, { useState } from 'react';
import './Agenda.css';
import { ChevronDown, User, Video } from 'lucide-react';

const DAYS = [
  {
    label: 'Day 1', date: 'Sept 11',
    theme: 'Foundations & Clinical Paths',
    color: '#10b981',
    sessions: [
      { time:'6:00 PM', title:'Inauguration Ceremony', type:'ceremony' },
      { time:'6:10 PM', title:'Clinical Practise : Is MBBS enough to excell?', type:'talk' },
      { time:'7:00 PM', title:'MD/MS : Exploring hidden careers', type:'talk' },
      { time:'8:00 PM', title:'DNB & 6 year M.Ch courses', type:'talk' },
    ],
  },
  {
    label: 'Day 2', date: 'Sept 12',
    theme: 'Global Opportunities',
    color: '#059669',
    sessions: [
      { time:'6:00 PM', title:'GCC Careers : Practical approach', type:'talk' },
      { time:'7:00 PM', title:'Europe : Saturation v/s opportunities', type:'talk' },
      { time:'8:00 PM', title:'USA : How to pursue USA dreams?', type:'talk' },
    ],
  },
  {
    label: 'Day 3', date: 'Sept 13',
    theme: 'Beyond Clinical Practice',
    color: '#34d399',
    sessions: [
      { time:'6:00 PM', title:'Hospital Administration: Role of a doctor?', type:'talk' },
      { time:'7:00 PM', title:'Healthcare Entrepreneurship: Beyond Money', type:'talk' },
      { time:'8:00 PM', title:'Medical Research: Creating future', type:'talk' },
      { time:'8:30 PM', title:'Finding Your Passion : Chase your unique pathway', type:'keynote' },
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
  const [expandedSessionId, setExpandedSessionId] = useState(null);
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
            const isExpanded = expandedSessionId === i;
            return (
              <div key={i} className="tl-item">
                <div className="tl-time">{s.time}</div>
                <div className="tl-track">
                  <div className="tl-dot" style={{ background: day.color }} />
                  {i < day.sessions.length - 1 && (
                    <div className="tl-line" style={{ background: day.color }} />
                  )}
                </div>
                <div className="tl-card-wrapper">
                  <button 
                    className="tl-card" 
                    onClick={() => setExpandedSessionId(isExpanded ? null : i)}
                    style={{cursor: 'pointer', textAlign: 'left', width: '100%', outline: 'none', border: 'none', background: 'transparent', padding: 0}}
                  >
                    <div className="tl-card-inner" style={{background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', padding: '16px 20px', borderRadius: 'var(--r-lg)', border: '1px solid var(--gray-light)', display: 'flex', flexDirection: 'column', width: '100%'}}>
                      <div className="tl-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%'}}>
                        <div className="tl-body">
                          <div className="tl-title" style={{fontWeight: 600, color: 'var(--black-1)', marginBottom: '8px', fontSize: '1.05rem'}}>{s.title}</div>
                          <span className="tl-type" style={{ color: ts.color, borderColor: ts.border, backgroundColor: ts.bg, padding: '4px 10px', borderRadius: '980px', fontSize: '0.8rem', fontWeight: 500, display: 'inline-block', border: '1px solid' }}>
                            {s.type}
                          </span>
                        </div>
                        <ChevronDown 
                          className={`chevron ${isExpanded ? 'rotated' : ''}`} 
                          size={18} 
                          color="var(--gray-mid)" 
                          strokeWidth={2} 
                          style={{transition: 'transform 0.3s ease'}} 
                        />
                      </div>
                      
                      <div className={`tl-drawer ${isExpanded ? 'open' : ''}`}>
                        <div className="tl-drawer-content" style={{marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--gray-light)'}}>
                          <p style={{color: 'var(--gray-dark)', fontSize: '0.9rem', fontStyle: 'italic'}}>
                            Speaker details will be updated here soon.
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ag-info-bar float-2">
          <Video size={20} strokeWidth={2} />
          All sessions held live on <strong>&nbsp;Zoom&nbsp;</strong>. Join links are sent to
          registered attendees via email and WhatsApp before each session.
        </div>
      </div>
    </section>
  );
}
