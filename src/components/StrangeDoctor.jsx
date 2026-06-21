import React from 'react';
import './StrangeDoctor.css';

export default function StrangeDoctor() {
  return (
    <section className="section strange-section">
      <div className="container">
        <div className="strange-content">
          <div className="strange-text">
            <h2 className="display-xl">How to become a <span className="text-emerald">Strange Doctor?</span></h2>
            <p className="sub" style={{textAlign: 'left', marginLeft: '0'}}>
              Step out of the ordinary. Break the mold of traditional medical careers and explore the multi-dimensional pathways available to modern physicians. 
              Whether it's mastering new technology, entrepreneurship, or crossing borders, you have the power to define your own unique journey.
            </p>
          </div>
          <div className="strange-images">
            <img src="/images/beyond-mbbs.png" alt="Beyond MBBS Career Banner" className="strange-img float-1" style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
