import React from 'react';
import './Pricing.css';
import Button from './Button';

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const VIEWER_FEATS = [
  { yes: true,  text: 'Watch all 3-day live webinar sessions'   },
  { yes: true,  text: 'Access to all presentation slides'       },
  { yes: true,  text: '1-Year WhatsApp community support'       },
  { yes: true,  text: 'Recorded session replay access'          },
  { yes: false, text: 'Live question submission'                 },
  { yes: false, text: 'Exclusive doctor discussion session'      },
  { yes: false, text: 'Priority networking with experts'        },
];
const INTER_FEATS = [
  { yes: true, text: 'Watch all 3-day live webinar sessions'   },
  { yes: true, text: 'Access to all presentation slides'       },
  { yes: true, text: '1-Year WhatsApp community support'       },
  { yes: true, text: 'Recorded session replay access'          },
  { yes: true, text: 'Ask up to 10 live questions'             },
  { yes: true, text: 'Exclusive doctor discussion session'     },
  { yes: true, text: 'Priority networking with experts'        },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="pricing-intro">
          <p className="eyebrow">Investment in Your Future</p>
          <h2 className="display-xl">Choose Your <span className="text-emerald">Pass</span></h2>
          <p className="sub">
            Gain access to life-changing insights at an incredibly affordable price.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Viewer */}
          <div className="price-card float-1">
            <div className="plan-name">Viewer Pass</div>
            <div className="plan-price">
              <span className="plan-currency">₹</span>
              <span className="plan-amount">249</span>
            </div>
            <p className="plan-tagline">Perfect for learning and growing at your own pace.</p>
            <div className="plan-divider"/>
            <ul className="plan-features">
              {VIEWER_FEATS.map((f,i) => (
                <li key={i} className={`feat-item ${f.yes ? 'feat-yes':'feat-no'}`}>
                  <span className="feat-icon">{f.yes ? <CheckIcon/> : <XIcon/>}</span>
                  <span className="feat-text">{f.text}</span>
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
          <div className="price-card price-card-featured float-2">
            <div className="popular-tag">Most Popular</div>
            <div className="plan-name">Interactive Pass</div>
            <div className="plan-price">
              <span className="plan-currency">₹</span>
              <span className="plan-amount text-emerald">449</span>
            </div>
            <p className="plan-tagline">For doctors who want to engage, connect, and transform.</p>
            <div className="plan-divider"/>
            <ul className="plan-features">
              {INTER_FEATS.map((f,i) => (
                <li key={i} className={`feat-item ${f.yes ? 'feat-yes':'feat-no'}`}>
                  <span className="feat-icon">{f.yes ? <CheckIcon/> : <XIcon/>}</span>
                  <span className="feat-text">{f.text}</span>
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

        <div className="guarantee-row">
          {[
            { t:'Secure Payment' },
            { t:'Instant Confirmation' },
            { t:'Replay Access' },
            { t:'1-Year Community' },
          ].map(g => (
            <div key={g.t} className="g-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{g.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
