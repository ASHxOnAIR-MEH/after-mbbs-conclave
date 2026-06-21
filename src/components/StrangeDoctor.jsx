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
            <img src="/images/dr-strange-new.jpg" alt="Strange Doctor" className="strange-img float-1" />
          </div>
        </div>
        
        <div className="extra-images-grid mt-40">
           <img src="/images/doctor.jpg" alt="Doctor" className="extra-img" />
        </div>
      </div>
    </section>
  );
}
