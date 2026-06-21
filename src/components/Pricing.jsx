import React from 'react';
import './Pricing.css';
import Button from './Button';
import { Check } from 'lucide-react';

const CheckIcon = () => (
  <Check size={16} strokeWidth={3} />
);

const VIEWER_FEATS = [
  'Full Webinar Access (3 Days)',
  'Career Insights & Presentations',
  'Recorded Session Replay',
  'Certificate of Participation',
];

const INTER_FEATS = [
  'Everything in Viewer Pass',
  'Ask Questions Live',
  'Direct Interaction With Speakers',
  'Networking Opportunity',
  'Priority Q&A Access',
  'Certificate of Participation',
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="pricing-intro">
          <p className="eyebrow">Investment in Your Future</p>
          <h2 className="display-xl">Choose Your <span className="text-emerald">Experience</span></h2>
          <p className="sub">
            Gain access to life-changing insights at an incredibly affordable price.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Viewer */}
          <div className="price-card">
            <div className="plan-name">Viewer Pass</div>
            <div className="plan-price">
              <span className="plan-currency">₹</span>
              <span className="plan-amount">249</span>
            </div>
            <p className="plan-tagline">Perfect for learning at your own pace.</p>
            <div className="plan-divider"/>
            <ul className="plan-features">
              {VIEWER_FEATS.map((f,i) => (
                <li key={i} className="feat-item feat-yes">
                  <span className="feat-icon"><CheckIcon/></span>
                  <span className="feat-text">{f}</span>
                </li>
              ))}
            </ul>
            <div className="plan-cta">
              <Button href="https://forms.gle/jpjtxNWPcVEErFBg8" target="_blank" variant="secondary" className="btn-lg">
                Register Now
              </Button>
            </div>
          </div>

          {/* Interactive */}
          <div className="price-card price-card-featured">
            <div className="popular-tag">Recommended</div>
            <div className="plan-name">Interactive Pass</div>
            <div className="plan-price">
              <span className="plan-currency">₹</span>
              <span className="plan-amount text-emerald">449</span>
            </div>
            <p className="plan-tagline">For doctors who want to engage, connect, and transform.</p>
            <div className="plan-divider"/>
            <ul className="plan-features">
              {INTER_FEATS.map((f,i) => (
                <li key={i} className="feat-item feat-yes">
                  <span className="feat-icon"><CheckIcon/></span>
                  <span className="feat-text">{f}</span>
                </li>
              ))}
            </ul>
            <div className="plan-cta">
              <Button href="https://forms.gle/jpjtxNWPcVEErFBg8" target="_blank" variant="primary" className="btn-lg">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
