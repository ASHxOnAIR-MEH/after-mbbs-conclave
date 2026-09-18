import React, { useState } from 'react';
import './RegistrationPage.css';
import { validateReferralCode, normalizeReferralCode } from '../referralDatabase';
import { buildPrefilledGoogleFormUrl, registrationForms } from '../registrationConfig';
import { 
  ArrowRight, Tag, Star, Eye, Zap, CheckCircle2, 
  AlertCircle, Lock, ShieldCheck, User, Phone, 
  Mail, School, Calendar, MapPin, X 
} from 'lucide-react';

/* ── Standard Passes Data ── */
const standardPasses = [
  {
    id: '249',
    passKey: 249,
    icon: Eye,
    title: 'Viewer Pass',
    price: '₹249',
    originalPrice: '₹399',
    badge: 'STANDARD PASS',
    badgeGold: false,
    description: 'Access the full conclave experience, expert sessions, career discussions and learning resources.',
    ctaLabel: 'Register Now',
    featured: false,
  },
  {
    id: '499',
    passKey: 499,
    icon: Zap,
    title: 'Interactive Pass',
    price: '₹499',
    originalPrice: '₹699',
    badge: 'MOST POPULAR',
    badgeGold: false,
    description: 'Get the enhanced interactive experience with additional engagement, live Q&A and networking opportunities.',
    ctaLabel: 'Register Now',
    featured: true,
  },
];

/* ── Referral Passes Data ── */
const referralPasses = [
  {
    id: '229',
    passKey: 229,
    icon: Tag,
    title: 'Viewer Pass',
    titleSub: 'with Referral Discount',
    price: '₹229',
    originalPrice: '₹399',
    badge: 'EXCLUSIVE REFERRAL PRICE',
    badgeGold: true,
    description: 'Exclusive 10% referral discount applied on Viewer Pass via your official IMA Parippally Student Team code.',
    ctaLabel: 'Register with Referral',
    featured: false,
  },
  {
    id: '449',
    passKey: 449,
    icon: Zap,
    title: 'Interactive Pass',
    titleSub: 'with Referral Discount',
    price: '₹449',
    originalPrice: '₹699',
    badge: 'POPULAR REFERRAL PASS',
    badgeGold: true,
    description: 'Exclusive 10% referral discount applied on Interactive Pass via your official IMA Parippally Student Team code.',
    ctaLabel: 'Register with Referral',
    featured: true,
  },
];

/* ── Participant Information Modal ── */
function ParticipantModal({ pass, referralData, onClose }) {
  const formConfig = registrationForms[pass];

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    medicalCollege: referralData?.college || '',
    year: '',
    district: '',
    state: 'Kerala',
  });

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required fields check
    if (
      !formData.fullName.trim() ||
      !formData.mobile.trim() ||
      !formData.email.trim() ||
      !formData.medicalCollege.trim() ||
      !formData.year.trim() ||
      !formData.district.trim() ||
      !formData.state.trim()
    ) {
      setFormError('Please complete all required registration details before continuing.');
      return;
    }

    // Basic mobile validation (at least 10 digits)
    const cleanPhone = formData.mobile.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile / WhatsApp number.');
      return;
    }

    // Basic email validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Please enter a valid email address.');
      return;
    }

    try {
      setIsSubmitting(true);
      const prefilledUrl = buildPrefilledGoogleFormUrl(pass, formData, referralData);
      // Redirect to prefilled Google Form
      window.location.href = prefilledUrl;
    } catch (err) {
      console.error('Prefill generation error:', err);
      setFormError('Unable to generate prefilled form URL. Please try again or contact support.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reg-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="reg-modal-card" onClick={e => e.stopPropagation()}>
        <button className="reg-modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={18} strokeWidth={2.5} />
        </button>

        <div className="reg-modal-header">
          <span className="reg-modal-pill">
            {formConfig?.passName || `₹${pass} Registration`}
          </span>
          <h2 className="reg-modal-title">Participant Information</h2>
          <p className="reg-modal-sub">
            Fill in your details below. You will be redirected to the secure Google Form with your information prefilled.
          </p>
        </div>

        {referralData && (
          <div className="reg-modal-rep-badge">
            <ShieldCheck size={16} className="text-emerald" />
            <div className="reg-rep-badge-text">
              <span><strong>Referral:</strong> {referralData.code} ({referralData.name})</span>
              <span className="reg-rep-college">{referralData.college}</span>
            </div>
          </div>
        )}

        {formError && (
          <div className="reg-form-error" role="alert">
            <AlertCircle size={16} />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="reg-form-body">
          {/* Full Name */}
          <div className="reg-input-group">
            <label htmlFor="reg-name">
              <User size={14} /> Full Name <span className="req">*</span>
            </label>
            <input
              id="reg-name"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Dr. Jane Doe / Jane Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* WhatsApp / Mobile & Email in 2-cols */}
          <div className="reg-input-row">
            <div className="reg-input-group">
              <label htmlFor="reg-mobile">
                <Phone size={14} /> WhatsApp / Mobile <span className="req">*</span>
              </label>
              <input
                id="reg-mobile"
                name="mobile"
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="reg-input-group">
              <label htmlFor="reg-email">
                <Mail size={14} /> Email Address <span className="req">*</span>
              </label>
              <input
                id="reg-email"
                name="email"
                type="email"
                required
                placeholder="e.g. doctor@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Medical College */}
          <div className="reg-input-group">
            <label htmlFor="reg-college">
              <School size={14} /> Medical College / Institution <span className="req">*</span>
            </label>
            <input
              id="reg-college"
              name="medicalCollege"
              type="text"
              required
              placeholder="e.g. Government Medical College, Kollam"
              value={formData.medicalCollege}
              onChange={handleChange}
            />
          </div>

          {/* Year & District in 2-cols */}
          <div className="reg-input-row">
            <div className="reg-input-group">
              <label htmlFor="reg-year">
                <Calendar size={14} /> MBBS Year / Stage <span className="req">*</span>
              </label>
              <select
                id="reg-year"
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year / Stage</option>
                <option value="1st Year MBBS">1st Year MBBS</option>
                <option value="2nd Year MBBS">2nd Year MBBS</option>
                <option value="3rd Year MBBS">3rd Year MBBS</option>
                <option value="4th Year MBBS">4th Year MBBS</option>
                <option value="Intern">Intern / CRRI</option>
                <option value="Post-MBBS Doctor">Post-MBBS Doctor</option>
                <option value="PG Resident">PG Resident</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="reg-input-group">
              <label htmlFor="reg-district">
                <MapPin size={14} /> District <span className="req">*</span>
              </label>
              <input
                id="reg-district"
                name="district"
                type="text"
                required
                placeholder="e.g. Ernakulam / Kollam"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* State */}
          <div className="reg-input-group">
            <label htmlFor="reg-state">
              <MapPin size={14} /> State <span className="req">*</span>
            </label>
            <input
              id="reg-state"
              name="state"
              type="text"
              required
              placeholder="e.g. Kerala"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className="reg-form-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Opening Google Form...' : 'Proceed to Google Form'}
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Main Registration Page ── */
export default function RegistrationPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('standard'); // 'standard' | 'referral'

  // Referral verification state
  const [referralInput, setReferralInput] = useState('');
  const [validatedRep, setValidatedRep] = useState(null);
  const [referralError, setReferralError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // Selected pass for modal
  const [selectedPass, setSelectedPass] = useState(null);

  const handleVerifyReferral = (e) => {
    e?.preventDefault();
    setReferralError('');
    setIsVerifying(true);

    const result = validateReferralCode(referralInput);

    if (result.valid) {
      setValidatedRep(result.rep);
      setReferralError('');
    } else {
      setValidatedRep(null);
      setReferralError(result.error);
    }
    setIsVerifying(false);
  };

  const handleSelectPass = (passKey) => {
    setSelectedPass(passKey);
  };

  return (
    <div className="reg-page">
      <div className="container">

        {/* Back link */}
        <button className="reg-back-btn" onClick={() => setCurrentPage('home')}>
          ← Back to website
        </button>

        {/* Header */}
        <div className="reg-page-header">
          <p className="eyebrow">Conclave Passes</p>
          <h1 className="reg-page-title">Choose Your Registration Type</h1>
          <p className="reg-page-sub">
            Join medical students and young doctors across India for Kerala’s premier hybrid medical career conclave.
          </p>
        </div>

        {/* Registration Mode Selector */}
        <div className="reg-type-nav" role="tablist" aria-label="Registration Types">
          <button
            className={`reg-type-tab ${activeTab === 'standard' ? 'reg-type-tab-active' : ''}`}
            onClick={() => setActiveTab('standard')}
            role="tab"
            aria-selected={activeTab === 'standard'}
          >
            Standard Registration
            <span className="reg-tab-badge">Public</span>
          </button>
          <button
            className={`reg-type-tab ${activeTab === 'referral' ? 'reg-type-tab-active-gold' : ''}`}
            onClick={() => setActiveTab('referral')}
            role="tab"
            aria-selected={activeTab === 'referral'}
          >
            <Tag size={14} />
            Referral Registration
            <span className="reg-tab-badge-gold">10% OFF</span>
          </button>
        </div>

        {/* ════════════════════════════════════
            STANDARD REGISTRATION TAB
           ════════════════════════════════════ */}
        {activeTab === 'standard' && (
          <div className="reg-flow-section">
            <div className="reg-flow-intro">
              <span className="reg-flow-tag">Public Registration</span>
              <p>No referral code required. Select your preferred pass below to continue.</p>
            </div>

            <div className="reg-grid">
              {standardPasses.map(card => {
                const { id, passKey, icon: Icon, title, badge, originalPrice, price, description, ctaLabel, featured } = card;
                return (
                  <div key={id} className={`reg-card ${featured ? 'reg-card-featured' : ''}`}>
                    {badge && (
                      <div className="reg-badge reg-badge-green">
                        <Star size={10} strokeWidth={2.5} />
                        {badge}
                      </div>
                    )}

                    <div className="reg-icon-wrap reg-icon-green">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <div className="reg-title-block">
                      <h3 className="reg-card-title">{title}</h3>
                    </div>

                    <div className="reg-pricing">
                      <span className="reg-original">{originalPrice}</span>
                      <div className="reg-eb-row">
                        <span className="reg-eb-label">Early Bird</span>
                        <span className="reg-price">{price}</span>
                      </div>
                    </div>

                    <p className="reg-desc">{description}</p>

                    <button
                      className={`reg-cta-btn ${featured ? 'reg-cta-primary' : 'reg-cta-secondary'}`}
                      onClick={() => handleSelectPass(passKey)}
                    >
                      {ctaLabel}
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════
            REFERRAL REGISTRATION TAB
           ════════════════════════════════════ */}
        {activeTab === 'referral' && (
          <div className="reg-flow-section">
            {/* Referral Code Verification Card */}
            <div className="reg-referral-verifier-card">
              <div className="reg-verifier-header">
                <span className="reg-verifier-step">STEP 1</span>
                <h3 className="reg-verifier-title">Enter Your Official Referral Code</h3>
                <p className="reg-verifier-desc">
                  Enter the referral code provided by your IMA Parippally Student Team representative to unlock exclusive ₹229 and ₹449 passes.
                </p>
              </div>

              <form onSubmit={handleVerifyReferral} className="reg-verifier-form">
                <div className="reg-code-input-wrap">
                  <Tag size={18} className="reg-code-icon" />
                  <input
                    type="text"
                    className="reg-code-input"
                    placeholder="Enter referral code"
                    value={referralInput}
                    onChange={(e) => {
                      setReferralInput(e.target.value.toUpperCase());
                      if (referralError) setReferralError('');
                    }}
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
                <button
                  type="submit"
                  className="reg-verify-btn"
                  disabled={isVerifying || !referralInput.trim()}
                >
                  {isVerifying ? 'Verifying...' : 'Verify Referral'}
                </button>
              </form>

              {/* Error state */}
              {referralError && (
                <div className="reg-verifier-alert reg-verifier-error" role="alert">
                  <AlertCircle size={18} className="flex-shrink-0" />
                  <div>
                    <strong className="reg-error-headline">INVALID REFERRAL CODE</strong>
                    <p className="reg-error-msg">{referralError}</p>
                  </div>
                </div>
              )}

              {/* Verified state */}
              {validatedRep && (
                <div className="reg-verifier-alert reg-verifier-success" role="status">
                  <CheckCircle2 size={20} className="reg-success-icon" />
                  <div className="reg-verified-details">
                    <div className="reg-verified-badge">✓ REFERRAL VERIFIED</div>
                    <div className="reg-rep-grid">
                      <div>
                        <span className="reg-meta-label">Representative:</span>
                        <span className="reg-meta-value">{validatedRep.name}</span>
                      </div>
                      <div>
                        <span className="reg-meta-label">Medical College:</span>
                        <span className="reg-meta-value">{validatedRep.college}</span>
                      </div>
                      <div>
                        <span className="reg-meta-label">Official Code:</span>
                        <span className="reg-meta-code">{validatedRep.code}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Unlocked / Locked Passes */}
            <div className="reg-unlocked-section">
              <div className="reg-flow-intro">
                <span className="reg-verifier-step">STEP 2</span>
                <h3 className="reg-unlocked-title">
                  {validatedRep ? 'Select Your Discounted Pass' : 'Referral Passes (Locked)'}
                </h3>
                <p>
                  {validatedRep
                    ? 'Referral validated successfully! Choose your preferred pass to proceed.'
                    : 'Enter and verify an official referral code above to unlock discounted registration.'}
                </p>
              </div>

              <div className={`reg-grid ${!validatedRep ? 'reg-grid-locked' : ''}`}>
                {referralPasses.map(card => {
                  const { id, passKey, icon: Icon, title, titleSub, badge, originalPrice, price, description, ctaLabel, featured } = card;
                  return (
                    <div 
                      key={id} 
                      className={`reg-card reg-card-referral ${featured ? 'reg-card-featured' : ''} ${!validatedRep ? 'reg-card-disabled' : ''}`}
                    >
                      <div className="reg-badge reg-badge-gold">
                        <Tag size={10} strokeWidth={2.5} />
                        {badge}
                      </div>

                      <div className="reg-icon-wrap reg-icon-gold">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      <div className="reg-title-block">
                        <h3 className="reg-card-title">{title}</h3>
                        {titleSub && <span className="reg-card-title-sub">{titleSub}</span>}
                      </div>

                      <div className="reg-pricing">
                        <span className="reg-original">{originalPrice}</span>
                        <div className="reg-eb-row">
                          <span className="reg-eb-label">Referral Price</span>
                          <span className="reg-price text-gold">{price}</span>
                        </div>
                        <div className="reg-referral-note">
                          <Tag size={11} strokeWidth={2} />
                          Includes 10% official referral discount
                        </div>
                      </div>

                      <p className="reg-desc">{description}</p>

                      <button
                        className="reg-cta-btn reg-cta-gold"
                        onClick={() => validatedRep && handleSelectPass(passKey)}
                        disabled={!validatedRep}
                      >
                        {!validatedRep && <Lock size={14} />}
                        {validatedRep ? ctaLabel : 'Enter Code to Unlock'}
                        {validatedRep && <ArrowRight size={15} strokeWidth={2.5} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Footer note */}
        <p className="reg-footer-note">
          Offline attendance at Chakolas Pavilion Events Center, Kalamassery, Kochi. Live online stream via Zoom for registered delegates across India.
        </p>
      </div>

      {/* Participant Information Modal */}
      {selectedPass && (
        <ParticipantModal
          pass={selectedPass}
          referralData={validatedRep}
          onClose={() => setSelectedPass(null)}
        />
      )}
    </div>
  );
}
