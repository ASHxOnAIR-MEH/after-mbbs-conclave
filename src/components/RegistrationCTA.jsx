import React from 'react';
import './RegistrationCTA.css';

export default function RegistrationCTA() {
  return (
    <section className="section reg-cta-section" aria-label="Your Future. Your Choice.">
      <div className="container">
        <div className="reg-cta-card">
          <p className="reg-cta-eyebrow">Your Next Step</p>
          <h2 className="reg-cta-title">Your Future. <span>Your Choice.</span></h2>
          <p className="reg-cta-desc">
            The right guidance today can shape your medical career tomorrow.
          </p>
          <p className="reg-cta-closing">
            Wishing you all the best for your medical career.
          </p>
        </div>
      </div>
    </section>
  );
}
