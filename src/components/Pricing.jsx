import React from 'react';
import './Pricing.css';
import Button from './Button';
import { Check, Sparkles } from 'lucide-react';

const CheckIcon = () => (
  <Check size={13} strokeWidth={3} />
);

const STUDENT_FEATS = [
  'Access to All Sessions',
  '20+ Expert Speakers',
  'Live Q&A Sessions',
  'Networking Opportunities',
  'Digital Resources',
  'Event Updates',
  'One-Time Access to Recorded Sessions',
  'One-to-One Career Guidance Options',
];

const PREMIUM_FEATS = [
  'Everything in Viewer Pass',
  'Premium Networking',
  'Priority Support',
  'Exclusive Resources',
  'Special Community Access',
  'Priority Event Updates',
];

const REGISTER_URL = 'https://forms.gle/jpjtxNWPcVEErFBg8';

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="pricing-intro">
          <p className="eyebrow">Pricing</p>
          <h2 className="display-xl">
            Choose Your <span className="text-emerald">Pass</span>
          </h2>
          <p className="sub">
            Choose your pass and secure your seat today.{' '}
            <strong>Early Bird pricing is available for a limited period.</strong>
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="pricing-grid">

          {/* ── Card 1: Student Pass ── */}
          <div className="price-card">
            <div className="plan-name">Viewer Pass</div>

            {/* Strikethrough original */}
            <div className="plan-original-wrap">
              <span className="plan-original-price">₹399</span>
            </div>

            {/* Early Bird badge + discounted price */}
            <div className="plan-earlybird-row">
              <span className="earlybird-badge">
                <Sparkles size={10} />
                EARLY BIRD
              </span>
            </div>
            <div className="plan-price-new">
              <span className="plan-currency-new">₹</span>
              <span className="plan-amount-new">249</span>
            </div>
            <p className="plan-limited">Limited Time Offer</p>

            <div className="plan-divider" />

            <ul className="plan-features">
              {STUDENT_FEATS.map((f) => (
                <li key={f} className="feat-item feat-yes">
                  <span className="feat-icon"><CheckIcon /></span>
                  <span className="feat-text">{f}</span>
                </li>
              ))}
            </ul>

            <div className="plan-cta">
              <Button
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="btn-lg"
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* ── Card 2: Premium Pass ── */}
          <div className="price-card price-card-featured">
            <div className="popular-tag">
              <Sparkles size={11} />
              Most Popular
            </div>
            <div className="plan-name">Interactive Pass</div>

            {/* Strikethrough original */}
            <div className="plan-original-wrap">
              <span className="plan-original-price">₹699</span>
            </div>

            {/* Early Bird badge + discounted price */}
            <div className="plan-earlybird-row">
              <span className="earlybird-badge">
                <Sparkles size={10} />
                EARLY BIRD
              </span>
            </div>
            <div className="plan-price-new">
              <span className="plan-currency-new">₹</span>
              <span className="plan-amount-new text-emerald">499</span>
            </div>
            <p className="plan-limited">Limited Time Offer</p>

            <div className="plan-divider" />

            <ul className="plan-features">
              {PREMIUM_FEATS.map((f) => (
                <li key={f} className="feat-item feat-yes">
                  <span className="feat-icon"><CheckIcon /></span>
                  <span className="feat-text">{f}</span>
                </li>
              ))}
            </ul>

            <div className="plan-cta">
              <Button
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="btn-lg"
              >
                Register Now
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
