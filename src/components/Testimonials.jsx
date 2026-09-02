import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: '…IMA Parippally is doing such a great job for junior doctors and students to identify apt career pathways…',
    name: 'Dr. Gokul Kumar P',
    designation: 'RMO',
    org: '',
  },
  {
    id: 2,
    quote: '…Eagerly waiting for the programme,\n\nI\'m interested in research after microbiology PG…',
    name: 'Dr. Annie M',
    designation: 'Second year PG, Microbiology',
    org: '',
  },
  {
    id: 3,
    quote: '…Internship ending in September, confused about next step. Hope this will help me to take a decision…',
    name: 'Dr. Prince',
    designation: 'House Surgeon',
    org: '',
  },
  {
    id: 4,
    quote: '…Conducting programme in English is helping me and other students across India…',
    name: 'Jyothi',
    designation: '4th Year MBBS Student',
    org: '',
  },
  {
    id: 5,
    quote: '…I am attending the programme for knowledge to help my daughter to pursue her overseas career…',
    name: 'Asha P',
    designation: '',
    org: '',
  },
];

const SLIDE_INTERVAL = 5500;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging = useRef(false);

  // ── Navigation ──
  const goTo = useCallback((index) => {
    setActiveIndex(((index % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => ((prev - 1) + testimonials.length) % testimonials.length);
  }, []);

  // ── Auto-slide via ref (avoids stale closure) ──
  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, [startAutoSlide]);

  // ── Pause / Resume ──
  const pause = () => { isPausedRef.current = true; };

  const resume = (delay = 2500) => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, delay);
  };

  // ── Mouse / Focus handlers (desktop) ──
  const handleMouseEnter = () => pause();
  const handleMouseLeave = () => resume(500);
  const handleFocus = () => pause();
  const handleBlur = () => resume(500);

  // ── Touch swipe (mobile) ──
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
    pause();
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
      resume(2000);
      return;
    }
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    isDragging.current = false;
    resume(3000);
  };

  const handleDotClick = (i) => {
    pause();
    goTo(i);
    resume(3000);
  };

  const handlePrev = () => { pause(); goPrev(); resume(3000); };
  const handleNext = () => { pause(); goNext(); resume(3000); };

  const t = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section testimonials-section" aria-label="Testimonials">
      <div className="container">

        <div className="testi-header">
          <p className="eyebrow">What People Are Saying</p>
          <h2 className="display-xl">Testimonials</h2>
        </div>

        {/* ── Carousel ── */}
        <div
          className="testi-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
        >

          {/* Quote card — key on activeIndex triggers re-animation */}
          <div
            className="testi-card"
            key={activeIndex}
            role="region"
            aria-label={`Testimonial from ${t.name}`}
            aria-live="polite"
          >
            <div className="testi-quote-mark" aria-hidden="true">&ldquo;</div>

            <blockquote className="testi-quote">
              {t.quote.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.quote.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </blockquote>

            <div className="testi-author">
              <div className="testi-author-avatar" aria-hidden="true">
                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="testi-author-info">
                <div className="testi-name">{t.name}</div>
                {t.designation && <div className="testi-designation">{t.designation}</div>}
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="testi-dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                className={`testi-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
                aria-selected={i === activeIndex}
                role="tab"
              />
            ))}
          </div>

          {/* Prev/Next + Counter */}
          <div className="testi-nav" aria-label="Carousel navigation">
            <button className="testi-nav-btn" onClick={handlePrev} aria-label="Previous testimonial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <span className="testi-counter" aria-live="polite" aria-atomic="true">
              {activeIndex + 1} / {testimonials.length}
            </span>
            <button className="testi-nav-btn" onClick={handleNext} aria-label="Next testimonial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
