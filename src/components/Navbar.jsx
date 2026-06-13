import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from './Button';

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Pillars',  href: '#pillars'  },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda',   href: '#agenda'   },
  { label: 'Passes',   href: '#pricing'  },
];

export default function Navbar() {
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

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={close}>
            <img src="/images/ima-logo.jpg" alt="IMA Logo" className="nav-logo-img" onError={(e) => e.target.style.display='none'} />
            <div className="nav-logo-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="nav-logo-name" style={{ fontWeight: 'bold', fontSize: '1.125rem', lineHeight: '1.2', color: 'var(--black-1)' }}>Indian Medical Association</div>
              <div className="nav-logo-sub" style={{ color: '#4b5563', fontSize: '0.875rem', fontWeight: 'normal' }}>Parippally Branch Kerala State</div>
            </div>
          </a>

          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Button href="#pricing" variant="primary">
              Register Now
            </Button>
          </div>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="mobile-close" onClick={close}>&times;</button>
        {navLinks.map(l => (
          <a key={l.label} href={l.href}
             className="mobile-nav-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <Button href="#pricing" variant="primary" className="btn-lg" onClick={close} style={{marginTop: '24px'}}>
          Register Now
        </Button>
      </div>
    </>
  );
}
