import React from 'react';
import './Sponsors.css';

/* Mock Icons for Sponsors */
const IconMedical = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);
const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M2 12h20"/>
  </svg>
);
const IconStar = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const sponsorList = [
  { id: 1, name: 'MedTech Solutions', Icon: IconMedical },
  { id: 2, name: 'Global Health Inc.', Icon: IconGlobe },
  { id: 3, name: 'CareShield Providers', Icon: IconShield },
  { id: 4, name: 'City Hospital Group', Icon: IconBuilding },
  { id: 5, name: 'BioLife Research', Icon: IconMedical },
  { id: 6, name: 'Apex Medical', Icon: IconShield },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section">
      <div className="sponsors-intro container">
        <p className="eyebrow">Supported By</p>
        <h2 className="display-xl">Our <span className="text-emerald">Partners</span></h2>
        <p className="sub">
          Proudly backed by the world's leading healthcare organizations and institutions.
        </p>
      </div>

      <div className="container sponsors-hierarchy">
        {/* ── Static Title Sponsor ── */}
        <div className="sponsor-tier">
          <div className="tier-pill-title">Title Sponsor</div>
          <div className="sponsor-card title-card">
            <div className="title-icon-wrap">
              <IconStar />
            </div>
            <h3 className="title-sponsor-name">Premier Healthcare Group</h3>
            <p className="sponsor-caption">Leading the future of medical excellence</p>
          </div>
        </div>
        
        {/* ── Marquee for Associate / Co-powered Sponsors ── */}
        <div className="sponsor-tier">
          <div className="tier-label-assoc">Associate & Co-Powered Sponsors</div>
        </div>
      </div>

      <div className="marquee-container">
        {/* We duplicate the list to ensure a seamless infinite scroll loop */}
        <div className="marquee-track">
          {[...sponsorList, ...sponsorList].map((sponsor, index) => (
            <div key={`${sponsor.id}-${index}`} className="marquee-item">
              <div className="sponsor-icon-wrap">
                <sponsor.Icon />
              </div>
              <span className="sponsor-name">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
