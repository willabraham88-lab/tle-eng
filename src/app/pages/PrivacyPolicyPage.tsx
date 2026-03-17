import { Shield, Lock, Eye, Database, UserCheck, Mail, Globe, Calendar } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us or request services, we may collect personal information such as your name, email address, phone number, company name, and job title. We only collect information that is necessary for providing our services and responding to your inquiries.',
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information helps us improve our website and user experience.',
        },
      ],
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your personal information to provide our engineering services, respond to inquiries, send service-related communications, and fulfill contractual obligations.',
        },
        {
          subtitle: 'Website Improvement',
          text: 'Technical data helps us analyze website performance, understand user behavior, and improve our digital presence to better serve our clients.',
        },
        {
          subtitle: 'Marketing Communications',
          text: 'With your consent, we may send you information about our services, industry updates, and company news. You can opt-out of marketing communications at any time.',
        },
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and restricted access to personal data.',
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, or resolve disputes. After this period, data is securely deleted or anonymized.',
        },
      ],
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        {
          subtitle: 'GDPR Compliance',
          text: 'Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict processing, object to processing, and request data portability of your personal information.',
        },
        {
          subtitle: 'Exercise Your Rights',
          text: 'To exercise any of these rights, please contact us using the information provided below. We will respond to your request within one month and may require verification of your identity.',
        },
      ],
    },
    {
      icon: Globe,
      title: 'Data Sharing and Transfers',
      content: [
        {
          subtitle: 'Third-Party Service Providers',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients. These parties are contractually obligated to keep your information confidential.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information when required by law, to enforce our policies, or to protect our rights, property, or safety, or that of others.',
        },
        {
          subtitle: 'International Transfers',
          text: 'If we transfer your data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place to protect your information in accordance with GDPR requirements.',
        },
      ],
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: [
        {
          subtitle: 'Data Protection Officer',
          text: 'If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer:',
        },
        {
          subtitle: '',
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
                  <Shield size={40} style={{ color: 'var(--bs-primary)' }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Privacy Policy</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: 'var(--bs-body-color)', opacity: 0.8 }}>
                  Your privacy is important to us. This policy outlines how Telemetry & Logic Engineering (TLE) Ltd. 
                  collects, uses, and protects your personal information.
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
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Changes to This Privacy Policy</h3>
                <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 
                  "Last Updated" date. We encourage you to review this Privacy Policy periodically.
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