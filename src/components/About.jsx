import React from 'react';
import './About.css';

const stats = [
  { num: '3',   label: 'Days of Learning'      },
  { num: '10+', label: 'Expert Speakers'        },
  { num: '9h',  label: 'Live Sessions'          },
  { num: '∞',   label: 'Career Possibilities'   },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-intro">
          <p className="eyebrow">Who We Are</p>
          <h2 className="display-xl">Vision &amp; <em className="text-emerald" style={{fontStyle:'normal'}}>Mission</em></h2>
          <p className="sub">
            Empowering the next generation of medical professionals to chart their unique paths.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card float-1">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z"/>
              </svg>
            </div>
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To be the premier platform that illuminates the vast spectrum of career possibilities
              for medical graduates &mdash; beyond the conventional paths &mdash; fostering a generation of
              doctors who are innovators, leaders, and global citizens.
            </p>
            <ul className="card-bullets">
              <li>Global medical career awareness</li>
              <li>Innovative healthcare leadership</li>
              <li>Community of empowered doctors</li>
            </ul>
          </div>

          <div className="about-card float-2">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To connect MBBS graduates with world-class experts, real-world experiences, and
              actionable guidance &mdash; equipping them with the knowledge, network, and confidence to
              pursue extraordinary careers in medicine and beyond.
            </p>
            <ul className="card-bullets">
              <li>Expert-led mentorship &amp; insights</li>
              <li>Actionable career roadmaps</li>
              <li>Lifelong professional network</li>
            </ul>
          </div>
        </div>

        <div className="stats-row">
          {stats.map(s => (
            <div key={s.label} className="stat-item float-1">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
