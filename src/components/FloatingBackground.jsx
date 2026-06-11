import React from 'react';
import './FloatingBackground.css';

const SVGS = {
  syringe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2l4 4M15 3l-4 4M6 21L3 21 3 18 16 5 19 8 6 21z M10 7l7 7"/></svg>,
  stethoscope: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.34.12.72.18 1.16.18h4c2.21 0 4-1.79 4-4v-4h2c1.1 0 2 .9 2 2v2"/><circle cx="15" cy="15" r="3"/><path d="M6 3v4c0 2.21 1.79 4 4 4h4"/></svg>,
  medbox: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M12 11v6M9 14h6"/></svg>,
  pill: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.5 20.5l-6-6a4.95 4.95 0 1 1 7-7l6 6a4.95 4.95 0 1 1-7 7z"/><path d="M8.5 8.5l7 7"/></svg>,
  cross: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v16M4 12h16"/></svg>
};

const items = [
  { icon: 'syringe', x: 5, y: 15, s: 0.8, d: 0 },
  { icon: 'stethoscope', x: 85, y: 10, s: 1.2, d: 2 },
  { icon: 'medbox', x: 15, y: 45, s: 1, d: 1 },
  { icon: 'pill', x: 90, y: 40, s: 0.6, d: 3 },
  { icon: 'cross', x: 10, y: 75, s: 0.9, d: 4 },
  { icon: 'syringe', x: 80, y: 70, s: 0.7, d: 1.5 },
  { icon: 'medbox', x: 50, y: 85, s: 1.1, d: 2.5 },
  { icon: 'pill', x: 30, y: 25, s: 0.8, d: 0.5 },
  { icon: 'stethoscope', x: 70, y: 95, s: 1, d: 3.5 },
  { icon: 'cross', x: 40, y: 55, s: 0.5, d: 2 }
];

export default function FloatingBackground() {
  return (
    <div className="floating-bg-container">
      {items.map((it, idx) => (
        <div 
          key={idx} 
          className="float-item"
          style={{
            left: `${it.x}%`,
            top: `${it.y}%`,
            transform: `scale(${it.s})`,
            animationDelay: `${it.d}s`
          }}
        >
          {SVGS[it.icon]}
        </div>
      ))}
    </div>
  );
}
