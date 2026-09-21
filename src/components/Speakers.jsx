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
  {
    id: 'jayan-k',
    name: 'Mr. Jayan K',
    alt: 'Mr. Jayan K – Vice Chairman and CEO, Cutis International · Founder, Optam',
    title: 'Vice Chairman & CEO · Cutis International | Founder · Optam',
    category: 'Healthcare Entrepreneurship',
    photo: '/images/speaker-jayan-k.png',
    badge: 'Vice Chairman & CEO',
    specializations: [
      'Healthcare Entrepreneurship',
      'Hospital & Clinic Operations',
      'GCC & India Healthcare Scaling',
      'Mergers, Acquisitions & Turnarounds',
    ],
    cardSpecs: [
      'Healthcare Entrepreneurship',
      'Hospital & Clinic Operations',
      'GCC & India Healthcare Scaling',
      'Mergers, Acquisitions & Turnarounds',
    ],
    profile: [
      { icon: Award,    text: 'Vice Chairman and CEO — Cutis International' },
      { icon: Briefcase,text: 'Founder — Optam Diagnostic Chain (30+ Centers across South Kerala)' },
      { icon: Globe,    text: 'Former Senior Leadership & C-Suite — Aster DM Healthcare, Starcare Group, Abeer Medical Group, Right Health & Life Pharmacy' },
      { icon: Award,    text: 'Established Dozens of Hospitals & 150+ Clinics, Pharmacies and Diagnostic Centers across GCC & India' },
      { icon: Briefcase,text: '20+ Years Experience in Healthcare Startups, Private Equity Ventures & Greenfield Projects' },
    ],
    bio: [
      'Jayan K is a healthcare entrepreneur, operator, and growth strategist with over 20 years of experience building and scaling healthcare businesses across the GCC and India.',
      'He has established dozens of hospitals and more than 150 clinics, pharmacies, and diagnostic centers across the UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain, and India. His experience spans healthcare startups, private equity backed ventures, family owned businesses, and some of the region\'s leading healthcare brands.',
      'Most healthcare businesses do not struggle because of clinical excellence. They struggle because their operating model was never built to scale. His expertise lies in creating scalable healthcare enterprises through strong operational frameworks, governance, growth strategies, and execution excellence.',
      'Throughout his career, he has held senior leadership and C-suite positions with organizations including Aster DM Healthcare, Starcare Group of Hospitals, Abeer Medical Group, Right Health, and Life Pharmacy Healthcare.',
      'He has led greenfield healthcare projects, market expansion initiatives, business turnarounds, mergers and acquisitions, and large scale healthcare network development, consistently delivering growth in profitability, operational performance, brand value, and enterprise valuation.',
      'Today, he serves as Vice Chairman and CEO of Cutis International and Founder of Optam, one of South Kerala\'s fastest-growing diagnostic chains with over 30 centers. His focus remains on building sustainable healthcare ecosystems that combine operational excellence, patient trust, and long-term value creation.',
      'He works closely with healthcare founders, investors, CEOs, and family owned businesses on business scaling, GCC and India market entry, healthcare project development, asset turnarounds, M&A, investor readiness, corporate governance, and operational excellence.',
    ],
  },
  /* ── NEW SPEAKERS ── */
  {
    id: 'aksha-parwani',
    name: 'Aksha Parwani',
    alt: 'Aksha Parwani — AU Education & Migration Consultants Australia',
    title: 'AU Education & Migration Consultants (Australia)',
    category: 'Australian Medical Pathways',
    photo: '/images/speaker-aksha-parwani.jpg',
    badge: 'Australia Expert',
    specializations: [
      'Australian Medical Pathways',
      'AHPRA / AMC',
      'Migration Strategy',
      'International Education',
      'Strategic PR & Brand Media',
      'Institutional Liaising',
    ],
    cardSpecs: [
      'Australian Medical Pathways',
      'AHPRA / AMC',
      'Migration Strategy',
      'International Education',
    ],
    profile: [
      { icon: Award,        text: 'Co-Founder, Krome Studios' },
      { icon: Briefcase,    text: 'AU Education & Migration Consultants (Australia) — 21+ Years Multi-Functional Expertise' },
      { icon: Globe,        text: 'AHPRA / AMC Pathway Consultation & PR Skilled Migration Strategies' },
      { icon: GraduationCap,text: 'Master of Business Administration (MBA)' },
      { icon: GraduationCap,text: 'Master of Commerce (M.Com)' },
      { icon: GraduationCap,text: 'Post Graduate Diploma in Securities Law' },
      { icon: GraduationCap,text: 'Certified Esthetician — Christine Valmy' },
    ],
    bio: [
      'Aksha Parwani is a result-oriented professional with over 21 years of multi-functional expertise across International Education, Strategic Migration and Media Relations.',
      'An MBA and M.Com professional with expertise in Public Relations strategy, institutional frameworks for global expansion, Securities Law and the Australian regulatory landscape.',
      'Her key areas of expertise include Strategic PR & Brand Media, AHPRA / AMC Pathway Consultation, PR & Skilled Migration Strategies, Institutional Liaising, International Education, and Media & Communication.',
      'She is Co-Founder of Krome Studios and brings deep practical knowledge of the pathways available to international medical graduates seeking to practice in Australia.',
    ],
  },
  {
    id: 'pankaj-chhatrala',
    name: 'Dr. Pankaj Chhatrala',
    alt: 'Dr. Pankaj Chhatrala — CEO, OrthoHeal',
    title: 'CEO, OrthoHeal · MedTech Entrepreneur · Inventor — FlexiOH',
    category: 'MedTech Entrepreneurship',
    photo: '/images/speaker-pankaj-chhatrala.jpg',
    badge: 'CEO, OrthoHeal',
    specializations: [
      'MedTech Entrepreneurship',
      'Orthopedic Innovation',
      'Regulatory Pathways',
      'Global Healthcare',
    ],
    cardSpecs: [
      'MedTech Entrepreneurship',
      'Orthopedic Innovation',
      'Regulatory Pathways',
      'Global Healthcare',
    ],
    profile: [
      { icon: Award,    text: 'CEO — OrthoHeal' },
      { icon: Award,    text: 'Inventor — FlexiOH (Washable Orthopedic Immobilizer)' },
      { icon: Globe,    text: 'Regulatory Clearances: FDA · EU MDR · AU TGA' },
      { icon: Briefcase,text: 'Scaling from India to 50+ Countries' },
      { icon: GraduationCap, text: 'MBBS to IIT to MedTech Entrepreneur' },
    ],
    bio: [
      'Dr. Pankaj Chhatrala\'s journey — from MBBS to IIT to MedTech Entrepreneur — is a compelling story of how medical doctors can drive transformative innovation beyond clinical practice.',
      'As CEO of OrthoHeal, he invented FlexiOH, a washable orthopedic immobilizer that has earned regulatory clearances across FDA, EU MDR, and AU TGA frameworks, and is being scaled from India to 50+ countries.',
      'He brings rare firsthand insight into MedTech entrepreneurship, orthopedic device innovation, regulatory strategy, and global healthcare market entry — offering medical students a practical roadmap for building impactful ventures at the intersection of medicine and technology.',
    ],
  },
  {
    id: 'sreekanth-pj',
    name: 'Sreekanth P. J.',
    alt: 'Sreekanth P. J. — Managing Director, Medisol Placements Private Limited',
    title: 'Managing Director · Medisol Placements Private Limited',
    category: 'International Healthcare Recruitment',
    photo: '/images/speaker-sreekanth-pj.jpg',
    badge: 'MD, Medisol',
    specializations: [
      'International Healthcare Recruitment',
      'Healthcare Licensing',
      'GCC Careers',
      'Business Leadership',
    ],
    cardSpecs: [
      'International Healthcare Recruitment',
      'Healthcare Licensing',
      'GCC Careers',
      'Business Leadership',
    ],
    profile: [
      { icon: Award,        text: 'Managing Director — Medisol Placements Private Limited (since 2018)' },
      { icon: Award,        text: 'Managing Partner — Medisol Healthcare (since 2012)' },
      { icon: Globe,        text: 'Ministry of External Affairs (Govt. of India) Approved Overseas Consultancy' },
      { icon: Briefcase,    text: 'Healthcare Recruitment: UAE · Saudi Arabia · Qatar · Kuwait · Oman · Bahrain · GCC' },
      { icon: Briefcase,    text: 'Healthcare Licensing: DataFlow · Prometric · CORU · HCPC · NMC' },
      { icon: Award,        text: 'Thomas Edison Award for Excellence in Research (2014)' },
      { icon: GraduationCap,text: 'MBA (Finance & Marketing) · M.Sc. Chemistry · B.Sc. Chemistry — University of Kerala' },
      { icon: Briefcase,    text: 'Former Researcher — SCTIMST, Thiruvananthapuram (Biomaterials, Nanotechnology, Drug Delivery)' },
    ],
    bio: [
      'Sreekanth P. J. is a dynamic healthcare business leader with more than two decades of professional experience spanning scientific research, international healthcare recruitment, healthcare licensing, business development and strategic leadership.',
      'He has served as Managing Director of Medisol Placements Private Limited since 2018 and as Managing Partner of Medisol Healthcare since 2012. Medisol Placements is a Ministry of External Affairs (Government of India) Approved Overseas Consultancy.',
      'Under his leadership, Medisol\'s 18-member professional team facilitates healthcare recruitment across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain and other GCC countries.',
      'His healthcare licensing and credentialing expertise covers DataFlow, Prometric, CORU, HCPC, NMC, and documentation support for professional registration in multiple jurisdictions.',
      'Before building Medisol, Sreekanth was a researcher at Sree Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST), Thiruvananthapuram, working in the areas of Biomaterials, Bioceramics, Nanotechnology, Toxicology, Polymer Science, Calcium Phosphate Bone Cements, Drug Delivery Systems, Glucose Biosensors and Advanced Medical Materials.',
      'His academic foundation includes an MBA in Finance & Marketing, an M.Sc. in Chemistry, and a B.Sc. in Chemistry — all from the University of Kerala. He is a recipient of the Thomas Edison Award for Excellence in Research (2014).',
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
