import { CheckCircle, Clock, Shield, Lightbulb, Headphones, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: 'Over 15 years of successfully delivering mission-critical infrastructure projects across multiple industries and geographies.'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge technologies and methodologies to solve complex challenges while ensuring reliability and scalability.'
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Service',
    description: 'From initial consultation and design through implementation, commissioning, and ongoing support—we\'re with you every step.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Our project management expertise ensures timely completion without compromising on quality or safety standards.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and rapid emergency response to keep your critical systems running at peak performance.'
  },
  {
    icon: TrendingUp,
    title: 'Future-Proof Design',
    description: 'We design with scalability in mind, ensuring your infrastructure can grow and adapt to evolving operational requirements.'
  }
];

export function WhyChooseTLE() {
  return (
    <section className="py-12" style={{ background: 'var(--bs-section-bg-lighter)' }}>
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full px-4 py-2 mb-4" style={{
            background: 'rgba(26, 115, 232, 0.1)',
            color: 'var(--bs-primary)',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--bs-body-color)' }}>
            Your Partner in Critical Infrastructure Excellence
          </h2>
          <p className="text-xl mx-auto max-w-3xl" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
            We combine technical expertise, industry experience, and unwavering commitment to deliver solutions that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group"
              >
                <div 
                  className="h-full border-0 rounded-2xl p-6"
                  style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(26, 115, 232, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--bs-border-color)';
                  }}
                >
                  {/* Hover gradient effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.03) 0%, rgba(13, 71, 161, 0.03) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="mb-4">
                      <div 
                        className="inline-flex items-center justify-center rounded-xl"
                        style={{
                          width: '56px',
                          height: '56px',
                          background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.15) 0%, rgba(13, 71, 161, 0.15) 100%)',
                          border: '1px solid rgba(26, 115, 232, 0.2)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon size={28} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--bs-body-color)' }}>
                      {reason.title}
                    </h3>
                    <p style={{ color: 'var(--bs-body-color)', opacity: 0.7, lineHeight: '1.6' }}>
                      {reason.description}
                    </p>
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