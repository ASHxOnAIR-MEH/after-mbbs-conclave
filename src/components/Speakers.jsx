import React from 'react';
import './Speakers.css';

const IconUser = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const speakers = [
  {
    id: 'gcc',
    name: 'Speaker 1',
    role: 'GCC Medical Career Expert',
    category: 'GCC Careers',
    bio: 'A seasoned clinician with extensive experience in the Gulf region. Will share practical insights on licensing, lifestyle, compensation, and career growth in GCC countries.',
    experience: '15+ Years Experience',
  },
  {
    id: 'entrepreneur',
    name: 'Speaker 2',
    role: 'Healthcare Entrepreneur & Innovator',
    category: 'Entrepreneurship',
    bio: 'A doctor turned successful healthcare entrepreneur. Will walk through the journey from clinician to founder — the highs, challenges, and immense opportunities.',
    experience: '12+ Years Experience',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="section speakers-section">
      <div className="container">
        <p className="eyebrow">Expert Faculty</p>
        <h2 className="display-xl">Learn From Doctors Who Built<br /><span className="text-emerald">Extraordinary Careers</span></h2>
        <p className="sub">Two experienced doctors share their real journeys — no theory, just actionable insights.</p>

        <div className="speakers-featured-grid">
          {speakers.map(s => (
            <div key={s.id} className="spk-featured-card">
              <div className="spk-featured-photo">
                <div className="spk-featured-avatar">
                  <IconUser size={56} />
                </div>
                <div className="spk-featured-badge">{s.experience}</div>
              </div>
              <div className="spk-featured-info">
                <div className="spk-featured-category">{s.category}</div>
                <h3 className="spk-featured-name">{s.name}</h3>
                <p className="spk-featured-role">{s.role}</p>
                <p className="spk-featured-bio">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="speakers-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Speaker names and photos will be announced soon. Stay tuned!
        </p>
      </div>
    </section>
  );
}
