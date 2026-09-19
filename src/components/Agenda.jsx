import React, { useState } from 'react';
import './Agenda.css';
import { ChevronDown, User, Video, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';

const DAYS = [
  {
    id: 'day-1',
    label: 'Day 1',
    date: 'Sept 24',
    fullDate: 'Thursday, 24 September 2026',
    time: '06:00 PM – 08:00 PM IST',
    mode: 'Live Online via Zoom',
    venue: 'Online via Zoom',
    theme: 'Post Graduation & Clinical Career Pathways',
    badge: 'ONLINE ON ZOOM',
    badgeType: 'online',
    color: '#10b981',
    sessions: [
      {
        id: '1.1',
        time: '06:00 PM',
        title: 'Inauguration Ceremony',
        subtitle: 'Official Inauguration of After MBBS Conclave 2026',
        type: 'ceremony',
        speaker: 'Dr. M N Menon',
        role: 'President, IMA Kerala State Branch',
        desc: 'Official presidential address and inaugural ceremony by Dr. M N Menon, President, IMA Kerala State Branch, inaugurating Kerala’s landmark medical career conclave for students, interns, and young doctors across India.',
      },
      {
        id: '1.2',
        time: '06:15 PM',
        title: 'Post Graduation: Medical and Surgical Careers',
        subtitle: 'Exploring the Unexplored & High Rewarding Opportunities',
        type: 'talk',
        desc: 'A comprehensive session delving into emerging medical and surgical disciplines, superspecialty choices, competitive landscapes, branch selection matrices, and hidden high-growth clinical avenues.',
      },
      {
        id: '1.3',
        time: '07:00 PM',
        title: 'Post Graduation: DNB, 6 Year MCh Courses, Diplomas',
        subtitle: 'Learn How to Choose a Course',
        type: 'talk',
        desc: 'Strategic blueprint for choosing between MD/MS, DNB accredited hospitals, 6-year direct M.Ch courses, and NBEMS diplomas — evaluating pass rates, clinical exposure, recognition, and career longevity.',
      },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    date: 'Sept 25',
    fullDate: 'Friday, 25 September 2026',
    time: '06:00 PM – 09:30 PM IST',
    mode: 'Live Online via Zoom',
    venue: 'Online via Zoom',
    theme: 'Research, Innovation, Non-Clinical Careers & Leadership',
    badge: 'ONLINE ON ZOOM',
    badgeType: 'online',
    color: '#059669',
    sessions: [
      {
        id: '2.1',
        time: '06:00 PM',
        title: 'Research as Career — Opportunities',
        subtitle: 'Biomedical Research, Global Fellowships & Clinical Science',
        type: 'talk',
        desc: 'Navigating biomedical research pathways, national and global research fellowships (ICMR, NIH, Wellcome Trust), funded PhD programs, clinical trials, and making a high-impact career in medical science.',
      },
      {
        id: '2.2',
        time: '07:00 PM',
        title: 'Innovation and Entrepreneurship — Real Pathways',
        subtitle: 'From Clinical Insights to Scalable Healthcare Ventures',
        type: 'talk',
        desc: 'The doctor-entrepreneur roadmap: MedTech startup ecosystems, patenting medical devices, building healthcare solutions, securing incubation, and scaling ventures from bedside observations.',
      },
      {
        id: '2.3',
        time: '08:00 PM',
        title: 'MBA after MBBS — Conventional & Unconventional Career',
        subtitle: 'Healthcare Management, Hospital Leadership & Consulting',
        type: 'talk',
        desc: 'Why medical doctors pursue management degrees (IIMs, ISB, global B-schools), pharmaceutical strategy, healthcare consulting, hospital administration, and C-suite healthcare leadership.',
      },
      {
        id: '2.4',
        time: '08:30 PM',
        title: 'Civil Services after MBBS — Do We Have an Upper Hand?',
        subtitle: 'UPSC CSE Strategy & Public Administration for Doctors',
        type: 'talk',
        desc: 'The competitive edge of medical graduates in the UPSC Civil Services Examination (IAS, IPS, IFS), optional subject selection (Medical Science), preparation timeline, and public health policy leadership.',
      },
      {
        id: '2.5',
        time: '09:00 PM',
        title: 'How to Choose Your Passion in Medical Career',
        subtitle: 'Discovering Personal Alignment & Sustainable Fulfillment',
        type: 'keynote',
        desc: 'A reflective masterclass on avoiding early clinical burnout, aligning career choices with personal core values, lifestyle balance, and forging a purpose-driven journey in medicine.',
      },
    ],
  },
  {
    id: 'day-3',
    label: 'Day 3',
    date: 'Sept 26',
    fullDate: 'Saturday, 26 September 2026',
    time: '10:00 AM – 05:00 PM IST',
    mode: 'Offline at Chakolas Pavilion, Kalamassery, Kochi (Live Stream via Zoom)',
    venue: 'Chakolas Pavilion Events Center, Kalamassery, Kochi',
    theme: 'Clinic Setup Workshop & Global Medical Careers',
    badge: 'OFFLINE AT CHAKOLAS PAVILION',
    badgeType: 'offline',
    color: '#d97706',
    sessions: [
      {
        id: '3.1',
        time: '10:00 AM',
        title: 'How to Set Up a Clinic — Workshop',
        subtitle: 'Practical Hands-on Masterclass on Private Practice Setup',
        type: 'workshop',
        desc: 'Comprehensive step-by-step masterclass: Clinic infrastructure planning, regulatory licenses, Kerala Clinical Establishments Act compliance, equipment financing, practice management software, staffing, and patient acquisition.',
      },
      {
        id: '3.2',
        time: '02:00 PM',
        title: 'Migrate to GCC Countries',
        subtitle: 'DHA, MOH, HAAD, OMSB & Saudi Prometric Blueprint',
        type: 'talk',
        desc: 'Practical step-by-step roadmap to practice in UAE, Oman, Qatar, Saudi Arabia, and Kuwait: Examination blueprints, DataFlow primary source verification, hospital recruitment criteria, remuneration packages, and family residency.',
      },
      {
        id: '3.3',
        time: '03:00 PM',
        title: 'Practise & Settle in Australia',
        subtitle: 'AMC Exams, Clinical Verification & Australian PR Pathways',
        type: 'talk',
        desc: 'Everything you need to know about the Australian Medical Council (AMC) Part 1 & Clinical exams, securing supervised practice positions, working in Australian public health systems, and permanent residency (PR) roadmaps.',
      },
      {
        id: '3.4',
        time: '03:30 PM',
        title: 'UK - PLAB: Really Saturated?',
        subtitle: 'Ground Realities of NHS Jobs, GMC Registration & Training Posts',
        type: 'talk',
        desc: 'A transparent, realistic assessment of current UK opportunities: PLAB/UKMLA updates, trust grade posts, specialty training (ST/CT), alternative routes like MRCP/MRCS, and survival strategies in the NHS.',
      },
      {
        id: '3.5',
        time: '04:00 PM',
        title: 'USA Dreams — A Working Manual',
        subtitle: 'USMLE Steps 1 & 2 CK, USCE & Residency Match Roadmap',
        type: 'talk',
        desc: 'A realistic, actionable manual for matching into US residency: USMLE preparation timelines, securing hands-on clinical electives and observerships (USCE), research publications, and ERAS application tactics.',
      },
      {
        id: '3.6',
        time: '04:30 PM',
        title: 'Global Opportunities for Junior Doctors',
        subtitle: 'International Fellowships, Global Health & Multilateral Careers',
        type: 'keynote',
        desc: 'Broadening career horizons across Canada, Germany, New Zealand, UN/WHO medical officer positions, humanitarian medicine (MSF), and multinational healthcare careers.',
      },
    ],
  },
];

const typeStyle = {
  ceremony: { label: 'Inauguration', color: '#d97706', border: 'rgba(217,119,6,0.25)', bg: 'rgba(217,119,6,0.06)' },
  talk:     { label: 'Keynote Session', color: '#2563eb', border: 'rgba(37,99,235,0.25)', bg: 'rgba(37,99,235,0.06)' },
  workshop: { label: 'Hands-on Workshop', color: '#059669', border: 'rgba(5,150,105,0.25)', bg: 'rgba(5,150,105,0.06)' },
  panel:    { label: 'Panel Discussion', color: '#7c3aed', border: 'rgba(124,58,237,0.25)', bg: 'rgba(124,58,237,0.06)' },
  keynote:  { label: 'Special Keynote', color: '#e11d48', border: 'rgba(225,29,72,0.25)', bg: 'rgba(225,29,72,0.06)' },
};

export default function Agenda() {
  const [active, setActive] = useState(0);
  const [expandedSessionId, setExpandedSessionId] = useState(null);
  const day = DAYS[active];

  return (
    <section id="agenda" className="section agenda-section">
      <div className="container">
        <div className="agenda-intro">
          <p className="eyebrow">Comprehensive 3-Day Schedule</p>
          <h2 className="display-xl">Event <span className="text-emerald">Agenda</span></h2>
          <p className="sub">
            Three days of transformative sessions, career blueprints, interactive workshops, and high-value networking.
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="agenda-tabs">
          {DAYS.map((d, i) => (
            <button
              key={d.id}
              className={`ag-tab ${active === i ? 'active' : ''}`}
              onClick={() => {
                setActive(i);
                setExpandedSessionId(null);
              }}
            >
              <span className="ag-tab-day">{d.label}</span>
              <span className="ag-tab-date">{d.date}</span>
              <span className={`ag-tab-pill ag-tab-pill-${d.badgeType}`}>
                {d.badgeType === 'offline' ? 'Offline' : 'Online'}
              </span>
            </button>
          ))}
        </div>

        {/* Active Day Header */}
        <div className="ag-day-header">
          <div className="ag-accent-bar" style={{ background: day.color }} />
          <div className="ag-day-content">
            <div className="ag-day-title-row">
              <h3 className="ag-day-title">{day.label}: {day.theme}</h3>
              <span className={`ag-mode-badge ag-mode-${day.badgeType}`}>
                {day.badge}
              </span>
            </div>
            <div className="ag-day-meta">
              <span className="ag-meta-item">
                <Calendar size={14} strokeWidth={2} />
                {day.fullDate}
              </span>
              <span className="ag-meta-sep">•</span>
              <span className="ag-meta-item">
                <Clock size={14} strokeWidth={2} />
                {day.time}
              </span>
              <span className="ag-meta-sep">•</span>
              <span className="ag-meta-item ag-meta-venue">
                {day.badgeType === 'offline' ? (
                  <MapPin size={14} strokeWidth={2} />
                ) : (
                  <Video size={14} strokeWidth={2} />
                )}
                {day.venue}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {day.sessions.map((s, i) => {
            const ts = typeStyle[s.type] || typeStyle.talk;
            const isExpanded = expandedSessionId === i;
            return (
              <div key={s.id || i} className="tl-item">
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
                    aria-expanded={isExpanded}
                  >
                    <div className="tl-card-inner">
                      <div className="tl-header">
                        <div className="tl-body">
                          <div className="tl-top-meta">
                            <span 
                              className="tl-type" 
                              style={{ 
                                color: ts.color, 
                                borderColor: ts.border, 
                                backgroundColor: ts.bg 
                              }}
                            >
                              {ts.label}
                            </span>
                            <span className="tl-session-id">Session {s.id}</span>
                          </div>

                          <h4 className="tl-title">{s.title}</h4>
                          
                          {s.subtitle && (
                            <p className="tl-subtitle">{s.subtitle}</p>
                          )}

                          {s.speaker && (
                            <div className="tl-speaker-chip">
                              <User size={13} strokeWidth={2.2} />
                              <span className="tl-speaker-name">{s.speaker}</span>
                              {s.role && <span className="tl-speaker-role">· {s.role}</span>}
                            </div>
                          )}
                        </div>

                        <div className="tl-expand-indicator">
                          <span className="tl-expand-label">{isExpanded ? 'Hide info' : 'Details'}</span>
                          <ChevronDown 
                            className={`chevron ${isExpanded ? 'rotated' : ''}`} 
                            size={18} 
                            strokeWidth={2} 
                          />
                        </div>
                      </div>
                      
                      <div className={`tl-drawer ${isExpanded ? 'open' : ''}`}>
                        <div className="tl-drawer-content">
                          {s.speaker && (
                            <div className="tl-drawer-speaker-card">
                              <div className="tl-drawer-spk-icon">
                                <User size={16} strokeWidth={2} />
                              </div>
                              <div>
                                <span className="tl-drawer-spk-label">Speaker / Dignitary</span>
                                <div className="tl-drawer-spk-name">{s.speaker}</div>
                                {s.role && <div className="tl-drawer-spk-role">{s.role}</div>}
                              </div>
                            </div>
                          )}
                          <p className="tl-drawer-desc">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Hybrid Info Banner */}
        <div className="ag-info-bar float-2">
          <div className="ag-info-icon-group">
            <Video size={22} strokeWidth={2} className="ag-info-icon-zoom" />
            <MapPin size={22} strokeWidth={2} className="ag-info-icon-pin" />
          </div>
          <div className="ag-info-text">
            <strong>Hybrid Conclave Schedule:</strong>
            <span>
              {' '}<strong>Days 1 & 2 (Sept 24–25)</strong> are conducted live online via <strong>Zoom</strong> (evenings from 06:00 PM onwards).{' '}
              <strong>Day 3 (Sept 26)</strong> is hosted in-person at <strong>Chakolas Pavilion Events Center, Kalamassery, Kochi</strong> (starting 10:00 AM) with live online Zoom streaming for registered delegates across India.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
