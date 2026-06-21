import React from 'react';
import './WhyAttend.css';

const reasons = [
  {
    icon: '🔍',
    title: 'Explore Hidden Opportunities',
    desc: 'Discover 11+ career pathways most doctors never hear about during MBBS.',
  },
  {
    icon: '🎤',
    title: 'Learn From Real Experts',
    desc: 'Two experienced doctors share their real journeys — no theory, just practice.',
  },
  {
    icon: '💬',
    title: 'Ask Questions Directly',
    desc: 'Interactive pass holders get to ask live questions and get real answers.',
  },
  {
    icon: '🤝',
    title: 'Build Your Network',
    desc: 'Connect with peers, mentors, and professionals shaping healthcare\'s future.',
  },
  {
    icon: '🧭',
    title: 'Gain Career Clarity',
    desc: 'Walk away with a clear roadmap — not just inspiration, but actionable steps.',
  },
  {
    icon: '📜',
    title: 'Receive Your Certificate',
    desc: 'All participants receive an official certificate of participation from IMA.',
  },
];

export default function WhyAttend() {
  return (
    <section id="why-attend" className="section why-section">
      <div className="container">
        <p className="eyebrow">Why Join</p>
        <h2 className="display-xl">Why Doctors Are <span className="text-emerald">Joining</span></h2>
        <p className="sub">Six reasons this conclave is different from anything you've attended.</p>

        <div className="why-grid">
          {reasons.map(r => (
            <div key={r.title} className="why-card">
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
