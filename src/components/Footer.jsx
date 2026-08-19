import React from 'react';
import './Footer.css';
import { Contact, Mail, Phone, MapPin, Calendar, Wifi } from 'lucide-react';

const navLinks = [
  { label: 'About the Conclave', href: '#about'    },
  { label: 'Career Pillars',     href: '#pillars'  },
  { label: 'Our Speakers',       href: '#speakers' },
  { label: 'Event Agenda',       href: '#agenda'   },
  { label: 'Pricing & Passes',   href: '#pricing'  },
];

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-org">Indian Medical Association</div>
            <div className="footer-org-sub">Parippally Branch</div>
            <div className="footer-org-sub">of Kerala State</div>
            <p className="footer-tagline">
              Empowering Doctors. Transforming Careers. Building the Future of Medicine.
            </p>
            {/* HOSPEX badge in footer */}
            <div className="footer-hospex">
              <span className="footer-hospex-label">Associated with</span>
              <img src="/images/hospex-logo.png" alt="HOSPEX Healthcare Expo" className="footer-hospex-logo" />
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Event Details */}
          <div>
            <div className="footer-col-title">
              <Calendar size={13} color="#10b981" strokeWidth={2.5} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Event Details
            </div>
            <div className="footer-event-details">
              <div className="footer-event-row">
                <Calendar size={13} strokeWidth={2} className="footer-ev-icon" />
                <span>24–26 September 2026</span>
              </div>
              <div className="footer-event-row footer-hybrid-badge">
                <span className="footer-hybrid-pill">HYBRID EVENT</span>
                <span>Offline + Live Online</span>
              </div>
              <div className="footer-event-row">
                <MapPin size={13} strokeWidth={2} className="footer-ev-icon" />
                <span>
                  Chakolas Pavilion Events Center<br />
                  Kochi, Kerala, India<br />
                  <span className="footer-address">NH966A, North Kalamassery,<br />HMT Kalamassery, Ernakulam 683104</span>
                </span>
              </div>
              <div className="footer-event-row">
                <Wifi size={13} strokeWidth={2} className="footer-ev-icon" />
                <span>Live Streaming via Zoom</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">
              <Contact size={13} color="#10b981" strokeWidth={2.5} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Contact Us
            </div>
            <div className="footer-contacts">
              <a href="mailto:imaparippally@gmail.com" className="footer-contact">
                <Mail size={14} strokeWidth={2} />
                imaparippally@gmail.com
              </a>
              <a href="tel:+918281980653" className="footer-contact">
                <Phone size={14} strokeWidth={2} />
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
            <div className="footer-legal">
              <button onClick={() => setCurrentPage('privacy')} className="footer-legal-link">Privacy Policy</button>
              <button onClick={() => setCurrentPage('terms')} className="footer-legal-link">Terms &amp; Conditions</button>
              <button onClick={() => setCurrentPage('refund')} className="footer-legal-link">Refund &amp; Cancellation</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
