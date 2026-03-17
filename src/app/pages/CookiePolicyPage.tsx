import { Cookie, Shield, BarChart3, Target, Settings, Info, Trash2, Calendar } from 'lucide-react';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Strictly Necessary Cookies',
      required: true,
      description: 'These cookies are essential for the website to function properly and cannot be disabled in our systems.',
      examples: [
        'Session cookies that enable basic website functionality',
        'Security cookies to authenticate users and prevent fraudulent use',
        'Cookies that remember your cookie preferences',
        'Load balancing cookies to distribute traffic across servers',
      ],
      duration: 'Session or up to 1 year',
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      required: false,
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: [
        'Language preference cookies',
        'Region or location preferences',
        'User interface customization settings',
        'Remember me functionality',
      ],
      duration: 'Up to 2 years',
    },
    {
      icon: BarChart3,
      title: 'Performance & Analytics Cookies',
      required: false,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: [
        'Google Analytics cookies to track page views and user behavior',
        'Performance monitoring cookies',
        'Heat mapping and session recording cookies',
        'A/B testing cookies to optimize user experience',
      ],
      duration: 'Up to 2 years',
    },
    {
      icon: Target,
      title: 'Marketing & Advertising Cookies',
      required: false,
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: [
        'Retargeting and remarketing cookies',
        'Social media platform cookies (LinkedIn, Twitter, Facebook)',
        'Ad network cookies',
        'Conversion tracking cookies',
      ],
      duration: 'Up to 2 years',
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      required: false,
      description: 'These cookies allow the website to remember choices you make and provide enhanced, more personal features.',
      examples: [
        'Theme preference (light/dark mode)',
        'Font size and accessibility settings',
        'Saved filters and view preferences',
        'Content personalization settings',
      ],
      duration: 'Up to 1 year',
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
                  <Cookie size={40} style={{ color: 'var(--bs-primary)' }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Cookie Policy</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: 'var(--bs-body-color)', opacity: 0.8 }}>
                  This policy explains how Telemetry & Logic Engineering (TLE) Ltd. uses cookies and similar 
                  technologies on our website to provide you with a better experience.
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

      {/* Content Section */}
      <section className="py-16" style={{ background: 'var(--bs-body-bg)' }}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {/* What Are Cookies */}
              <div
                className="p-6 md:p-8 rounded-3xl mb-6"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                }}
              >
                <div className="flex items-start mb-4">
                  <div
                    className="rounded-2xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.2) 0%, rgba(13, 71, 161, 0.2) 100%)',
                    }}
                  >
                    <Info size={28} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>What Are Cookies?</h2>
                    <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                      They are widely used to make websites work more efficiently and provide information to website owners.
                    </p>
                    <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      Cookies can be "session" cookies (temporary and deleted when you close your browser) or "persistent" cookies 
                      (remain on your device until they expire or you delete them). They can also be "first-party" cookies 
                      (set by the website you're visiting) or "third-party" cookies (set by other websites).
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookie Types */}
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--bs-body-color)' }}>Types of Cookies We Use</h2>
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start flex-grow">
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
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold" style={{ color: 'var(--bs-body-color)' }}>
                              {cookie.title}
                            </h3>
                            {cookie.required && (
                              <span
                                className="inline-block rounded-full px-3 py-1"
                                style={{
                                  background: 'rgba(26, 115, 232, 0.15)',
                                  color: 'var(--bs-primary)',
                                  fontSize: '11px',
                                  fontWeight: '600',
                                }}
                              >
                                REQUIRED
                              </span>
                            )}
                          </div>
                          <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                            {cookie.description}
                          </p>
                          <div className="mb-4">
                            <h4 className="text-base font-semibold mb-2" style={{ color: 'var(--bs-primary)' }}>
                              Examples:
                            </h4>
                            <ul className="mb-0 list-disc pl-5" style={{ color: 'var(--bs-body-color)', opacity: 0.8 }}>
                              {cookie.examples.map((example, exIndex) => (
                                <li key={exIndex} className="mb-2">
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center gap-2" style={{ color: 'var(--bs-body-color)', opacity: 0.6, fontSize: '14px' }}>
                            <Calendar size={16} />
                            <span>Duration: {cookie.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Managing Cookies */}
              <div
                className="p-6 md:p-8 rounded-3xl mb-6"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                }}
              >
                <div className="flex items-start mb-4">
                  <div
                    className="rounded-2xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.2) 0%, rgba(13, 71, 161, 0.2) 100%)',
                    }}
                  >
                    <Settings size={28} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Managing Your Cookie Preferences</h2>
                    <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      You can control and manage cookies in several ways:
                    </p>
                    <ul className="mb-4 list-disc pl-5" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      <li className="mb-3">
                        <strong>Cookie Consent Tool:</strong> Click the cookie icon in the bottom-right corner of our website 
                        to customize your cookie preferences at any time.
                      </li>
                      <li className="mb-3">
                        <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. 
                        You can set your browser to refuse cookies or delete certain cookies.
                      </li>
                      <li className="mb-3">
                        <strong>Third-Party Opt-Out:</strong> You can opt-out of certain third-party cookies through industry 
                        opt-out platforms such as the Digital Advertising Alliance or European Interactive Digital Advertising Alliance.
                      </li>
                    </ul>
                    <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      Please note that blocking or deleting cookies may impact your experience on our website, and some 
                      features may not function properly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div
                className="p-6 md:p-8 rounded-3xl mb-6"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                }}
              >
                <div className="flex items-start mb-4">
                  <div
                    className="rounded-2xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.2) 0%, rgba(13, 71, 161, 0.2) 100%)',
                    }}
                  >
                    <Trash2 size={28} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Third-Party Cookies</h2>
                    <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      Some cookies on our website are set by third-party service providers. We use these services to help us 
                      analyze website usage, provide social media features, and deliver relevant advertising. These third parties 
                      may use cookies to collect information about your online activities over time and across different websites.
                    </p>
                    <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                      We do not control these third-party cookies and recommend you check the third-party websites for more 
                      information about their cookies and how to manage them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact and Updates */}
              <div
                className="p-6 md:p-8 rounded-3xl text-center"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)',
                  border: '1px solid var(--bs-border-color)',
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Updates to This Cookie Policy</h3>
                <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                  We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other 
                  operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
                </p>
                <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.8, lineHeight: '1.8' }}>
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:contact@tle-eng.co.uk" style={{ color: 'var(--bs-primary)', textDecoration: 'none', fontWeight: '600' }}>
                    contact@tle-eng.co.uk
                  </a>
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