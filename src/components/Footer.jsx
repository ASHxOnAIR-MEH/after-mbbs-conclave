import React from 'react';
import './Footer.css';
import { Calendar, Clock, Video, CreditCard, Contact, Mail, Phone } from 'lucide-react';

const navLinks = [
  { label:'About the Conclave', href:'#about'    },
  { label:'Career Pillars',     href:'#pillars'  },
  { label:'Our Speakers',       href:'#speakers' },
  { label:'Event Agenda',       href:'#agenda'   },
  { label:'Pricing & Passes',   href:'#pricing'  },
];

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-org">Indian Medical Association</div>
            <div className="footer-org-sub">Parippally Branch</div>
            <div className="footer-org-sub">of Kerala State</div>
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
            <div className="footer-col-title">
              <Calendar size={13} color="#10b981" strokeWidth={2.5} style={{marginRight:'6px',verticalAlign:'middle'}} />
              Event Details
            </div>
            <div className="footer-details">
              {[
                { Icon: Calendar, text: 'September 11, 12 & 13, 2026' },
                { Icon: Clock, text: '6:00 PM – 9:00 PM IST' },
                { Icon: Video, text: 'Live on Zoom' },
                { Icon: CreditCard, text: 'Viewer ₹249 &bull; Interactive ₹449' },
              ].map((d, i) => (
                <div key={i} className="footer-detail">
                  <d.Icon size={14} strokeWidth={2} />
                  <span dangerouslySetInnerHTML={{ __html: d.text }} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-title">
              <Contact size={13} color="#10b981" strokeWidth={2.5} style={{marginRight:'6px',verticalAlign:'middle'}} />
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
              <button onClick={() => setCurrentPage('terms')} className="footer-legal-link">Terms & Conditions</button>
              <button onClick={() => setCurrentPage('refund')} className="footer-legal-link">Refund & Cancellation</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
