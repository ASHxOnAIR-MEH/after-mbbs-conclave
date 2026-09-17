import React, { useState, useEffect, useRef } from 'react';
import './Speakers.css';
import { X, ChevronRight, Award, Briefcase, Globe, GraduationCap, User } from 'lucide-react';

/* ── Speaker data ── */
const speakers = [
  {
    id: 'e-sreekumar',
    name: 'Dr. E. Sreekumar, MVSc., PhD',
    alt: 'Dr. E. Sreekumar, MVSc., PhD – Director, Institute of Advanced Virology (IAV), Thonnakkal, Thiruvananthapuram',
    title: 'Director, Institute of Advanced Virology (IAV), Thonnakkal, Thiruvananthapuram',
    category: 'Molecular Virology',
    photo: '/images/speaker-e-sreekumar.jpg',
    badge: 'Director, IAV',
    specializations: [
      'Molecular Virology',
      'Emerging Viral Infections',
      'Antiviral Research',
      'Vaccine Research',
      'Dengue & Chikungunya',
    ],
    profile: [
      { icon: Award,    text: 'Director — Institute of Advanced Virology (IAV), Thonnakkal, Thiruvananthapuram' },
      { icon: Briefcase,text: 'Former Faculty Scientist & Head of Molecular Virology Laboratory — Rajiv Gandhi Centre for Biotechnology (RGCB)' },
      { icon: Award,    text: 'Fulbright-Nehru (FNAPE) Fellow & Visiting Faculty — Johns Hopkins Bloomberg School of Public Health, USA' },
      { icon: Globe,    text: 'Member — State Expert Group on COVID-19, Kerala' },
      { icon: Award,    text: 'Master’s in Immunology (IVRI Gold Medalist) & PhD in Biotechnology (RGCB)' },
    ],
    bio: [
      'Dr. Sreekumar is currently the Director of the Institute of Advanced Virology, Thiruvananthapuram.',
      'He holds a Master’s degree in Immunology from the Indian Veterinary Research Institute (IVRI) with a gold medal and a PhD in Biotechnology from Rajiv Gandhi Centre for Biotechnology (RGCB).',
      'He started his career as a Veterinary Surgeon in the Department of Animal Husbandry, Government of Kerala. Later, he joined RGCB as a faculty scientist in 2004.',
      'The molecular virology laboratory headed by him played a key role in initiating molecular diagnostic services in Kerala during the explosive viral epidemics in 2016.',
      'Research conducted by his laboratory over the last 18 years identified mutant strains of dengue and chikungunya viruses, trans-ovarian transmission of chikungunya virus in mosquitoes, multiple serotype co-infections in dengue patients, and a vaccine strain for Chikungunya virus.',
      'He established virological assays and animal models to test antiviral compounds and vaccines against chikungunya and dengue.',
      'He received the Fulbright-Nehru Professional and Academic Excellence (FNAPE) Fellowship in 2015 and worked as a visiting faculty during 2015–2016 at the Johns Hopkins Bloomberg School of Public Health, Baltimore, USA, where he elucidated virulence-associated mutations in chikungunya virus.',
      'He has mentored ten PhD students and more than fifty Master’s students, completed 12 externally funded projects, and authored and published more than 50 manuscripts in journals of repute.',
      'He is a regular speaker at conferences and radio talks and appears in visual media for creating awareness about emerging viral infections.',
      'He served on various committees, including the state expert group on COVID-19.',
      'He currently focuses on developing the Institute of Advanced Virology into an international institute of repute and on research to identify broad-spectrum antivirals against emerging viruses using host-targeted approaches, a new paradigm in antiviral therapy.',
    ],
  },
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
  {
    id: 'binny-krishnankutty',
    name: 'Dr. Binny Krishnankutty',
    qualification: 'MBBS, MD Pharmacology',
    alt: 'Dr. Binny Krishnankutty, MBBS, MD Pharmacology – Director, Aggregate Reports Team Lead, Pfizer Healthcare India Pvt Ltd',
    title: 'Director, Aggregate Reports Team Lead · Pfizer Healthcare India Pvt Ltd',
    category: 'Pharmacovigilance',
    photo: '/images/speaker-binny-krishnankutty.jpg',
    badge: 'Director, Pfizer',
    specializations: [
      'Pharmacovigilance',
      'Clinical Development',
      'Clinical Trials',
      'Regulatory Strategy',
    ],
    cardSpecs: [
      'Pharmacovigilance',
      'Clinical Development',
      'Clinical Trials',
      'Regulatory Strategy',
    ],
    profile: [
      { icon: Award,         text: 'Director, Aggregate Reports Team Lead — Pfizer Healthcare India Pvt Ltd' },
      { icon: Briefcase,     text: 'Former Clinical Operations & Clinical Quality Lead (Global Medical Affairs) — Dr. Reddy’s Laboratories Ltd.' },
      { icon: Briefcase,     text: 'Former Global Clinical Development of Biosimilars Lead — USV Ltd.' },
      { icon: GraduationCap, text: 'MBBS & MD Pharmacology — University of Kerala' },
      { icon: Globe,         text: '20+ Years Professional Experience in Pharmacovigilance, Clinical Trials & Regulatory Strategy' },
      { icon: Award,         text: 'Nearly 20 Research Publications in National & International Journals' },
    ],
    bio: [
      'Dr. Binny Krishnankutty is Director, Aggregate Reports Team Lead at Pfizer Healthcare India Pvt Ltd. In his current role, he provides strategic direction and oversight for processes, colleagues, and vendors responsible for preparing safety data documents supporting product development, license applications, and post-marketing maintenance.',
      'His work includes integrated analyses of safety data supporting aggregate reports and responses to regulatory queries on safety topics.',
      'Dr. Binny Krishnankutty is a senior pharmaceutical and clinical development professional with over two decades of experience spanning pharmacovigilance, clinical development, clinical operations, data management, biometrics, clinical trials, regulatory strategy, and medical writing.',
      'Previously, at Dr. Reddy’s Laboratories Ltd., he managed clinical operations and clinical quality within Global Medical Affairs, led data management, biostatistics, and medical writing functions, and oversaw Phase II/III clinical trials across various therapeutic areas.',
      'At USV Ltd., he led global clinical development of biosimilars, coordinated with global CROs for clinical trials, developed regulatory strategies, and provided technical support for bioanalytical activities.',
      'He completed his MBBS and MD in Pharmacology from the University of Kerala, and has published nearly 20 research papers in national and international journals, including publications related to data management and clinical trials.',
    ],
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
              {speaker.photo ? (
                <img src={speaker.photo} alt={speaker.alt || speaker.name} className="spk-modal-photo" />
              ) : (
                <div className="spk-photo-placeholder spk-modal-photo-placeholder" aria-label={`${speaker.name} — photo coming soon`}>
                  <div className="spk-placeholder-avatar">
                    <User size={52} strokeWidth={1.5} className="spk-placeholder-icon" />
                  </div>
                  <span className="spk-placeholder-text">PHOTO COMING SOON</span>
                </div>
              )}
            </div>
            <div className="spk-modal-identity">
              <span className="spk-modal-category">{speaker.category}</span>
              <h2 className="spk-modal-name">{speaker.name}</h2>
              {speaker.qualification && (
                <div className="spk-modal-qualification">{speaker.qualification}</div>
              )}
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
            {Array.isArray(speaker.bio) ? (
              speaker.bio.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))
            ) : (
              <p>{speaker.bio}</p>
            )}
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
        {speaker.photo ? (
          <img src={speaker.photo} alt={speaker.alt || speaker.name} className="spk-photo" />
        ) : (
          <div className="spk-photo-placeholder" aria-label={`${speaker.name} — photo coming soon`}>
            <div className="spk-placeholder-avatar">
              <User size={44} strokeWidth={1.5} className="spk-placeholder-icon" />
            </div>
            <span className="spk-placeholder-text">PHOTO COMING SOON</span>
          </div>
        )}
        {speaker.badge && <span className="spk-photo-badge">{speaker.badge}</span>}
      </div>
      <div className="spk-info">
        <span className="spk-category">{speaker.category}</span>
        <h3 className="spk-name">{speaker.name}</h3>
        {speaker.qualification && (
          <div className="spk-qualification">{speaker.qualification}</div>
        )}
        <p className="spk-title">{speaker.title}</p>
        <div className="spk-specs">
          {(speaker.cardSpecs || speaker.specializations.slice(0, 2)).map(s => (
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
