import React from 'react';
import './Hospex.css';

export default function Hospex() {
  return (
    <section id="hospex" className="section hospex-section" aria-label="HOSPEX Healthcare Expo Association">
      <div className="container">

        {/* ── Association header ── */}
        <div className="hospex-header">
          <p className="eyebrow">Strategic Association</p>
          <div className="hospex-assoc-row">
            <span className="hospex-assoc-tag">ASSOCIATED WITH</span>
          </div>
          <div className="hospex-logo-wrap">
            <img src="/images/hospex-logo.png" alt="HOSPEX Healthcare Expo" className="hospex-main-logo" />
          </div>
        </div>

        {/* ── Two-column content ── */}
        <div className="hospex-grid">

          {/* Card 1 — What is HOSPEX */}
          <div className="hospex-card">
            <div className="hospex-card-tag">About HOSPEX Healthcare Expo</div>
            <h3 className="hospex-card-title">A Next-Generation Healthcare Business Platform</h3>
            <p className="hospex-card-body">
              HOSPEX is designed to bring together hospitals, healthcare companies, startups,
              investors, and global stakeholders under one curated platform.
            </p>
            <p className="hospex-card-body">
              Unlike traditional exhibitions, HOSPEX focuses on <strong>real business outcomes</strong> —
              enabling partnerships, investments, technology adoption, and international collaborations.
              From cutting-edge medical innovations to strategic networking,
              HOSPEX is where healthcare business happens.
            </p>
            <div className="hospex-pillars">
              {[
                { icon: '🏥', label: 'Hospitals & Health Systems' },
                { icon: '🚀', label: 'Healthcare Startups' },
                { icon: '🌐', label: 'Global Stakeholders' },
                { icon: '💼', label: 'Investors & Partners' },
              ].map(p => (
                <div key={p.label} className="hospex-pillar-item">
                  <span className="hospex-pillar-icon">{p.icon}</span>
                  <span className="hospex-pillar-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — The Connection */}
          <div className="hospex-card hospex-card-accent">
            <div className="hospex-card-tag hospex-card-tag-gold">Career After MBBS × HOSPEX</div>
            <h3 className="hospex-card-title">Where Career Development Meets Healthcare Industry</h3>
            <p className="hospex-card-body">
              HOSPEX provides a focused platform for healthcare companies to connect with
              verified decision-makers — hospital owners, procurement heads, and industry
              stakeholders — delivering <strong>high-quality footfall, targeted visibility,
              and measurable business outcomes</strong>.
            </p>
            <p className="hospex-card-body">
              The Career After MBBS program brings together medical students, interns, PG aspirants,
              and young doctors, while the association with HOSPEX creates a broader healthcare
              ecosystem — connecting career development with healthcare businesses, innovators,
              and industry stakeholders.
            </p>
            <div className="hospex-connection-badge">
              <span className="hospex-conn-left">Career After MBBS</span>
              <span className="hospex-conn-divider">×</span>
              <span className="hospex-conn-right">HOSPEX Healthcare Expo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
