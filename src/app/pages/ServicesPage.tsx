import { Settings, Network, Lightbulb, Compass, Code, CheckSquare, Briefcase, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollableNav } from '../components/ScrollableNav';
import { mediaAssets } from '../../assets/media';
import type { Page } from '../types';
import { useState, useRef, useEffect } from 'react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const mainServices = [
  {
    id: 'engineering',
    icon: Settings,
    title: 'Engineering',
    badge: 'ENGINEERING',
    badgeColor: 'rgba(26, 115, 232, 0.1)',
    badgeTextColor: 'var(--bs-primary)',
    description: 'At TLE, we turn complex engineering challenges into smart, sustainable solutions. Our team of multidisciplinary engineers delivers end-to-end expertise across oil and gas, control, and communication systems — ensuring every project is safe, efficient, and built to international standards.',
    detailDescription: 'Whether it\'s optimizing existing infrastructure or developing new installations from the ground up, we focus on innovation, precision, and long-term performance. Our engineering philosophy is simple: design today with tomorrow in mind.',
    image: mediaAssets.services.automation.url,
    imageAlt: mediaAssets.services.automation.alt,
    features: [
      'Concept & Feasibility Studies',
      'Detailed Engineering Design',
      'Control and Automation Engineering',
      'Electrical & Instrumentation Engineering',
      'Piping and Process Engineering',
      'Safety and Compliance Engineering',
      'Documentation and As-Built Drawings'
    ]
  },
  {
    id: 'systems-integration',
    icon: Network,
    title: 'Systems Integration',
    badge: 'SYSTEMS INTEGRATION',
    badgeColor: 'rgba(255, 152, 0, 0.1)',
    badgeTextColor: '#ff9800',
    description: 'Seamless integration is the heart of modern industrial performance — and that\'s where we excel. TLE brings together SCADA, RTU, FOS, PLDS and communication systems into one intelligent, interoperable platform.',
    detailDescription: 'We ensure that data flows effortlessly across every layer of your operation, enabling real-time monitoring, advanced analytics, and faster decision-making. From oil & gas facilities to complex automation networks, our integration experts build systems that speak the same language — securely, efficiently, and reliably.',
    image: mediaAssets.services.communication.url,
    imageAlt: mediaAssets.services.communication.alt,
    features: [
      'Pipeline Management System Integration',
      'Leak Detection system integration / multi technology integration',
      'Mission Critical Communication (MCC) systems',
      'SCADA System Integration',
      'RTU Configuration & Networking',
      'Communication Protocol Mapping',
      'Data Acquisition and Historian Integration',
      'Alarm Management and Visualization',
      'Third-Party System Interfacing'
    ]
  },
  {
    id: 'technical-solutions',
    icon: Lightbulb,
    title: 'Technical Solutions',
    badge: 'TECHNICAL SOLUTIONS',
    badgeColor: 'rgba(220, 53, 69, 0.1)',
    badgeTextColor: '#dc3545',
    description: 'Every challenge deserves a smart solution — and we create them. Our technical solutions are designed to help clients overcome operational limits through innovation and expertise.',
    detailDescription: 'From automation upgrades and smart monitoring to digital transformation and remote-control systems, we tailor each solution to meet your performance, reliability, and safety goals. With TLE, technology doesn\'t just support your operation — it elevates it.',
    image: mediaAssets.services.pipeline.url,
    imageAlt: mediaAssets.services.pipeline.alt,
    features: [
      'Automation and Control Optimization',
      'Leak Detection and Monitoring Systems',
      'Remote Operation & Telemetry Solutions',
      'Smart Field Instrumentation',
      'Energy Efficiency and Power Management',
      'Data Analytics & Digital Twin Implementation',
      'Predictive Maintenance Solutions'
    ]
  },
  {
    id: 'design',
    icon: Compass,
    title: 'Design',
    badge: 'DESIGN',
    badgeColor: 'rgba(103, 58, 183, 0.1)',
    badgeTextColor: '#673ab7',
    description: 'Great systems start with great design. At TLE, we translate your vision and technical requirements into intelligent, scalable, and future-ready designs.',
    detailDescription: 'Using advanced engineering tools and international standards, our experts craft solutions that balance function, form, and feasibility. Whether developing control system architectures or field instrumentation layouts, our designs are built to perform, designed to last.',
    image: mediaAssets.services.automation.url,
    imageAlt: mediaAssets.services.automation.alt,
    features: [
      'System Architecture Design',
      'Control Panel Design and Layout',
      'Field Instrument Layouts and Wiring Diagrams',
      'Network & Communication Design',
      'Standards and Compliance Documentation'
    ]
  },
  {
    id: 'development',
    icon: Code,
    title: 'Development',
    badge: 'DEVELOPMENT',
    badgeColor: 'rgba(0, 150, 136, 0.1)',
    badgeTextColor: '#009688',
    description: 'Innovation comes to life through development. Our engineers and developers work hand-in-hand to build reliable, high-performance systems — from control logic programming and software configuration to network and database development.',
    detailDescription: 'Each solution is tailored to your operational environment, ensuring flexibility, cybersecurity, and efficiency. At TLE, we don\'t just develop systems — we develop smart experiences that grow with your business.',
    image: mediaAssets.services.communication.url,
    imageAlt: mediaAssets.services.communication.alt,
    features: [
      'PLDS Custom Software and Application Development',
      'SCADA and HMI Programming',
      'RTU Logic Development',
      'Database and Historian Configuration',
      'Web-Based Monitoring Tools',
      'API and OPC Integration',
      'Testing and Validation Frameworks'
    ]
  },
  {
    id: 'commissioning',
    icon: CheckSquare,
    title: 'Commissioning',
    badge: 'COMMISSIONING',
    badgeColor: 'rgba(76, 175, 80, 0.1)',
    badgeTextColor: '#4caf50',
    description: 'Our commissioning services make the transition from design to operation effortless and secure. We perform detailed testing, calibration, and performance verification to ensure every system runs flawlessly before handover.',
    detailDescription: 'With a focus on safety, documentation, and compliance, our team guarantees your systems are ready for full-scale operation from day one. When TLE commissions a system, it\'s not just operational — it\'s optimized.',
    image: mediaAssets.services.pipeline.url,
    imageAlt: mediaAssets.services.pipeline.alt,
    features: [
      'Pre-Commissioning and FAT/SAT Testing',
      'System Calibration and Validation',
      'Loop Checking and Functional Testing',
      'Performance Verification',
      'Operator Training and Documentation',
      'On-Site Troubleshooting and Support',
      'Final Handover and Certification'
    ]
  },
  {
    id: 'project-management',
    icon: Briefcase,
    title: 'Project Management',
    badge: 'PROJECT MANAGEMENT',
    badgeColor: 'rgba(233, 30, 99, 0.1)',
    badgeTextColor: '#e91e63',
    description: 'From concept to completion, we manage every step with precision and care. Our project management team ensures your projects are delivered safely, on time, and within budget — without compromising quality or innovation.',
    detailDescription: 'We combine technical expertise with transparent communication, risk control, and strong vendor coordination. At TLE, we believe that successful projects are built not only on engineering excellence, but also on trust, discipline, and vision.',
    image: mediaAssets.services.automation.url,
    imageAlt: mediaAssets.services.automation.alt,
    features: [
      'Project Planning and Scheduling',
      'Cost Estimation and Control',
      'Procurement and Vendor Coordination',
      'Quality Assurance and Risk Management',
      'Documentation and Reporting',
      'Site Supervision and Progress Monitoring',
      'HSE and Compliance Management'
    ]
  }
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeService, setActiveService] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToService = (index: number) => {
    const element = serviceRefs.current[index];
    if (element) {
      const yOffset = -160;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveService(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      for (let i = serviceRefs.current.length - 1; i >= 0; i--) {
        const element = serviceRefs.current[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveService(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main role="main" aria-label="Services page">
      <div>
        {/* Hero Section */}
        <section className="pb-12 pt-3 md:pt-4 relative overflow-hidden" style={{ 
          background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.08) 100%)',
          borderBottom: '1px solid var(--bs-border-color)',
          marginTop: '-76px',
          paddingTop: '76px'
        }}>
          {/* Animated background circles */}
          <div className="absolute" style={{
            top: '-10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26, 115, 232, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div className="absolute" style={{
            bottom: '-10%',
            left: '-5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13, 71, 161, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
          
          <div className="container mx-auto max-w-7xl px-4 relative" style={{ paddingTop: '100px', paddingBottom: '3rem' }}>
            <div className="text-center px-3">
              <div className="mb-3 inline-block" style={{
                padding: '8px 16px',
                background: 'rgba(26, 115, 232, 0.1)',
                border: '1px solid rgba(26, 115, 232, 0.2)',
                borderRadius: '20px',
                color: 'var(--bs-primary)',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                <Sparkles size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Our Services
              </div>
              <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Comprehensive Engineering Solutions
              </h1>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Delivering integrated technologies that power the world\'s most critical infrastructure systems with reliability, efficiency, and innovation.
              </p>
            </div>
          </div>
          
          {/* Add floating keyframes */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </section>

        {/* Service Navigation Tabs */}
        <div className="sticky" style={{ 
          top: '76px', 
          zIndex: 100,
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          background: 'var(--glass-bg-strong)',
          borderBottom: '0.5px solid var(--glass-border)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
        }}>
          <div className="container mx-auto max-w-7xl px-4">
            <ScrollableNav style={{ '--scrollnav-fade': 'var(--glass-bg-strong)' } as React.CSSProperties}>
              <div className="flex gap-2 py-3" style={{ minWidth: 'max-content' }}>
                {mainServices.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = activeService === index;
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(index)}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all"
                      style={{
                        background: isActive ? 'var(--bs-primary)' : 'transparent',
                        color: isActive ? 'white' : 'var(--bs-body-color)',
                        border: isActive ? 'none' : '1px solid var(--bs-border-color)',
                        fontSize: '14px',
                        fontWeight: isActive ? '600' : '500',
                        cursor: 'pointer',
                        opacity: isActive ? 1 : 0.7
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(26, 115, 232, 0.08)';
                          e.currentTarget.style.opacity = '1';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.opacity = '0.7';
                        }
                      }}
                    >
                      <Icon size={18} />
                      <span>{service.title}</span>
                    </button>
                  );
                })}
              </div>
            </ScrollableNav>
          </div>
          
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>

        {/* Core Services Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Mission-Critical Engineering Services
              </h2>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Tailored solutions designed for reliability, safety, and operational excellence
              </p>
            </div>

            {/* Service Cards */}
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className="mb-16" ref={el => serviceRefs.current[index] = el}>
                  <div className="rounded-xl border-0 shadow-lg overflow-hidden" style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)'
                  }}>
                    <div className="flex flex-col lg:flex-row">
                      <div 
                        className="lg:w-5/12 relative" 
                        style={{ 
                          minHeight: '400px',
                          order: !isEven ? 2 : 1
                        }}
                      >
                        <ImageWithFallback
                          src={service.image}
                          alt={service.imageAlt}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6" style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                        }}>
                          <div className="rounded-xl inline-flex items-center justify-center p-4" style={{
                            background: 'rgba(26, 115, 232, 0.9)',
                            backdropFilter: 'blur(10px)'
                          }}>
                            <Icon size={32} className="text-white" />
                          </div>
                        </div>
                      </div>
                      <div 
                        className="lg:w-7/12"
                        style={{
                          order: !isEven ? 1 : 2
                        }}
                      >
                        <div className="p-8 lg:p-12">
                          <span className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{
                            background: service.badgeColor,
                            color: service.badgeTextColor,
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                            {service.badge}
                          </span>
                          <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                            {service.title}
                          </h3>
                          <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                            {service.description}
                          </p>
                          <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                            {service.detailDescription}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                              Key Capabilities:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 size={18} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
                                  <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-lg border-0 p-4" style={{
                            background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.06) 100%)',
                            border: '1px solid rgba(26, 115, 232, 0.15)'
                          }}>
                            <p className="mb-2" style={{ fontSize: '0.875rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                              <strong>Every project is unique</strong> — let our experts help you build the right solution.
                            </p>
                            <p className="mb-0" style={{ fontSize: '0.875rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                              Connect with our technical specialists today to design a system that fits your operational vision.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="rounded-xl border-0 shadow-2xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
              color: 'white'
            }}>
              <div className="p-8 md:p-12 text-center">
                <Settings size={48} className="mb-4 mx-auto" style={{ opacity: 0.9 }} />
                <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
                  Ready to Transform Your Operations?
                </h3>
                <p className="mb-8 mx-auto" style={{ fontSize: '1.125rem', opacity: 0.95, maxWidth: '800px' }}>
                  Our technical specialists are ready to help you design a customized solution that meets your specific operational requirements and industry standards.
                </p>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border-0 cursor-pointer px-8 py-4"
                  style={{
                    background: 'white',
                    color: '#1a73e8',
                    fontSize: '1rem',
                    fontWeight: '600',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}