import React, { useState, useEffect, useRef } from 'react';
import './Speakers.css';
import { X, ChevronRight, Award, Briefcase, Globe } from 'lucide-react';

/* ── Speaker data ── */
const speakers = [
  {
    id: 'joseph-benaven',
    name: 'Dr. Joseph Benaven',
    title: 'Senior Physician · Healthcare Leader · Medical Innovator',
    category: 'Healthcare Leadership',
    photo: '/images/speaker-joseph-benaven.png',
    badge: '30+ Years Experience',
    specializations: ['Internal Medicine', 'Healthcare Innovation', 'MedTech', 'Medical Entrepreneurship'],
    profile: [
      { icon: Award,    text: 'Former State President, IMA Kerala' },
      { icon: Award,    text: 'Former State Secretary, IMA Kerala' },
      { icon: Award,    text: 'Chairman, IMA Innovation Council' },
      { icon: Briefcase,text: 'Senior General / Internal Medicine Physician' },
      { icon: Globe,    text: 'Healthcare Innovation, MedTech & Medical Entrepreneurship' },
    ],
    bio: 'Dr. Joseph Benaven is one of Kerala\'s most respected physician-leaders with over 30 years of clinical experience in General and Internal Medicine. As a former State President and Secretary of IMA Kerala, he has played a defining role in shaping healthcare policy and medical community leadership in the state. As Chairman of the IMA Innovation Council, Dr. Benaven champions the intersection of clinical practice, healthcare technology, and entrepreneurship — offering rare insights into how doctors can build impactful careers beyond traditional clinical settings.',
  },
  {
    id: 'ss-lal',
    name: 'Dr. S. S. Lal',
    title: 'International Public Health Expert · Epidemiologist · Former WHO Technical Officer',
    category: 'Global Public Health',
    photo: '/images/speaker-ss-lal.jpg',
    badge: 'Global Health Expert',
    specializations: ['Public Health', 'Epidemiology', 'Tuberculosis & Communicable Diseases', 'Health Policy'],
    profile: [
      { icon: Globe,    text: 'Former Medical Officer / Technical Officer — World Health Organization (WHO)' },
      { icon: Award,    text: 'Senior Technical Advisor — Global Fund (AIDS, TB & Malaria)' },
      { icon: Briefcase,text: 'Director / Lead — PATH / FHI 360' },
      { icon: Briefcase,text: 'Public Health Commentator & Health Education Broadcaster' },
    ],
    bio: 'Dr. Shanavas Lal (Dr. S. S. Lal) is an internationally recognised public health expert with deep expertise in Epidemiology, Tuberculosis, Communicable Diseases, Tropical Medicine, and Health Policy. His distinguished career spans senior roles at the World Health Organization (WHO), the Global Fund to Fight AIDS, Tuberculosis and Malaria, PATH, and FHI 360 — bringing global health systems experience directly to young medical professionals seeking careers beyond clinical practice.',
  },
];

/* ── Modal component ── */
function SpeakerModal({ speaker, onClose }) {
  const overlayRef = useRef(null);

  /* Close on Escape */
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  /* Close on overlay click */
  const handleOverlayClick = e => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div className="spk-modal-overlay" ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="spk-modal">
        <button className="spk-modal-close" onClick={onClose} aria-label="Close">
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="spk-modal-inner">
          {/* Photo + identity */}
          <div className="spk-modal-header">
            <div className="spk-modal-photo-wrap">
              <img src={speaker.photo} alt={speaker.name} className="spk-modal-photo" />
            </div>
            <div className="spk-modal-identity">
              <span className="spk-modal-category">{speaker.category}</span>
              <h2 className="spk-modal-name">{speaker.name}</h2>
              <p className="spk-modal-title">{speaker.title}</p>
              {/* Specializations */}
              <div className="spk-modal-specs">
                {speaker.specializations.map(s => (
                  <span key={s} className="spk-spec-pill">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="spk-modal-bio">
            <p>{speaker.bio}</p>
          </div>

          {/* Key positions */}
          <div className="spk-modal-positions">
            <div className="spk-positions-label">Key Positions & Experience</div>
            <ul className="spk-positions-list">
              {speaker.profile.map((p, i) => (
                <li key={i} className="spk-position-item">
                  <p.icon size={15} strokeWidth={2} className="spk-pos-icon" />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Speaker card ── */
function SpeakerCard({ speaker, onView }) {
  return (
    <div className="spk-card">
      <div className="spk-photo-wrap">
        <img src={speaker.photo} alt={speaker.name} className="spk-photo" />
        <span className="spk-photo-badge">{speaker.badge}</span>
      </div>
      <div className="spk-info">
        <span className="spk-category">{speaker.category}</span>
        <h3 className="spk-name">{speaker.name}</h3>
        <p className="spk-title">{speaker.title}</p>
        <div className="spk-specs">
          {speaker.specializations.slice(0, 2).map(s => (
            <span key={s} className="spk-spec-tag">{s}</span>
          ))}
        </div>
        <button className="spk-view-btn" onClick={() => onView(speaker)}>
          View Profile <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Speakers() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="speakers" className="section speakers-section">
      <div className="container">
        {/* Header */}
        <p className="eyebrow">Expert Faculty</p>
        <h2 className="display-xl">
          20+ Expert Speakers<br />
          <span className="text-emerald">Across Diverse Medical Career Pathways</span>
        </h2>
        <p className="sub">
          Learn from experienced physicians, healthcare leaders, public health experts,
          innovators and professionals across diverse medical career pathways.
        </p>

        {/* Confirmed speakers grid */}
        <div className="spk-grid">
          {speakers.map(s => (
            <SpeakerCard key={s.id} speaker={s} onView={setActiveModal} />
          ))}
        </div>

        {/* More speakers note */}
        <p className="speakers-note">
          More speaker announcements coming soon — stay tuned!
        </p>
      </div>

      {/* Modal */}
      {activeModal && (
        <SpeakerModal speaker={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
}
