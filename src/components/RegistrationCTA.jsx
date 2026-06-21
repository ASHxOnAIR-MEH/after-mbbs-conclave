import React from 'react';
import './RegistrationCTA.css';
import Button from './Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

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
            <ArrowRight size={16} strokeWidth={2.5} />
          </Button>
          <p className="reg-cta-trust">
            <ShieldCheck size={14} strokeWidth={2} />
            Secure Payment &middot; Instant Confirmation
          </p>
        </div>
      </div>
    </section>
  );
}
