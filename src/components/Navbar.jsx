import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from './Button';

const navLinks = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Pillars',  href: '#pillars'  },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda',   href: '#agenda'   },
  { label: 'Passes',   href: '#pricing'  },
];

export default function Navbar({ setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => {
    if (setCurrentPage) setCurrentPage('home');
    setOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">

          {/* IMA Brand */}
          <a href="#hero" className="nav-logo" onClick={close} aria-label="IMA Parippally Home">
            <img
              src="/images/ima-logo.jpg"
              alt="IMA Logo"
              className="nav-logo-img"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div className="nav-logo-text">
              <div className="nav-logo-name">IMA PARIPPALLY</div>
            </div>
          </a>

          {/* HOSPEX Partnership — desktop center */}
          <div className="nav-partnership desktop-partnership" aria-label="In partnership with HOSPEX Healthcare Expo">
            <span className="nav-partner-label">IN PARTNERSHIP</span>
            <img
              src="/images/hospex-logo.png"
              alt="HOSPEX Healthcare Expo"
              className="nav-hospex-logo"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

          {/* Desktop nav links */}
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="nav-link" onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <Button variant="primary" href="https://chat.whatsapp.com/He6WRwKDYvvJ118837dfH9" target="_blank" rel="noopener noreferrer">
              Register Now
            </Button>
          </div>

          {/* Mobile: HOSPEX partnership block */}
          <div className="nav-partnership mobile-partnership" aria-label="In partnership with HOSPEX">
            <span className="nav-partner-label">IN PARTNERSHIP</span>
            <img
              src="/images/hospex-logo.png"
              alt="HOSPEX"
              className="nav-hospex-logo"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button className="mobile-close" onClick={close} aria-label="Close menu">&times;</button>
        {navLinks.map(l => (
          <a key={l.label} href={l.href}
             className="mobile-nav-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <Button variant="primary" className="btn-lg" href="https://chat.whatsapp.com/He6WRwKDYvvJ118837dfH9" target="_blank" rel="noopener noreferrer" style={{marginTop: '24px'}}>
          Register Now
        </Button>
      </div>
    </>
  );
}
