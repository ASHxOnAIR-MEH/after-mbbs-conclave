import React from 'react';
import './Sponsors.css';

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
          {/* Title Sponsor */}
          <div className="sponsor-tier title-sponsor">
            <h3 className="tier-title">Title Sponsor</h3>
            <div className="sponsor-card large-placeholder">
              <span className="placeholder-text">Title Sponsor Logo</span>
            </div>
          </div>

          {/* Associate Sponsors */}
          <div className="sponsor-tier associate-sponsors mt-40">
            <h3 className="tier-title">Associate Sponsors</h3>
            <div className="sponsors-grid">
              <div className="sponsor-card medium-placeholder">
                 <span className="placeholder-text">Associate Logo 1</span>
              </div>
              <div className="sponsor-card medium-placeholder">
                 <span className="placeholder-text">Associate Logo 2</span>
              </div>
              <div className="sponsor-card medium-placeholder">
                 <span className="placeholder-text">Associate Logo 3</span>
              </div>
            </div>
          </div>

          {/* Co-Powered By */}
          <div className="sponsor-tier co-powered-sponsors mt-40">
            <h3 className="tier-title">Co-Powered By</h3>
            <div className="sponsors-grid small-grid">
              <div className="sponsor-card small-placeholder">
                 <span className="placeholder-text">Partner 1</span>
              </div>
              <div className="sponsor-card small-placeholder">
                 <span className="placeholder-text">Partner 2</span>
              </div>
              <div className="sponsor-card small-placeholder">
                 <span className="placeholder-text">Partner 3</span>
              </div>
              <div className="sponsor-card small-placeholder">
                 <span className="placeholder-text">Partner 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
