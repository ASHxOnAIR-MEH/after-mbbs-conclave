import React, { useState } from 'react';
import './FAQ.css';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Who can attend this conclave?',
    a: 'MBBS students, medical interns, house surgeons, young doctors, and PG aspirants are all welcome. Whether you\'re in your first year or preparing for PG entrance, you\'ll find valuable insights.',
  },
  {
    q: 'Are there any special benefits?',
    a: 'Yes! All registered participants will receive Surprise Goodies & Gifts.',
  },
  {
    q: 'How do I access the Zoom sessions?',
    a: 'After registration, you\'ll receive a confirmation email with the Zoom meeting link, ID, and passcode. Join from any device — laptop, tablet, or phone.',
  },
  {
    q: 'Can medical interns attend?',
    a: 'Absolutely. This conclave is specifically designed for students and early-career doctors who want clarity about career options beyond conventional paths.',
  },
  {
    q: 'Is recording available if I miss a session?',
    a: 'Yes. All registered participants get access to recorded replays of every session, so you can revisit the content at your own pace.',
  },
  {
    q: 'What\'s the difference between Viewer and Interactive passes?',
    a: 'The Viewer Pass gives you full webinar access and recordings. The Interactive Pass additionally lets you ask questions live, interact directly with speakers, and access networking opportunities.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <ChevronDown 
          className={`faq-chevron ${open ? 'faq-chevron-open' : ''}`} 
          size={20} 
          strokeWidth={2} 
        />
      </div>
      <div className={`faq-answer ${open ? 'faq-answer-open' : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <p className="eyebrow">Common Questions</p>
        <h2 className="display-xl">Frequently <span className="text-emerald">Asked</span></h2>
        <div className="faq-list">
          {faqs.map(f => <FAQItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}
