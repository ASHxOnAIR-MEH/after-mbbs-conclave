import React from 'react';
import './Sponsors.css';

/* Inline SVG icons */
const IconUpload = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.7">
    <polyline points="16 16 12 12 8 16"/>
    <line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);
const IconPhoto = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ec4a0" strokeWidth="1.7">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b9bdc4" strokeWidth="1.7">
    <rect x="2" y="3" width="20" height="18"/>
    <path d="M8 21V8M16 21V8M2 12h20"/>
  </svg>
);

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section">
      <div className="container">
        <div className="sponsors-intro">
          <p className="eyebrow">Our Partners</p>
          <h2 className="display-xl">Event <span className="text-emerald">Sponsors</span></h2>
          <p className="sub">
            Proudly supported by the leaders in healthcare and education.
          </p>
        </div>

        <div className="sponsors-hierarchy">

          {/* ── Title Sponsor ── */}
          <div className="sponsor-tier">
            <div className="tier-pill tier-pill-title">Title Sponsor</div>
            <div className="sponsor-card title-card">
              <IconUpload />
              <p className="sponsor-caption">Logo coming soon</p>
            </div>
          </div>

          {/* ── Associate Sponsors ── */}
          <div className="sponsor-tier">
            <div className="tier-label-assoc">Associate Sponsors</div>
            <div className="sponsors-grid assoc-grid">
              {[1,2,3].map(n => (
                <div key={n} className="sponsor-card assoc-card">
                  <IconPhoto />
                  <p className="sponsor-caption-sm">Logo soon</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Co-Powered By ── */}
          <div className="sponsor-tier">
            <div className="tier-label-co">Co-Powered By</div>
            <div className="sponsors-grid co-grid">
              {[1,2,3,4].map(n => (
                <div key={n} className="sponsor-card co-card">
                  <IconBuilding />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
