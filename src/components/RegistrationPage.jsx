import React from 'react';
import './RegistrationPage.css';
import { registrationLinks } from '../registrationLinks';
import { ArrowRight, Tag, Star, Eye, Zap } from 'lucide-react';

const cards = [
  {
    id: 'viewer',
    icon: Eye,
    title: 'Viewer Pass',
    badge: null,
    badgeGold: false,
    originalPrice: '₹399',
    earlyBirdPrice: '₹249',
    description: 'Access the full conclave experience, expert sessions, career discussions and learning resources.',
    referral: false,
    ctaLabel: 'Register as Viewer',
    urlKey: 'viewer',
    featured: false,
  },
  {
    id: 'viewer-referral',
    icon: Tag,
    title: 'Viewer Pass',
    titleSub: 'with Referral Code',
    badge: '10% OFF WITH REFERRAL CODE',
    badgeGold: true,
    originalPrice: '₹399',
    earlyBirdPrice: '₹249',
    description: 'Have an Institutional Representative referral code? Use your valid code to receive an additional 10% discount.',
    referral: true,
    ctaLabel: 'Register with Referral Code',
    urlKey: 'viewerReferral',
    featured: false,
  },
  {
    id: 'interactive',
    icon: Zap,
    title: 'Interactive Pass',
    badge: 'MOST POPULAR',
    badgeGold: false,
    originalPrice: '₹699',
    earlyBirdPrice: '₹499',
    description: 'Get the enhanced interactive experience with additional engagement, live Q&A and networking opportunities.',
    referral: false,
    ctaLabel: 'Register as Interactive',
    urlKey: 'interactive',
    featured: true,
  },
  {
    id: 'interactive-referral',
    icon: Tag,
    title: 'Interactive Pass',
    titleSub: 'with Referral Code',
    badge: '10% OFF WITH REFERRAL CODE',
    badgeGold: true,
    originalPrice: '₹699',
    earlyBirdPrice: '₹499',
    description: 'Have an Institutional Representative referral code? Use your valid code to receive an additional 10% discount.',
    referral: true,
    ctaLabel: 'Register with Referral Code',
    urlKey: 'interactiveReferral',
    featured: false,
  },
];

function RegCard({ card, setCurrentPage }) {
  const { icon: Icon, title, titleSub, badge, badgeGold, originalPrice,
          earlyBirdPrice, description, referral, ctaLabel, urlKey, featured } = card;

  const url = registrationLinks[urlKey];

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`reg-card ${featured ? 'reg-card-featured' : ''} ${referral ? 'reg-card-referral' : ''}`}>
      {/* Top badge */}
      {badge && (
        <div className={`reg-badge ${badgeGold ? 'reg-badge-gold' : 'reg-badge-green'}`}>
          {badgeGold && <Tag size={10} strokeWidth={2.5} />}
          {!badgeGold && <Star size={10} strokeWidth={2.5} />}
          {badge}
        </div>
      )}

      {/* Icon */}
      <div className={`reg-icon-wrap ${referral ? 'reg-icon-gold' : 'reg-icon-green'}`}>
        <Icon size={24} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <div className="reg-title-block">
        <h3 className="reg-card-title">{title}</h3>
        {titleSub && <span className="reg-card-title-sub">{titleSub}</span>}
      </div>

      {/* Pricing */}
      <div className="reg-pricing">
        <span className="reg-original">{originalPrice}</span>
        <div className="reg-eb-row">
          <span className="reg-eb-label">Early Bird</span>
          <span className="reg-price">{earlyBirdPrice}</span>
        </div>
        {referral && (
          <div className="reg-referral-note">
            <Tag size={11} strokeWidth={2} />
            Additional 10% off with referral code
          </div>
        )}
      </div>

      {/* Description */}
      <p className="reg-desc">{description}</p>

      {/* CTA */}
      <button
        className={`reg-cta-btn ${featured ? 'reg-cta-primary' : referral ? 'reg-cta-gold' : 'reg-cta-secondary'}`}
        onClick={handleClick}
        disabled={!url}
        aria-label={ctaLabel}
      >
        {ctaLabel}
        <ArrowRight size={15} strokeWidth={2.5} />
      </button>

      {!url && (
        <p className="reg-coming-soon">Registration opening soon</p>
      )}
    </div>
  );
}

export default function RegistrationPage({ setCurrentPage }) {
  return (
    <div className="reg-page">
      <div className="container">

        {/* Back link */}
        <button className="reg-back-btn" onClick={() => setCurrentPage('home')}>
          ← Back to website
        </button>

        {/* Header */}
        <div className="reg-page-header">
          <p className="eyebrow">Registration</p>
          <h1 className="reg-page-title">Choose Your Registration Type</h1>
          <p className="reg-page-sub">
            Select the pass that best suits you. Participants with a valid{' '}
            <strong>Institutional Representative referral code</strong> receive an additional 10% discount.
          </p>
        </div>

        {/* Cards 2×2 grid */}
        <div className="reg-grid">
          {cards.map(card => (
            <RegCard key={card.id} card={card} setCurrentPage={setCurrentPage} />
          ))}
        </div>

        {/* Footer note */}
        <p className="reg-footer-note">
          Referral code validation and final payment happen inside the registration form.
          The website does not process payments directly.
        </p>

      </div>
    </div>
  );
}
