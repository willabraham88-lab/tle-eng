import { Settings, Users, Building } from 'lucide-react';

const capabilities = [
  {
    icon: Settings,
    title: 'System Integration',
    description: 'Seamlessly integrate complex systems across your infrastructure for unified operations and enhanced efficiency',
    features: [
      'SCADA & HMI Systems',
      'PLC & RTU Programming',
      'Network Architecture',
      'Data Acquisition Systems',
    ],
    fullDescription: 'Our system integration expertise brings together disparate technologies into cohesive, efficient solutions. We specialize in connecting legacy systems with modern platforms, ensuring backward compatibility while enabling future growth. From field devices to enterprise systems, we create unified architectures that provide real-time visibility and control.'
  },
  {
    icon: Building,
    title: 'Infrastructure Design',
    description: 'Robust engineering solutions for critical infrastructure that meet the most demanding operational requirements',
    features: [
      'Pipeline Instrumentation',
      'Communication Networks',
      'Control Room Design',
      'Field Device Integration',
    ],
    fullDescription: 'We design infrastructure with resilience, scalability, and efficiency at its core. Our engineering team considers every aspect of your operation, from environmental conditions to regulatory requirements, ensuring that your infrastructure not only meets current needs but is also prepared for future expansion and technology evolution.'
  },
  {
    icon: Users,
    title: 'Support & Maintenance',
    description: '24/7 technical support ensuring continuous operations and rapid response to critical issues',
    features: [
      'Emergency Response',
      'Preventive Maintenance',
      'System Upgrades',
      'Training & Documentation',
    ],
    fullDescription: 'Our commitment extends far beyond initial implementation. We provide comprehensive support services that keep your systems running at peak performance. Our experienced support team is available around the clock, backed by detailed documentation and proactive maintenance programs that minimize downtime and extend system life.'
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--bs-body-color)' }}>
            Core Capabilities
          </h2>
          <p className="text-xl mx-auto max-w-3xl" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
            Decades of experience in designing, implementing, and maintaining mission-critical systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index}>
                <div className="h-full border-0 rounded-2xl" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 115, 232, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-xl flex items-center justify-center" style={{
                        width: '56px',
                        height: '56px',
                        background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.15) 0%, rgba(13, 71, 161, 0.15) 100%)',
                        border: '1px solid rgba(26, 115, 232, 0.2)'
                      }}>
                        <Icon style={{ width: '28px', height: '28px', color: 'var(--bs-primary)' }} />
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: 'var(--bs-body-color)' }}>{capability.title}</h3>
                    </div>
                    <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{capability.description}</p>
                    <ul className="list-none space-y-3">
                      {capability.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span style={{ color: 'var(--bs-primary)', marginTop: '2px', fontSize: '18px' }}>•</span>
                          <span style={{ color: 'var(--bs-body-color)', opacity: 0.8 }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}