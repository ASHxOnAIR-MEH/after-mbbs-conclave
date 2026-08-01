import React from 'react';
import './Community.css';

/* ── SVG Icons ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="comm-icon-svg">
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path
      d="M23.5 8.5A10.44 10.44 0 0 0 16.01 5.5C10.75 5.5 6.5 9.75 6.5 15a9.44 9.44 0 0 0 1.41 4.97L6.5 26.5l6.69-1.75A9.42 9.42 0 0 0 16.01 25.5c5.25 0 9.49-4.25 9.49-9.5a9.44 9.44 0 0 0-2-5.5ZM16.01 23.75a7.77 7.77 0 0 1-4.04-1.13l-.29-.17-3.97 1.04 1.06-3.86-.19-.3a7.73 7.73 0 0 1-1.25-4.33c0-4.32 3.52-7.82 7.85-7.82a7.79 7.79 0 0 1 7.85 7.81c-.01 4.33-3.53 7.76-7.82 7.76Zm4.29-5.84c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.53.12-.16.23-.62.76-.76.91-.14.16-.28.17-.51.06a6.5 6.5 0 0 1-1.89-1.17 7.07 7.07 0 0 1-1.31-1.63c-.14-.23-.01-.36.1-.47.1-.1.23-.26.35-.39.12-.13.16-.23.23-.38.08-.16.04-.29-.02-.41-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.46c-.16 0-.41.06-.63.29-.21.23-.82.8-.82 1.95s.84 2.26.96 2.42c.12.16 1.66 2.53 4.02 3.55.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.01.14-1.11-.07-.1-.22-.16-.45-.27Z"
      fill="white"
    />
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

const whatsappBenefits = [
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
  'National Medical Student Network',
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
          <h2 className="display-xl">Join the Career After <span className="text-emerald">MBBS Community</span></h2>
          <p className="sub">
            Stay connected with India's Premier Medical Career Conclave and become a leader in your medical institution.
          </p>
        </div>

        {/* Two-card grid */}
        <div className="comm-grid">

          {/* ── Card 1: WhatsApp ── */}
          <div className="comm-card comm-card-wa" role="article">
            <div className="comm-card-inner">
              <div className="comm-icon-wrap comm-icon-wa">
                <WhatsAppIcon />
              </div>

              <div className="comm-pill comm-pill-wa">Official Community</div>

              <h3 className="comm-card-title">Join for FREE Orientation &amp; Live Updates</h3>
              <p className="comm-card-desc">
                Join our official WhatsApp community for <strong>FREE orientation sessions</strong> and real-time live updates on Career After MBBS.
              </p>

              <ul className="comm-benefits" aria-label="WhatsApp community benefits">
                {whatsappBenefits.map(b => (
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
                aria-label="Join the official WhatsApp community (opens in new tab)"
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M23.5 8.5A10.44 10.44 0 0 0 16.01 5.5C10.75 5.5 6.5 9.75 6.5 15a9.44 9.44 0 0 0 1.41 4.97L6.5 26.5l6.69-1.75A9.42 9.42 0 0 0 16.01 25.5c5.25 0 9.49-4.25 9.49-9.5a9.44 9.44 0 0 0-2-5.5ZM16.01 23.75a7.77 7.77 0 0 1-4.04-1.13l-.29-.17-3.97 1.04 1.06-3.86-.19-.3a7.73 7.73 0 0 1-1.25-4.33c0-4.32 3.52-7.82 7.85-7.82a7.79 7.79 0 0 1 7.85 7.81c-.01 4.33-3.53 7.76-7.82 7.76Zm4.29-5.84c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.53.12-.16.23-.62.76-.76.91-.14.16-.28.17-.51.06a6.5 6.5 0 0 1-1.89-1.17 7.07 7.07 0 0 1-1.31-1.63c-.14-.23-.01-.36.1-.47.1-.1.23-.26.35-.39.12-.13.16-.23.23-.38.08-.16.04-.29-.02-.41-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.46c-.16 0-.41.06-.63.29-.21.23-.82.8-.82 1.95s.84 2.26.96 2.42c.12.16 1.66 2.53 4.02 3.55.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.01.14-1.11-.07-.1-.22-.16-.45-.27Z" fill="white"/>
                </svg>
                Join WhatsApp Community
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Card 2: Institutional Rep ── */}
          <div className="comm-card comm-card-rep" role="article">
            <div className="comm-card-inner">
              <div className="comm-icon-wrap comm-icon-rep">
                <LeaderIcon />
              </div>

              <div className="comm-pill comm-pill-rep">Leadership Opportunity</div>

              <h3 className="comm-card-title">Become an Institutional Representative</h3>
              <p className="comm-card-desc">
                Represent your medical college as an Institutional Representative and help build one of India's fastest-growing medical student leadership networks.
                Lead campus engagement, connect with senior doctors, and inspire future healthcare professionals.
              </p>

              <ul className="comm-benefits" aria-label="Institutional representative benefits">
                {repBenefits.map(b => (
                  <li key={b} className="comm-benefit-item">
                    <StarIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9nG-zKO1GiQAirPIQwUVqZvsBeQ1YABf_1VpW1PNiFvagCw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="comm-btn comm-btn-rep"
                aria-label="Apply as an Institutional Representative (opens in new tab)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                Apply as Institutional Representative
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
