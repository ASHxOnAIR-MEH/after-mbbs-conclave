import React from 'react';
import './RegistrationCTA.css';
import Button from './Button';

export default function RegistrationCTA() {
  return (
    <section className="section reg-cta-section">
      <div className="container">
        <div className="reg-cta-card">
          <p className="reg-cta-eyebrow">Your Next Step</p>
          <h2 className="reg-cta-title">Your Future. <span>Your Choice.</span></h2>
          <p className="reg-cta-desc">
            The right guidance today can shape your medical career tomorrow.
          </p>
          <Button href="#pricing" variant="primary" className="btn-lg">
            Reserve Your Seat
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Button>
          <p className="reg-cta-trust">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Secure Payment &middot; Instant Confirmation
          </p>
        </div>
      </div>
    </section>
  );
}
