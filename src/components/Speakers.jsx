import React from 'react';
import './Speakers.css';

const speakers = [
  {
    id: 'menon',
    name: 'Dr. M.N. Menon',
    role: 'President, IMA Kerala State Branch',
    category: 'Keynote & Inauguration',
    country: 'Kerala, India',
    img: '/images/speaker-menon.jpg',
    bio: 'An eminent leader in the medical fraternity. Dr. Menon brings decades of experience and visionary leadership. He will inaugurate this landmark event and share his vision for the next generation of doctors.',
    keynote: true,
    tba: false,
  },
  {
    id: 'gcc',
    name: 'Dr. [Name TBA]',
    role: 'Experienced Physician, GCC Region',
    category: 'GCC Careers',
    country: 'Gulf Region',
    img: '/images/speaker-gcc.jpg',
    bio: 'A seasoned clinician with extensive GCC experience. Will share practical insights on licensing, lifestyle, compensation, and career growth in the Gulf Cooperation Council countries.',
    keynote: false,
    tba: true,
  },
  {
    id: 'startup',
    name: 'Dr. [Name TBA]',
    role: 'Physician & Healthcare Entrepreneur',
    category: 'Entrepreneurship',
    country: 'Kerala, India',
    img: '/images/speaker-startup.jpg',
    bio: 'A Kerala-based doctor turned successful startup founder. Will walk through the journey from clinician to entrepreneur — the highs, challenges, and immense opportunities in healthcare innovation.',
    keynote: false,
    tba: true,
  },
  {
    id: 'pg',
    name: 'Dr. [Name TBA]',
    role: 'MD / MS Specialist',
    category: 'Postgraduate Paths',
    country: 'India',
    img: '/images/speaker4.jpg',
    bio: "An expert in navigating the PG landscape. Will cover MD, MS, and DNB routes, examination strategies, speciality selection, and life post-PG in today's competitive environment.",
    keynote: false,
    tba: true,
  },
  {
    id: 'ai',
    name: 'Dr. [Name TBA]',
    role: 'AI in Healthcare Expert',
    category: 'Technology',
    country: 'International',
    img: '/images/speaker5.jpg',
    bio: 'A pioneer at the intersection of artificial intelligence and clinical medicine. Will explore how AI is reshaping diagnostics, treatment, and — most importantly — the evolving role of doctors.',
    keynote: false,
    tba: true,
  },
  {
    id: 'europe',
    name: 'Dr. [Name TBA]',
    role: 'European Medicine Specialist',
    category: 'Europe',
    country: 'Europe',
    img: '/images/speaker6.jpg',
    bio: 'Has successfully navigated the European medical pathway. Will cover language requirements, degree recognition, quality of life, and concrete opportunities for Indian doctors in the EU.',
    keynote: false,
    tba: true,
  },
];

/* Inline SVG icons (no external lib) */
const IconUser = ({ size = 28, color = '#10b981' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconStethoscope = ({ size = 28, color = '#9bbfac' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
);
const IconMapPin = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

function SpeakerCard({ s }) {
  const [imgError, setImgError] = React.useState(false);
  const showAvatar = imgError;

  return (
    <div className={`spk-card ${s.keynote ? 'spk-keynote' : ''} ${s.tba ? 'spk-tba' : ''}`}>
      {s.keynote && (
        <div className="spk-keynote-label">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Keynote Speaker
        </div>
      )}

      <div className="spk-photo">
        {!showAvatar ? (
          <img src={s.img} alt={s.name} onError={() => setImgError(true)} />
        ) : (
          <div className={`spk-avatar ${s.tba ? 'spk-avatar-tba' : 'spk-avatar-confirmed'}`}>
            {s.tba
              ? <IconStethoscope size={32} color="#9bbfac" />
              : <IconUser size={32} color="#10b981" />
            }
          </div>
        )}
        <div className="spk-category-pill">{s.category}</div>
      </div>

      <div className="spk-info">
        <div className={`spk-name ${s.tba ? 'spk-name-tba' : ''}`}>
          {s.tba ? (
            <>Dr. <span style={{ color: '#9ca3af', fontWeight: 400 }}>[Name TBA]</span></>
          ) : s.name}
        </div>
        <div className="spk-role">{s.role}</div>
        <div className={`spk-country ${s.tba ? 'spk-country-tba' : ''}`}>
          <IconMapPin size={12} />
          {s.country}
        </div>
        <div className="spk-bio">{s.bio}</div>
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="section speakers-section">
      <div className="container">
        <div className="speakers-intro">
          <p className="eyebrow">Expert Faculty</p>
          <h2 className="display-xl">Meet The <span className="text-emerald">Experts</span></h2>
          <p className="sub">
            World-class doctors sharing real-world expertise. Hover a card to reveal their story.
          </p>
        </div>
        <div className="speakers-grid">
          {speakers.map(s => <SpeakerCard key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}
