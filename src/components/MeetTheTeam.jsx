import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MeetTheTeam.css';

const team = [
  {
    id: 'rcsr',
    role: 'Chief Advisor',
    name: 'Dr. RC Sreekumar',
    designation: 'Vice President',
    org: 'IMA Kerala State',
    photo: '/images/team-rcsr.jpg',
    roleColor: 'emerald',
  },
  {
    id: 'ragesh',
    role: 'Chairman',
    name: 'Dr. Ragesh S',
    designation: 'President',
    org: 'IMA Parippally',
    photo: '/images/team-ragesh.jpg',
    roleColor: 'gold',
  },
  {
    id: 'arjun',
    role: 'Convenor',
    name: 'Dr. Arjun S',
    designation: 'Secretary',
    org: 'IMA Parippally',
    photo: '/images/team-arjun.jpg',
    roleColor: 'emerald',
  },
  {
    id: 'ashik',
    role: 'Technical',
    name: 'Ashik S',
    designation: 'Academic Intern',
    org: 'Kerala Startup Mission',
    photo: '/images/team-ashik.jpg',
    roleColor: 'slate',
  },
  {
    id: 'hemanth',
    role: 'Social Media Convenor',
    name: 'Hemanth',
    designation: 'Medical Student',
    org: '',
    photo: '/images/team-hemanth.jpg',
    roleColor: 'slate',
  },
  {
    id: 'abhay',
    role: 'Promotion Convenor',
    name: 'Abhay',
    designation: 'Medical Student',
    org: '',
    photo: '/images/team-abhay.jpg',
    roleColor: 'slate',
  },
];

const AUTO_SLIDE_MS = 4500; // 4.5 seconds

function TeamCard({ member }) {
  return (
    <div className="team-card" role="article" aria-label={`${member.role}: ${member.name}`}>
      <div className="team-photo-wrap">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name} — ${member.role}`}
            className="team-photo"
            loading="lazy"
          />
        ) : (
          <div className="team-photo-placeholder" aria-label={`${member.name} — photo coming soon`}>
            <span className="team-initials">
              {member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </span>
          </div>
        )}
        <div className={`team-role-pill team-role-${member.roleColor}`}>
          {member.role}
        </div>
      </div>
      <div className="team-info">
        <h3 className="team-name">{member.name}</h3>
        <div className="team-designation">{member.designation}</div>
        {member.org && <div className="team-org">{member.org}</div>}
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const autoTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);

  // Touch state
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging = useRef(false);

  // ── Carousel measurements ──
  // slide width = 82% of container; gap = 16px; offset = 9% to show peek
  const SLIDE_RATIO = 0.82;
  const SLIDE_GAP = 16;
  const PEEK_OFFSET = 0.09; // 9% from left

  const getTransformX = useCallback((index) => {
    if (!containerRef.current) return 0;
    const cw = containerRef.current.offsetWidth;
    const slideW = cw * SLIDE_RATIO;
    const offset = cw * PEEK_OFFSET;
    return offset - index * (slideW + SLIDE_GAP);
  }, []);

  const [transformX, setTransformX] = useState(0);

  // Recalculate transform whenever index or container size changes
  const updateTransform = useCallback(() => {
    setTransformX(getTransformX(activeIndex));
  }, [activeIndex, getTransformX]);

  useEffect(() => {
    updateTransform();
  }, [updateTransform]);

  useEffect(() => {
    const onResize = () => updateTransform();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [updateTransform]);

  // ── Navigation ──
  const goTo = useCallback((index) => {
    // Loop wrap
    const wrapped = ((index % team.length) + team.length) % team.length;
    setActiveIndex(wrapped);
  }, []);

  // ── Auto-slide ──
  const startAutoSlide = useCallback(() => {
    clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % team.length);
    }, AUTO_SLIDE_MS);
  }, []);

  const pauseAutoSlide = () => {
    clearInterval(autoTimerRef.current);
    setIsUserInteracting(true);
  };

  const resumeAutoSlide = useCallback((delay = 3000) => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
      startAutoSlide();
    }, delay);
  }, [startAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(autoTimerRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, [startAutoSlide]);

  // ── Touch swipe ──
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
    pauseAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 8) {
      isDragging.current = true;
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current || touchStartX.current === null) {
      touchStartX.current = null;
      isDragging.current = false;
      resumeAutoSlide(2000);
      return;
    }
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      goTo(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
    }
    touchStartX.current = null;
    isDragging.current = false;
    resumeAutoSlide(2500);
  };

  const handleDotClick = (i) => {
    pauseAutoSlide();
    goTo(i);
    resumeAutoSlide(3000);
  };

  const handlePrev = () => {
    pauseAutoSlide();
    goTo(activeIndex - 1);
    resumeAutoSlide(3000);
  };

  const handleNext = () => {
    pauseAutoSlide();
    goTo(activeIndex + 1);
    resumeAutoSlide(3000);
  };

  return (
    <section id="team" className="section team-section" aria-label="Meet the Team">
      <div className="container">
        <div className="team-header">
          <p className="eyebrow">The People Behind It</p>
          <h2 className="display-xl">Meet the <span className="text-emerald">Team</span></h2>
          <p className="sub">Organising Committee</p>
        </div>
      </div>

      {/* ── Desktop / Tablet grid ── */}
      <div className="container team-grid-wrap">
        <div className="team-grid" role="list">
          {team.map(member => (
            <div key={member.id} role="listitem">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile carousel ── */}
      <div
        className="team-carousel-outer"
        ref={containerRef}
        aria-label="Team members carousel"
        aria-roledescription="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Track — translateX is set via inline style from JS measurement */}
        <div
          className="team-carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(${transformX}px)` }}
          aria-live="polite"
        >
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`team-carousel-slide ${i === activeIndex ? 'active-slide' : ''}`}
              aria-hidden={i !== activeIndex}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="team-dots" role="tablist" aria-label="Team member navigation">
          {team.map((m, i) => (
            <button
              key={m.id}
              className={`team-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to ${m.name}`}
              aria-selected={i === activeIndex}
              role="tab"
            />
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          className="team-nav-btn team-prev"
          onClick={handlePrev}
          aria-label="Previous team member"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          className="team-nav-btn team-next"
          onClick={handleNext}
          aria-label="Next team member"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
