import React from 'react';
import './WhyAttend.css';
import {
  Search, Mic, MessageSquare, Handshake, Compass, Gift
} from 'lucide-react';

const reasons = [
  {
    Icon: Search,
    title: 'Explore Hidden Opportunities',
    desc: 'Discover 11+ career pathways most doctors never hear about during MBBS.',
  },
  {
    Icon: Mic,
    title: 'Learn From Real Experts',
    desc: '20+ experienced doctors share their real journeys — no theory, just practice.',
  },
  {
    Icon: MessageSquare,
    title: 'Ask Questions Directly',
    desc: 'Interactive pass holders get to ask live questions and get real answers.',
  },
  {
    Icon: Handshake,
    title: 'Build Your Network',
    desc: 'Connect with peers, mentors, and professionals shaping healthcare\'s future.',
  },
  {
    Icon: Compass,
    title: 'Gain Career Clarity',
    desc: 'Walk away with a clear roadmap — not just inspiration, but actionable steps.',
  },
  {
    Icon: Gift,
    title: 'Surprise Goodies & Gifts',
    desc: 'All participants will receive surprise goodies and gifts as a token of appreciation.',
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
          {reasons.map(({ Icon, title, desc }) => (
            <div key={title} className="why-card">
              <div className="why-icon"><Icon size={28} strokeWidth={2} /></div>
              <h3 className="why-title">{title}</h3>
              <p className="why-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
