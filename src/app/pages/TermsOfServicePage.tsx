import { FileText, AlertCircle, Scale, Shield, Users, Ban, Briefcase, Calendar } from 'lucide-react';

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using the Telemetry & Logic Engineering (TLE) Ltd. website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
        },
        {
          subtitle: 'Changes to Terms',
          text: 'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes constitutes acceptance of the modified terms.',
        },
      ],
    },
    {
      icon: Briefcase,
      title: 'Services and Professional Engagement',
      content: [
        {
          subtitle: 'Service Scope',
          text: 'TLE Ltd. provides specialized engineering services including communication systems, automation & control, and pipeline management solutions. The specific scope of services for each engagement is defined in separate contractual agreements.',
        },
        {
          subtitle: 'Professional Standards',
          text: 'All services are provided in accordance with industry best practices and applicable engineering standards. We maintain professional liability insurance and adhere to relevant regulatory requirements.',
        },
        {
          subtitle: 'Client Responsibilities',
          text: 'Clients are responsible for providing accurate information, timely feedback, and access to necessary resources as outlined in project agreements. Delays caused by incomplete or inaccurate information may affect project timelines and costs.',
        },
      ],
    },
    {
      icon: Scale,
      title: 'Intellectual Property Rights',
      content: [
        {
          subtitle: 'Website Content',
          text: 'All content on this website, including text, graphics, logos, images, and software, is the property of TLE Ltd. or its content suppliers and is protected by international copyright and trademark laws.',
        },
        {
          subtitle: 'Project Deliverables',
          text: 'Intellectual property rights for project deliverables are defined in individual service agreements. Unless otherwise specified, TLE Ltd. retains rights to methodologies, tools, and processes developed independently.',
        },
        {
          subtitle: 'License to Use',
          text: 'You may view, download, and print content from this website for personal, non-commercial use only. Any other use requires prior written permission from TLE Ltd.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Limitation of Liability',
      content: [
        {
          subtitle: 'Website Use',
          text: 'This website is provided "as is" without warranties of any kind, either express or implied. TLE Ltd. does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.',
        },
        {
          subtitle: 'Service Liability',
          text: 'Our liability for professional services is governed by individual service agreements and limited to the extent permitted by law and professional indemnity insurance. We are not liable for indirect, consequential, or punitive damages.',
        },
        {
          subtitle: 'Force Majeure',
          text: 'TLE Ltd. shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, labor disputes, or governmental actions.',
        },
      ],
    },
    {
      icon: Users,
      title: 'User Conduct and Restrictions',
      content: [
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not use this website to: transmit harmful code or malware; attempt unauthorized access to systems; interfere with website operation; violate any applicable laws or regulations; or infringe upon intellectual property rights.',
        },
        {
          subtitle: 'Contact Form Submissions',
          text: 'Information submitted through our contact forms must be accurate and truthful. We reserve the right to reject inquiries that appear fraudulent, abusive, or inconsistent with our business focus.',
        },
      ],
    },
    {
      icon: Ban,
      title: 'Confidentiality and Non-Disclosure',
      content: [
        {
          subtitle: 'Confidential Information',
          text: 'TLE Ltd. maintains strict confidentiality regarding client projects and proprietary information. Specific confidentiality terms are outlined in individual service agreements and Non-Disclosure Agreements (NDAs).',
        },
        {
          subtitle: 'Your Information',
          text: 'Information you share with us through inquiries or service engagements is treated as confidential and handled in accordance with our Privacy Policy and applicable data protection laws.',
        },
      ],
    },
    {
      icon: AlertCircle,
      title: 'Termination and Governing Law',
      content: [
        {
          subtitle: 'Termination of Access',
          text: 'We reserve the right to terminate or restrict access to our website at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, TLE Ltd., or third parties.',
        },
        {
          subtitle: 'Governing Law',
          text: 'These Terms of Service are governed by and construed in accordance with the laws of Scotland and the United Kingdom. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Scottish courts.',
        },
        {
          subtitle: 'Severability',
          text: 'If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.',
        },
      ],
    },
    {
      icon: FileText,
      title: 'Contact and Dispute Resolution',
      content: [
        {
          subtitle: 'Questions About Terms',
          text: 'If you have questions about these Terms of Service, please contact us at the address below. We will respond to inquiries promptly.',
        },
        {
          subtitle: 'Contact Information',
          text: 'Telemetry & Logic Engineering Ltd.\nArnhall Business Park, Discovery Drive\nWesthill, Aberdeenshire\nAB32 6FG, United Kingdom\n\nEmail: contact@tle-eng.co.uk\nPhone: +44 7405 716707',
        },
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'var(--bs-section-bg-lighter)' }}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div
                className="text-center p-8 md:p-12 rounded-3xl"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center rounded-full mb-6"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.2) 0%, rgba(13, 71, 161, 0.2) 100%)',
                  }}
                >
                  <Scale size={40} style={{ color: 'var(--bs-primary)' }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Terms of Service</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: 'var(--bs-body-color)', opacity: 0.8 }}>
                  Please read these terms carefully before using our website or engaging our services. 
                  These terms govern your use of the TLE Ltd. website and our professional services.
                </p>
                <div className="flex items-center justify-center gap-2" style={{ opacity: 0.6 }}>
                  <Calendar size={18} style={{ color: 'var(--bs-body-color)' }} />
                  <span style={{ fontSize: '14px', color: 'var(--bs-body-color)' }}>Last Updated: January 10, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16" style={{ background: 'var(--bs-body-bg)' }}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={index}
                    className="mb-6 p-6 md:p-8 rounded-3xl transition-all duration-300"
                    style={{
                      backdropFilter: 'saturate(180%) blur(20px)',
                      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                      background: 'var(--glass-bg)',
                      border: '0.5px solid var(--glass-border)',
                      boxShadow: 'var(--glass-shadow)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 48px rgba(26, 115, 232, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className="rounded-2xl flex items-center justify-center mr-4 flex-shrink-0"
                        style={{
                          width: '56px',
                          height: '56px',
                          background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.2) 0%, rgba(13, 71, 161, 0.2) 100%)',
                        }}
                      >
                        <Icon size={28} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--bs-body-color)' }}>{section.title}</h2>
                      </div>
                    </div>

                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-5 last:mb-0">
                        {item.subtitle && (
                          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--bs-primary)' }}>
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="mb-0 whitespace-pre-line" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}

              {/* Important Notice */}
              <div
                className="p-6 md:p-8 rounded-3xl text-center"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)',
                  border: '1px solid var(--bs-border-color)',
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Professional Service Agreements</h3>
                <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                  These Terms of Service apply to website use and general interactions. Specific engineering services 
                  are governed by separate Master Service Agreements (MSAs), Statements of Work (SOWs), and project-specific 
                  contracts that define detailed terms, deliverables, and obligations. Please refer to your service agreement 
                  for terms specific to your project engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div style={{ paddingBottom: '80px' }}></div>
    </main>
  );
}