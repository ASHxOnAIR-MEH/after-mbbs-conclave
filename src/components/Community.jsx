import React from 'react';
import './Community.css';

/* ── SVG Icons ── */

/* Community / People icon — replaces WhatsApp */
const CommunityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="comm-icon-svg">
    <circle cx="32" cy="32" r="32" fill="rgba(16,185,129,0.08)"/>
    {/* Centre person */}
    <circle cx="32" cy="24" r="6" stroke="#10b981" strokeWidth="2"/>
    <path d="M20 46c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
    {/* Left person */}
    <circle cx="16" cy="27" r="4.5" stroke="#34d399" strokeWidth="1.8" opacity="0.7"/>
    <path d="M7 46c0-4.97 4.03-9 9-9" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
    {/* Right person */}
    <circle cx="48" cy="27" r="4.5" stroke="#34d399" strokeWidth="1.8" opacity="0.7"/>
    <path d="M57 46c0-4.97-4.03-9-9-9" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const LeaderIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="comm-icon-svg">
    <circle cx="32" cy="32" r="32" fill="var(--emerald-dim)"/>
    <path d="M20 44h24M26 44V34M38 44V34" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 34l16-10 16 10" stroke="var(--emerald)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M24 28l8-10 8 10" stroke="var(--emerald-dark)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" opacity="0.6"/>
    <circle cx="32" cy="16" r="4" fill="var(--emerald)" opacity="0.85"/>
    <circle cx="22" cy="22" r="2.5" fill="var(--emerald-lt)" opacity="0.6"/>
    <circle cx="42" cy="22" r="2.5" fill="var(--emerald-lt)" opacity="0.6"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="var(--emerald-dim)"/>
    <path d="M5 8l2 2 4-4" stroke="var(--emerald)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#fef9c3"/>
    <path d="M8 4l1.2 2.4L12 7l-2 1.95.47 2.75L8 10.4l-2.47 1.3.47-2.75L4 7l2.8-.6L8 4z" fill="#ca8a04"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const communityBenefits = [
  'FREE Webinar Access',
  'Live Event Updates',
  'Speaker Announcements',
  'Session Reminders',
  'Career Resources',
  'Networking Opportunities',
];

const repBenefits = [
  'Official Representative Recognition',
  'Leadership Development',
  'Personal Career Support',
  'Organize Campus Activities',
  'Mentorship from Senior Doctors',
  'Networking Opportunities',
  'Performance-Based Incentives',
  'Certificate of Appointment',
];

export default function Community() {
  return (
    <section id="community" className="section community-section" aria-label="Join the Career After MBBS Community">
      {/* Subtle background decorations */}
      <div className="comm-bg-deco" aria-hidden="true">
        <svg className="comm-deco comm-deco-1" viewBox="0 0 200 60" fill="none">
          <path d="M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
        <svg className="comm-deco comm-deco-2" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2"/>
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2"/>
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20 Q50 5 80 20 M20 80 Q50 95 80 80" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
        <svg className="comm-deco comm-deco-3" viewBox="0 0 80 80" fill="none">
          <path d="M40 5 L50 30 L75 30 L55 48 L63 73 L40 58 L17 73 L25 48 L5 30 L30 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="container">
        {/* Section header */}
        <div className="comm-header">
          <p className="eyebrow">Get Involved</p>
          <h2 className="display-xl comm-heading">
            Join the Career After MBBS<br />
            <span className="comm-heading-free">Community <em>for Free</em></span>
          </h2>
          <p className="sub">
            Stay connected with India's Premier Medical Career Conclave and become a leader in your medical institution.
          </p>
        </div>

        {/* Two-card grid */}
        <div className="comm-grid">

          {/* ── Card 1: Community ── */}
          <div className="comm-card comm-card-wa" role="article">
            <div className="comm-card-inner">
              <div className="comm-icon-wrap comm-icon-wa">
                <CommunityIcon />
              </div>

              <div className="comm-pill comm-pill-wa">Official Community</div>

              <h3 className="comm-card-title">Join the Career After MBBS Community</h3>
              <p className="comm-card-desc">
                Join our growing medical career community for <strong>FREE orientation sessions</strong>, live event updates, expert insights, career resources and opportunities.
              </p>

              <ul className="comm-benefits" aria-label="Community benefits">
                {communityBenefits.map(b => (
                  <li key={b} className="comm-benefit-item">
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://chat.whatsapp.com/He6WRwKDYvvJ118837dfH9?s=qt&p=a&ilr=0&amv=2"
                target="_blank"
                rel="noopener noreferrer"
                className="comm-btn comm-btn-wa"
                aria-label="Join the Career After MBBS Community (opens in new tab)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                JOIN THE COMMUNITY
                <ArrowRight />
              </a>
            </div>
          </div>

          {/* ── Card 2: Student Team ── */}
          <div className="comm-card comm-card-rep" role="article">
            <div className="comm-card-inner">
              <div className="comm-icon-wrap comm-icon-rep">
                <LeaderIcon />
              </div>

              <div className="comm-pill comm-pill-rep">Leadership Opportunity</div>

              <h3 className="comm-card-title">Join the IMA Parippally Student Team</h3>
              <p className="comm-card-desc">
                Represent your medical college as a member of the IMA Parippally Student Team and help build one of India's fastest-growing medical student leadership networks.
                Lead campus engagement, connect with senior doctors, and inspire future healthcare professionals.
              </p>

              <ul className="comm-benefits" aria-label="IMA Parippally Student Team benefits">
                {repBenefits.map(b => (
                  <li key={b} className="comm-benefit-item">
                    <StarIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://chat.whatsapp.com/LvEzYG0AgcYLgNh9obIw8B"
                target="_blank"
                rel="noopener noreferrer"
                className="comm-btn comm-btn-rep"
                aria-label="Apply for the IMA Parippally Student Team (opens in new tab)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                Apply for the IMA Parippally Student Team
                <ArrowRight />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
