import React from 'react';
import './Footer.css';

const navLinks = [
  { label:'About the Conclave', href:'#about'    },
  { label:'Career Pillars',     href:'#pillars'  },
  { label:'Our Speakers',       href:'#speakers' },
  { label:'Event Agenda',       href:'#agenda'   },
  { label:'Pricing & Passes',   href:'#pricing'  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-org">IMA Parippally Branch</div>
            <div className="footer-org-sub">Kerala State &bull; Indian Medical Association</div>
            <p className="footer-tagline">
              Empowering Doctors. Transforming Careers. Building the Future of Medicine.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Event Details</div>
            <div className="footer-details">
              {[
                { icon:<><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
                  text:'September 11, 12 & 13, 2026' },
                { icon:<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                  text:'6:00 PM – 9:00 PM IST' },
                { icon:<><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></>,
                  text:'Live on Zoom' },
                { icon:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
                  text:'Viewer ₹249 &bull; Interactive ₹449' },
              ].map((d, i) => (
                <div key={i} className="footer-detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{d.icon}</svg>
                  <span>{d.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contacts">
              <a href="mailto:imaparippally@gmail.com" className="footer-contact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                imaparippally@gmail.com
              </a>
              <a href="tel:+918281980653" className="footer-contact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 11.4 19.79 19.79 0 0 1 1.84 2.83 2 2 0 0 1 3.81 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.96-1.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 82819 80653
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              &copy; 2026 IMA Parippally Branch, Kerala State. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
