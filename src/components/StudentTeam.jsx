import React, { useState, useRef, useCallback } from 'react';
import './StudentTeam.css';

/* ── 13 Unique Institutional Representatives ── */
export const representatives = [
  {
    id: 'hannah-eqbal',
    name: 'Hannah Eqbal',
    college: 'Travancore Medical College',
    year: '3rd Year MBBS',
    photo: null, // Ready for photo path e.g. '/images/students/hannah-eqbal.jpg'
  },
  {
    id: 'ananthu-sankar-k',
    name: 'Ananthu Sankar K.',
    college: 'Government Medical College, Kollam',
    year: '2nd Year MBBS',
    photo: null,
  },
  {
    id: 'sruthi-joby',
    name: 'Sruthi Joby',
    college: 'Amala Institute of Medical Sciences',
    year: 'Intern',
    photo: null,
  },
  {
    id: 'aksa-kurian',
    name: 'Aksa Kurian',
    college: 'Government Medical College, Thrissur',
    year: '3rd Year MBBS',
    photo: null,
  },
  {
    id: 'sahil-ahamed',
    name: 'Sahil Ahamed',
    college: 'Government Medical College, Thrissur',
    year: '2nd Year MBBS',
    photo: null,
  },
  {
    id: 'cinda-saji-george',
    name: 'Cinda Saji George',
    college: 'Government Medical College, Kollam',
    year: '1st Year MBBS',
    photo: null,
  },
  {
    id: 'malavika',
    name: 'Malavika',
    college: 'Sree Narayana Institute of Medical Sciences',
    year: '3rd Year MBBS',
    photo: null,
  },
  {
    id: 'adwaith-a-p',
    name: 'Adwaith A P',
    college: 'Government Medical College, Paripally, Kollam',
    year: '3rd Year MBBS',
    photo: null,
  },
  {
    id: 'mydhili-sasikumar',
    name: 'Mydhili Sasikumar',
    college: 'Thrissur Medical College',
    year: '1st Year MBBS',
    photo: null,
  },
  {
    id: 'aisha-nazer',
    name: 'Aisha Nazer',
    college: 'Government Medical College, Kottayam',
    year: '2nd Year MBBS',
    photo: null,
  },
  {
    id: 'sreelakshmi-varma',
    name: 'Sreelakshmi Varma',
    college: 'Government Medical College, Thrissur',
    year: '4th Year MBBS',
    photo: null,
  },
  {
    id: 'ron-benny',
    name: 'Ron Benny',
    college: 'Amala Institute of Medical Sciences',
    year: '4th Year MBBS',
    photo: null,
  },
  {
    id: 'chaithanya-nair',
    name: 'Chaithanya Nair',
    college: 'Government Medical College, Kottayam',
    year: '3rd Year MBBS',
    photo: null,
  },
];

/* Monogram helper for neutral portrait placeholder */
function getInitials(name) {
  const parts = name.replace(/\./g, '').trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* Individual Representative Card */
function RepresentativeCard({ rep }) {
  return (
    <article className="student-card" aria-label={`${rep.name} — Institutional Representative`}>
      {/* Top micro-tag with subtle gold accent */}
      <div className="student-card-tag-row">
        <span className="student-team-tag">
          <span className="student-gold-star" aria-hidden="true">✦</span>
          IMA PARIPPALLY STUDENT TEAM
        </span>
      </div>

      {/* Portrait area: Photo or neutral placeholder */}
      <div className="student-photo-wrapper">
        {rep.photo ? (
          <img
            src={rep.photo}
            alt={`${rep.name} — Institutional Representative`}
            className="student-photo-img"
            loading="lazy"
          />
        ) : (
          <div className="student-placeholder" aria-label={`${rep.name} — Photo coming soon`}>
            <div className="student-placeholder-bg" aria-hidden="true">
              {/* Subtle medical cross watermark */}
              <svg className="student-placeholder-watermark" viewBox="0 0 80 80" fill="none">
                <rect x="34" y="12" width="12" height="56" rx="6" fill="currentColor" />
                <rect x="12" y="34" width="56" height="12" rx="6" fill="currentColor" />
              </svg>
            </div>

            {/* Monogram emblem with subtle gold & deep emerald ring */}
            <div className="student-avatar-ring">
              <span className="student-initials">{getInitials(rep.name)}</span>
            </div>

            {/* Clear [PHOTO COMING SOON] indicator */}
            <div className="student-coming-soon-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>[PHOTO COMING SOON]</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="student-card-body">
        <h3 className="student-name">{rep.name}</h3>

        <div className="student-college">
          <svg className="student-college-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <span className="student-college-text">{rep.college}</span>
        </div>

        <div className="student-year-badge">
          <span className="student-year-dot" aria-hidden="true" />
          <span>{rep.year}</span>
        </div>
      </div>
    </article>
  );
}

export default function StudentTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Touch tracking for mobile swipe
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging = useRef(false);

  const totalCards = representatives.length;

  const goTo = useCallback((idx) => {
    const wrapped = ((idx % totalCards) + totalCards) % totalCards;
    setActiveIndex(wrapped);
  }, [totalCards]);

  const handleNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const handlePrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 10) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (isDragging.current && touchStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) handleNext();
        else handlePrev();
      }
    }
    touchStartX.current = null;
    isDragging.current = false;
  };

  return (
    <section id="student-team" className="section student-team-section" aria-label="IMA Parippally Student Team">
      {/* Background ambient accents */}
      <div className="student-team-bg-deco" aria-hidden="true">
        <div className="student-glow-blob student-glow-1" />
        <div className="student-glow-blob student-glow-2" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="student-team-header">
          <p className="eyebrow">IMA PARIPPALLY</p>
          <h2 className="display-xl student-team-title">
            IMA PARIPPALLY <span className="text-emerald">STUDENT TEAM</span>
          </h2>
          <p className="student-team-subtitle">
            Institutional Representatives
          </p>
          <p className="sub student-team-lead">
            Meet the student representatives connecting medical students with IMA Parippally and the Career After MBBS community.
          </p>
        </div>

        {/* ── Desktop Grid (Displays all 13 cards) ── */}
        <div className="student-desktop-grid-wrap">
          <div className="student-team-grid" role="list">
            {representatives.map((rep) => (
              <div key={rep.id} className="student-grid-item" role="listitem">
                <RepresentativeCard rep={rep} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile / Tablet Carousel Slider ── */}
        <div
          className="student-mobile-carousel"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label="Student representatives carousel"
          role="region"
        >
          <div
            className="student-carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {representatives.map((rep, idx) => (
              <div
                key={rep.id}
                className={`student-carousel-slide ${idx === activeIndex ? 'active' : ''}`}
                aria-hidden={idx !== activeIndex}
              >
                <RepresentativeCard rep={rep} />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="student-carousel-controls">
            <button
              type="button"
              className="student-nav-btn student-prev"
              onClick={handlePrev}
              aria-label="Previous representative"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="student-carousel-counter" aria-live="polite">
              <span className="student-counter-current">{activeIndex + 1}</span>
              <span className="student-counter-sep">/</span>
              <span className="student-counter-total">{totalCards}</span>
            </div>

            <button
              type="button"
              className="student-nav-btn student-next"
              onClick={handleNext}
              aria-label="Next representative"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="student-cta-box" role="region" aria-label="Join the IMA Parippally Student Community">
          <div className="student-cta-glow" aria-hidden="true" />
          <div className="student-cta-content">
            <div className="student-cta-badge">
              <span className="student-gold-star" aria-hidden="true">✦</span>
              Student Leadership Network
            </div>
            <h3 className="student-cta-title">
              JOIN THE IMA PARIPPALLY STUDENT COMMUNITY
            </h3>
            <p className="student-cta-text">
              Connect with student representatives from medical colleges across Kerala, stay updated on leadership opportunities, and be part of the Career After MBBS network.
            </p>
            <div className="student-cta-btn-wrap">
              <a
                href="https://chat.whatsapp.com/LvEzYG0AgcYLgNh9obIw8B"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary student-cta-btn"
                aria-label="Join our community on WhatsApp (opens in new tab)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.526-1.782-.738-2.91-2.548-3.003-2.67-.09-.12-1.25-1.664-1.25-3.174 0-1.511.79-2.257 1.072-2.549.282-.292.613-.365.818-.365.205 0 .41.002.588.01.19.009.444-.072.695.53.257.618.875 2.138.951 2.293.076.155.127.337.025.541-.102.204-.153.33-.304.507-.152.177-.32.395-.457.53-.153.15-.312.313-.134.618.178.305.792 1.306 1.7 2.114 1.168 1.04 2.152 1.362 2.457 1.514.305.152.483.127.661-.077.178-.204.763-.889.966-1.194.203-.305.407-.254.686-.152.28.102 1.776.837 2.081.99.305.153.508.229.584.356.076.127.076.737-.068 1.142z"/>
                </svg>
                <span>JOIN OUR COMMUNITY</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="student-cta-note">
                Institutional Representative / Student Team WhatsApp Community
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
