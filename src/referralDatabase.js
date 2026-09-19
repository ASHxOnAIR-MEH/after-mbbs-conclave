/* ============================================================
   OFFICIAL REFERRAL DATABASE — IMA PARIPPALLY STUDENT TEAM
   Maps normalized official referral codes to student representatives.
   ============================================================ */

export const officialRepresentatives = [
  {
    code: 'HAN-TRA-001',
    name: 'Hannah Eqbal',
    college: 'Travancore Medical College',
    year: '3rd Year MBBS',
    aliases: ['HAN-TRA-001', 'HANNAH-TRA-001', 'HANTRA001', 'TRA-001'],
  },
  {
    code: 'ANA-KOL-002',
    name: 'Ananthu Sankar K.',
    college: 'Government Medical College, Kollam',
    year: '2nd Year MBBS',
    aliases: ['ANA-KOL-002', 'ANANTHU-KOL-002', 'ANAKOL002', 'KOL-002'],
  },
  {
    code: 'SRU-AMA-003',
    name: 'Sruthi Joby',
    college: 'Amala Institute of Medical Sciences',
    year: 'Intern',
    aliases: ['SRU-AMA-003', 'SRUTHI-AMA-003', 'SRUAMA003', 'AMA-003'],
  },
  {
    code: 'AKS-TCR-004',
    name: 'Aksa Kurian',
    college: 'Government Medical College, Thrissur',
    year: '3rd Year MBBS',
    aliases: ['AKS-TCR-004', 'AKSA-TCR-004', 'AKSTCR004', 'TCR-004'],
  },
  {
    code: 'SAH-TCR-005',
    name: 'Sahil Ahamed',
    college: 'Government Medical College, Thrissur',
    year: '2nd Year MBBS',
    aliases: ['SAH-TCR-005', 'SAHIL-TCR-005', 'SAHTCR005', 'TCR-005'],
  },
  {
    code: 'CIN-KOL-006',
    name: 'Cinda Saji George',
    college: 'Government Medical College, Kollam',
    year: '1st Year MBBS',
    aliases: ['CIN-KOL-006', 'CINDA-KOL-006', 'CINKOL006', 'KOL-006'],
  },
  {
    code: 'MAL-SNI-007',
    name: 'Malavika',
    college: 'Sree Narayana Institute of Medical Sciences',
    year: '3rd Year MBBS',
    aliases: ['MAL-SNI-007', 'MALAVIKA-SNI-007', 'MALSNI007', 'SNI-007'],
  },
  {
    code: 'ADW-PAR-008',
    name: 'Adwaith A P',
    college: 'Government Medical College, Paripally, Kollam',
    year: '3rd Year MBBS',
    aliases: ['ADW-PAR-008', 'ADWAITH-PAR-008', 'ADWPAR008', 'PAR-008'],
  },
  {
    code: 'MYD-TMC-009',
    name: 'Mydhili Sasikumar',
    college: 'Thrissur Medical College',
    year: '1st Year MBBS',
    aliases: ['MYD-TMC-009', 'MYDHILI-TMC-009', 'MYDTMC009', 'TMC-009'],
  },
  {
    code: 'AIS-KTM-010',
    name: 'Aisha Nazer',
    college: 'Government Medical College, Kottayam',
    year: '2nd Year MBBS',
    aliases: ['AIS-KTM-010', 'AISHA-KTM-010', 'AISKTM010', 'KTM-010'],
  },
  {
    code: 'SRE-TCR-011',
    name: 'Sreelakshmi Varma',
    college: 'Government Medical College, Thrissur',
    year: '4th Year MBBS',
    aliases: ['SRE-TCR-011', 'SREELAKSHMI-TCR-011', 'SRETCR011', 'TCR-011'],
  },
  {
    code: 'RON-AMA-012',
    name: 'Ron Benny',
    college: 'Amala Institute of Medical Sciences',
    year: '4th Year MBBS',
    aliases: ['RON-AMA-012', 'RON-BENNY-012', 'RONAMA012', 'AMA-012'],
  },
  {
    code: 'CHA-KTM-013',
    name: 'Chaithanya Nair',
    college: 'Government Medical College, Kottayam',
    year: '3rd Year MBBS',
    aliases: ['CHA-KTM-013', 'CHAITHANYA-KTM-013', 'CHAKTM013', 'KTM-013'],
  },
  {
    code: 'NAN-GOV-016',
    name: 'Nandana',
    college: 'Government Medical College',
    year: 'MBBS Student',
    aliases: ['NAN-GOV-016', 'NANDANA-GOV-016', 'NANGOV016', 'GOV-016', 'NAN-016', 'NAN-GOV-16', 'NANGOV16', 'GOV-16'],
  },
];

/**
 * Normalizes input code to uppercase, trimmed, hyphens standardized
 */
export function normalizeReferralCode(rawCode) {
  if (!rawCode || typeof rawCode !== 'string') return '';
  return rawCode.trim().toUpperCase().replace(/[\s_]+/g, '-');
}

/**
 * Validates referral code against official dataset
 * Returns { valid: true, rep: { name, college, code, year } } or { valid: false, error: string }
 */
export function validateReferralCode(rawCode) {
  const normalized = normalizeReferralCode(rawCode);
  if (!normalized) {
    return {
      valid: false,
      error: 'Please enter a referral code.',
    };
  }

  const cleanInput = normalized.replace(/[^A-Z0-9]/g, '');

  // Exact match, alias match, or alphanumeric stripped match
  const found = officialRepresentatives.find(r => {
    if (r.code === normalized) return true;
    if (r.aliases && r.aliases.includes(normalized)) return true;
    
    // Alphanumeric fallback match (e.g. NANGOV016 matches NAN-GOV-016)
    const cleanCode = r.code.replace(/[^A-Z0-9]/g, '');
    if (cleanInput === cleanCode) return true;
    if (r.aliases && r.aliases.some(a => a.replace(/[^A-Z0-9]/g, '') === cleanInput)) return true;

    return false;
  });

  if (found) {
    return {
      valid: true,
      rep: {
        code: found.code,
        name: found.name,
        college: found.college,
        year: found.year,
      },
    };
  }

  return {
    valid: false,
    error: 'INVALID REFERRAL CODE. Please enter a valid official referral code provided by an IMA Parippally Student Team representative.',
  };
}
