import React, { useEffect } from 'react';
import './LegalPage.css';

const privacyContent = `Last Updated: July 2026

After MBBS? Exploring Hidden Treasures ("the Event") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your information when you register for or participate in the event.

## Information We Collect

We may collect:
- Full Name
- Email Address
- Phone Number
- College/Institution Name
- Academic Information
- Registration Details
- Payment Information (processed through secure payment providers)

## How We Use Your Information

Your information may be used to:
- Process event registrations
- Verify attendee eligibility
- Send event updates and reminders
- Provide certificates and participation records
- Improve event planning and participant experience
- Communicate important event-related information

## Sponsor and Partner Access

The Event may share limited attendee information with official sponsors, academic partners, or supporting organizations for educational, networking, career guidance, internship, scholarship, and professional opportunity purposes.

Information shared may include:
- Name
- College/Institution
- Academic Year
- Email Address

Sponsors and partners are expected to use such information responsibly and only for legitimate professional or educational communication.

## Data Security

Reasonable security measures are implemented to protect collected information from unauthorized access, disclosure, or misuse.

## Data Retention

Participant information may be retained for event administration, reporting, certification, and future event communication purposes.

## Your Rights

Participants may request correction or removal of their personal information by contacting the organizing committee.

## Contact

For privacy-related concerns, please contact:
Email: imaparippally@gmail.com
Phone: +91 82819 80653

By registering for the Event, you consent to the practices described in this Privacy Policy.`;

const termsContent = `Last Updated: July 2026

By registering for "After MBBS? Exploring Hidden Treasures", you agree to the following terms:

## Registration

- All information provided during registration must be accurate.
- Registration is valid only after successful confirmation.

## Event Changes

The organizers reserve the right to modify:
- Schedule
- Speakers
- Venue
- Session timings
- Event format
without prior notice when necessary.

## Participant Conduct

Participants are expected to maintain professional and respectful behavior throughout the event.
The organizers may deny participation to any attendee engaging in disruptive, abusive, or inappropriate conduct.

## Intellectual Property

Presentation materials, recordings, graphics, and event content remain the property of their respective owners and may not be reproduced without permission.

## Photography and Media

Photographs and videos may be captured during the event for promotional and reporting purposes.
By attending, participants consent to the use of such media by the organizers.

## Limitation of Liability

The organizers shall not be liable for any indirect loss, injury, technical issues, travel disruptions, or damages arising from participation in the event.

## Contact

For questions regarding these Terms, please contact the organizing committee:
Email: imaparippally@gmail.com
Phone: +91 82819 80653`;

const refundContent = `Last Updated: July 2026

## Registration Cancellation

Participants may request cancellation by contacting the organizing team.

## Refund Eligibility

Refund requests will be handled according to the following:
- More than 14 days before the event: Eligible for full refund (excluding payment gateway charges, if applicable).
- 7–14 days before the event: Eligible for 50% refund.
- Less than 7 days before the event: No refund.

## Event Cancellation

If the event is cancelled by the organizers, registered participants will receive a full refund of the registration fee, excluding any non-refundable payment processing charges where applicable.

## Speaker or Schedule Changes

Changes in speakers, agenda, timing, or session order shall not constitute grounds for refund.

## Processing Time

Approved refunds will typically be processed within 7–14 business days.

## Contact

For refund-related requests, contact:
Email: imaparippally@gmail.com
Phone: +91 82819 80653`;

export default function LegalPage({ page }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  let title = '';
  let content = '';

  if (page === 'privacy') {
    title = 'Privacy Policy';
    content = privacyContent;
  } else if (page === 'terms') {
    title = 'Terms & Conditions';
    content = termsContent;
  } else if (page === 'refund') {
    title = 'Refund & Cancellation Policy';
    content = refundContent;
  }

  // Parse markdown-like content simply
  const renderContent = (text) => {
    return text.split('\n\n').map((block, idx) => {
      if (block.startsWith('## ')) {
        return <h2 key={idx}>{block.replace('## ', '')}</h2>;
      }
      if (block.includes('\n- ')) {
        const lines = block.split('\n');
        return (
          <div key={idx}>
            {lines[0] && !lines[0].startsWith('- ') && <p>{lines[0]}</p>}
            <ul>
              {lines.filter(l => l.startsWith('- ')).map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          </div>
        );
      }
      return <p key={idx}>{block}</p>;
    });
  };

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-card">
          <h1 className="legal-title text-emerald">{title}</h1>
          <div className="legal-content">
            {renderContent(content)}
          </div>
        </div>
      </div>
    </div>
  );
}
