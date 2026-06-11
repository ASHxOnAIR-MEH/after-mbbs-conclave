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
  },
  {
    id: 'pg',
    name: 'Dr. [Name TBA]',
    role: 'MD / MS Specialist',
    category: 'Postgraduate Paths',
    country: 'India',
    img: '/images/speaker4.jpg',
    bio: 'An expert in navigating the PG landscape. Will cover MD, MS, and DNB routes, examination strategies, speciality selection, and life post-PG in today\'s competitive environment.',
    keynote: false,
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
  },
];

function SpeakerCard({ s }) {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div className={`spk-card ${s.keynote ? 'spk-keynote' : ''}`}>
      {s.keynote && <div className="spk-keynote-label">Keynote Speaker</div>}

      <div className="spk-photo">
        {!imgError ? (
          <img src={s.img} alt={s.name} onError={() => setImgError(true)} />
        ) : (
          <div className="spk-photo-fallback">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gray-mid)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span style={{ fontSize:'0.75rem', color:'var(--gray-mid)', marginTop: '8px' }}>Photo Coming Soon</span>
          </div>
        )}
        <div className="spk-category-pill">{s.category}</div>
      </div>

      <div className="spk-info">
        <div className="spk-name">{s.name}</div>
        <div className="spk-role">{s.role}</div>
        <div className="spk-country">{s.country}</div>
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
