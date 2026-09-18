/* ============================================================
   CENTRALIZED REGISTRATION CONFIGURATION & PREFILL BUILDER
   Single source of truth for all 4 Google Forms and entry field mappings.
   ============================================================ */

export const registrationForms = {
  249: {
    passName: '₹249 STANDARD REGISTRATION',
    tier: 'standard',
    price: 249,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSczXQzAW_9NLnH4gx9jhQSXGN2x1_S-RRhjze9kkFNVnvXMuQ/viewform',
    fields: {
      fullName: '',
      mobile: '',
      email: '',
      medicalCollege: '',
      year: '',
      district: '',
      state: '',
      referralCode: '',
      representativeName: '',
    },
  },
  499: {
    passName: '₹499 STANDARD REGISTRATION',
    tier: 'standard',
    price: 499,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSek-1VMSL4Z9fBcjKfs5ITFxK8ObfRzIa50WRK1ChOqKp6cpQ/viewform',
    fields: {
      fullName: '',
      mobile: '',
      email: '',
      medicalCollege: '',
      year: '',
      district: '',
      state: '',
      referralCode: '',
      representativeName: '',
    },
  },
  224: {
    passName: '₹224 REFERRAL REGISTRATION',
    tier: 'referral',
    price: 224,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe4qwrup4sm1KAV7ZBrDvR5BkBRQrJKLYww9llIbmCEJZondA/viewform',
    fields: {
      fullName: '',
      mobile: '',
      email: '',
      medicalCollege: '',
      year: '',
      district: '',
      state: '',
      referralCode: '',
      representativeName: '',
    },
  },
  449: {
    passName: '₹449 REFERRAL REGISTRATION',
    tier: 'referral',
    price: 449,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSftDr4QUx-bqR9VgdtaqMqB66tipVAhuSTCAjXTyyt7m5qAKA/viewform',
    fields: {
      fullName: '',
      mobile: '',
      email: '',
      medicalCollege: '',
      year: '',
      district: '',
      state: '',
      referralCode: '',
      representativeName: '',
    },
  },
};

// Backward-compatibility alias
registrationForms[229] = registrationForms[224];

/**
 * Builds the prefilled Google Form URL for a given pass and participant data.
 * @param {string|number} pass - '249' | '499' | '224' | '449'
 * @param {Object} participant - { fullName, mobile, email, medicalCollege, year, district, state }
 * @param {Object|null} referral - { code, name } (optional, for referral passes)
 * @returns {string} Fully encoded prefilled Google Form URL
 */
export function buildPrefilledGoogleFormUrl(pass, participant, referral = null) {
  const formConfig = registrationForms[pass];
  if (!formConfig) {
    throw new Error(`Invalid pass identifier: ${pass}`);
  }

  const { url, fields } = formConfig;
  const isReferralPass = formConfig.tier === 'referral';

  // Referral code & representative name values
  const referralCodeValue = isReferralPass && referral?.code ? referral.code : 'NO REFERRAL';
  const representativeNameValue = isReferralPass && referral?.name ? referral.name : 'N/A';

  // Base URL with usp=pp_url
  const queryParts = ['usp=pp_url'];

  const fieldValues = {
    fullName: participant.fullName?.trim() || '',
    mobile: participant.mobile?.trim() || '',
    email: participant.email?.trim() || '',
    medicalCollege: participant.medicalCollege?.trim() || '',
    year: participant.year?.trim() || '',
    district: participant.district?.trim() || '',
    state: participant.state?.trim() || '',
    referralCode: referralCodeValue,
    representativeName: representativeNameValue,
  };

  // Add mapped entry parameters
  for (const [key, val] of Object.entries(fieldValues)) {
    const entryId = fields[key];
    if (entryId && val) {
      // Ensure entryId format 'entry.XXXXXXXX'
      const paramName = entryId.startsWith('entry.') ? entryId : `entry.${entryId}`;
      queryParts.push(`${paramName}=${encodeURIComponent(val)}`);
    }
  }

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${queryParts.join('&')}`;
}
