import React from 'react';
import './Sponsors.css';

/* ── Icons for tier indicators ── */
const IconInvite = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="3"/>
    <path d="M2 8l10 7 10-7"/>
  </svg>
);

const IconStar = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconDiamond = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M6 3h12l4 6-10 12L2 9z"/>
    <path d="M2 9h20"/>
  </svg>
);

const IconMedal = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="14" r="7"/>
    <path d="M7.5 4.27 2 8l4.09 2L12 2l5.91 8L22 8l-5.5-3.73"/>
  </svg>
);

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section">
      <div className="sponsors-intro container">
        <p className="eyebrow">Partnership Opportunities</p>
        <h2 className="display-xl">Our <span className="text-emerald">Sponsors</span></h2>
        <p className="sub">
          Join India's premier medical career conclave as a sponsor and connect with thousands of medical professionals.
        </p>
      </div>

      <div className="container sponsors-hierarchy">

        {/* ── Title Sponsor ── */}
        <div className="sponsor-tier">
          <div className="tier-pill-title">Title Sponsor</div>
          <div className="sponsor-invite-card title-invite-card">
            <div className="invite-icon-wrap title-invite-icon">
              <IconStar />
            </div>
            <div className="invite-content">
              <div className="invite-open-badge">Invitation Open</div>
              <p className="invite-desc">
                The Title Sponsorship offers premier visibility across all event touchpoints — stage, digital, and collateral.
              </p>
            </div>
          </div>
        </div>

        {/* ── Platinum Sponsors ── */}
        <div className="sponsor-tier">
          <div className="tier-pill-platinum">Platinum Sponsors</div>
          <div className="sponsor-invite-grid">
            <div className="sponsor-invite-card platinum-invite-card">
              <div className="invite-icon-wrap platinum-invite-icon">
                <IconDiamond />
              </div>
              <div className="invite-content">
                <div className="invite-open-badge platinum-badge">Invitation Open</div>
                <p className="invite-desc-sm">Premium brand placement and speaking opportunities.</p>
              </div>
            </div>
            <div className="sponsor-invite-card platinum-invite-card">
              <div className="invite-icon-wrap platinum-invite-icon">
                <IconDiamond />
              </div>
              <div className="invite-content">
                <div className="invite-open-badge platinum-badge">Invitation Open</div>
                <p className="invite-desc-sm">Premium brand placement and speaking opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Gold Sponsors ── */}
        <div className="sponsor-tier">
          <div className="tier-pill-gold">Gold Sponsors</div>
          <div className="sponsor-invite-grid gold-invite-grid">
            {[1, 2, 3].map(i => (
              <div key={i} className="sponsor-invite-card gold-invite-card">
                <div className="invite-icon-wrap gold-invite-icon">
                  <IconMedal />
                </div>
                <div className="invite-content">
                  <div className="invite-open-badge gold-badge">Invitation Open</div>
                  <p className="invite-desc-sm">Targeted visibility for healthcare brands.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Co-Powered By — DAMS ── */}
        <div className="sponsor-tier">
          <div className="tier-label-assoc">Co-Powered By</div>
          <div className="dams-sponsor-card">
            <div className="dams-logo-wrap" aria-label="DAMS logo">
              <img src="/images/dams-logo.png" alt="DAMS" className="dams-logo-img" style={{ maxHeight: '48px', objectFit: 'contain' }} />
            </div>
            <div className="dams-info">
              <div className="dams-name">DAMS</div>
              <div className="dams-branches">TRIVANDRUM &nbsp;|&nbsp; ERNAKULAM</div>
            </div>
          </div>
        </div>

        {/* ── Contact CTA ── */}
        <div className="sponsor-contact-cta">
          <p className="sponsor-contact-text">
            Interested in sponsoring? Connect with our team.
          </p>
          <a
            href="mailto:imaparippally@gmail.com"
            className="sponsor-contact-link"
            aria-label="Email IMA Parippally for sponsorship"
          >
            imaparippally@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}
