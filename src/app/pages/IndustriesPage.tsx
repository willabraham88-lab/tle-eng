import { Droplet, Zap, Waves, RadioTower, Train, Shield, Building2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollableNav } from '../components/ScrollableNav';
import type { Page } from '../types';
import { useState, useRef, useEffect } from 'react';

const industries = [
  {
    id: 'oil-gas',
    icon: Droplet,
    title: 'Oil & Gas',
    badge: 'OIL & GAS',
    badgeColor: 'rgba(26, 115, 232, 0.1)',
    badgeTextColor: 'var(--bs-primary)',
    description: 'The oil and gas industry demands precision, reliability, and continuous performance — and that\'s exactly what we deliver.',
    detailDescription: 'TLE provides advanced automation, monitoring, and leak detection solutions for pipelines, refineries, and storage facilities. We integrate SCADA, RTU, and fiber optic sensing systems to ensure real-time visibility, safety compliance, and operational excellence across upstream, midstream, and downstream operations.',
    image: 'https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?w=600&q=75&fm=webp&fit=crop',
    imageAlt: 'Oil & Gas Industry',
    solutions: [
      'Pipeline Management System',
      'Pipeline Leak Detection & Monitoring',
      'SCADA & Control System Integration',
      'Field Instrumentation & RTU Solutions',
      'Energy Management and Optimization',
      'Data Analytics and Reporting'
    ]
  },
  {
    id: 'power-energy',
    icon: Zap,
    title: 'Power & Energy',
    badge: 'POWER & ENERGY',
    badgeColor: 'rgba(255, 152, 0, 0.1)',
    badgeTextColor: '#ff9800',
    description: 'We help power producers and utilities transition into a smarter, more resilient future.',
    detailDescription: 'Our team delivers integrated control and monitoring systems that optimize generation, transmission, and distribution performance. Whether supporting conventional or renewable energy projects, TLE ensures operational continuity, efficiency, and safety.',
    image: 'https://images.unsplash.com/photo-1510495760542-cbdff3ea7707?w=600&q=75&fm=webp&fit=crop',
    imageAlt: 'Power & Energy Industry',
    solutions: [
      'Power System Automation (Substation & Distribution)',
      'SCADA and EMS Integration',
      'Load Monitoring and Control',
      'Renewable Energy Management Systems',
      'Predictive Maintenance and Analytics'
    ]
  },
  {
    id: 'water-utilities',
    icon: Waves,
    title: 'Water & Utilities',
    badge: 'WATER & UTILITIES',
    badgeColor: 'rgba(220, 53, 69, 0.1)',
    badgeTextColor: '#dc3545',
    description: 'Reliable, intelligent control is the backbone of modern utility systems.',
    detailDescription: 'TLE designs and integrates smart monitoring and control systems for water treatment, pumping, and distribution networks. Our solutions help operators improve efficiency, reduce energy consumption, and ensure continuous service to communities.',
    image: 'https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?w=600&q=75&fm=webp&fit=crop',
    imageAlt: 'Water & Utilities Industry',
    solutions: [
      'Pipeline Leak Detection & Monitoring',
      'SCADA & Control System Integration',
      'Remote Terminal Units (RTU) for Pumping Stations',
      'Flow and Pressure Monitoring',
      'Smart Metering Integration',
      'Energy and Efficiency Optimization'
    ]
  },
  {
    id: 'telecom-infrastructure',
    icon: RadioTower,
    title: 'Telecommunications & Infrastructure',
    badge: 'TELECOM & INFRASTRUCTURE',
    badgeColor: 'rgba(103, 58, 183, 0.1)',
    badgeTextColor: '#673ab7',
    description: 'In a connected world, communication is key to performance and safety.',
    detailDescription: 'TLE provides robust telecom and networking solutions that connect field systems, control centers, and enterprise networks securely and efficiently. We design and deploy communication architectures that support mission-critical applications and real-time data flow.',
    image: 'https://images.unsplash.com/photo-1761984752665-565b876e34ab?w=600&q=75&fm=webp&fit=crop',
    imageAlt: 'Telecommunications & Infrastructure',
    solutions: [
      'Industrial Communication Systems (Fiber, Wireless, IP)',
      'Network Design and Cybersecurity',
      'Telecom Integration for SCADA & RTU Networks',
      'Redundant Communication Links',
      'Remote Monitoring Solutions'
    ]
  },
  {
    id: 'transportation-smart-infrastructure',
    icon: Train,
    title: 'Transportation & Smart Infrastructure',
    badge: 'TRANSPORTATION & SMART INFRASTRUCTURE',
    badgeColor: 'rgba(0, 150, 136, 0.1)',
    badgeTextColor: '#009688',
    description: 'Modern infrastructure requires intelligent systems to operate safely and efficiently.',
    detailDescription: 'TLE supports transportation and smart city projects with advanced control, monitoring, and data integration systems. From traffic management to pipeline corridors and critical infrastructure, our solutions deliver reliability and insight.',
    image: 'https://images.unsplash.com/photo-1759138623649-0aca1b50b51d?w=600&q=75&fm=webp&fit=crop',
    imageAlt: 'Transportation & Smart Infrastructure',
    solutions: [
      'Smart Infrastructure Monitoring',
      'Control & Safety Systems for Transport Networks',
      'Data Integration and Visualization Platforms',
      'Communication & Fiber Sensing Solutions',
      'Remote Control and Maintenance Platforms'
    ]
  },
  {
    id: 'perimeter-security-fos',
    icon: Shield,
    title: 'Perimeter Security Using Fiber Optic Sensing (FOS)',
    badge: 'PERIMETER SECURITY',
    badgeColor: 'rgba(76, 175, 80, 0.1)',
    badgeTextColor: '#4caf50',
    description: 'Securing critical infrastructure requires constant awareness and rapid response — and that\'s exactly what TLE\'s Fiber Optic Sensing (FOS) technology delivers.',
    detailDescription: 'By utilizing Distributed Acoustic Sensing (DAS)/Distributed Vibration Sensing (DVS) and Distributed Temperature Sensing (DTS) technologies, we transform a standard fiber optic cable into a powerful, real-time perimeter monitoring network capable of detecting, classifying, and locating any intrusion or disturbance along protected boundaries. Our FOS-based perimeter security systems are ideal for pipelines, power plants, refineries, data centers, and border protection, offering continuous monitoring with zero blind spots and no need for active field electronics.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75&fm=webp&fit=crop',
    imageAlt: 'Perimeter Security Using FOS',
    solutions: [
      'Real-time detection of movement, vibration, and intrusion attempts',
      'Long-range coverage (up to 100 km per channel)',
      'AI-based event classification to distinguish between human activity, vehicles, and environmental noise',
      'Seamless integration with SCADA, CCTV, and alarm systems',
      'Maintenance-free sensing infrastructure with passive optical cables',
      'Designed for critical sites, industrial facilities, and national border protection'
    ]
  }
];

interface IndustriesPageProps {
  onNavigate: (page: Page) => void;
}

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const industryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndustry = (index: number) => {
    const element = industryRefs.current[index];
    if (element) {
      const yOffset = -160;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveIndustry(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      for (let i = industryRefs.current.length - 1; i >= 0; i--) {
        const element = industryRefs.current[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveIndustry(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main role="main" aria-label="Industries page">
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
                Industries We Serve
              </div>
              <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Critical Infrastructure Excellence
              </h1>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                At TLE, we deliver intelligent engineering and integration solutions that empower critical industries to operate smarter, safer, and more efficiently.
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

        {/* Industry Navigation Tabs */}
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
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  const isActive = activeIndustry === index;
                  return (
                    <button
                      key={industry.id}
                      onClick={() => scrollToIndustry(index)}
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
                      <span>{industry.title}</span>
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

        {/* Industries Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Sectors We Empower
              </h2>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Our expertise spans multiple sectors — providing each client with tailored systems that meet the highest international standards
              </p>
            </div>

            {/* Industry Cards */}
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={industry.id} className="mb-16" ref={el => industryRefs.current[index] = el}>
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
                          src={industry.image}
                          alt={industry.imageAlt}
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
                            background: industry.badgeColor,
                            color: industry.badgeTextColor,
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                            {industry.badge}
                          </span>
                          <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                            {industry.title}
                          </h3>
                          <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                            {industry.description}
                          </p>
                          <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                            {industry.detailDescription}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                              Solutions We Provide:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {industry.solutions.map((solution, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 size={18} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
                                  <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{solution}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-lg border-0 p-4" style={{
                            background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.06) 100%)',
                            border: '1px solid rgba(26, 115, 232, 0.15)'
                          }}>
                            <p className="mb-2" style={{ fontSize: '0.875rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                              <strong>Wherever technology and performance intersect</strong> — TLE is there to bridge the gap between vision and reality.
                            </p>
                            <p className="mb-0" style={{ fontSize: '0.875rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                              Partner with our industry specialists to implement systems that elevate operational excellence.
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
                <Building2 size={48} className="mb-4 mx-auto" style={{ opacity: 0.9 }} />
                <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
                  Your Industry. Our Expertise.
                </h3>
                <p className="mb-8 mx-auto" style={{ fontSize: '1.125rem', opacity: 0.95, maxWidth: '800px' }}>
                  Don't see your industry listed? We serve a wide range of critical infrastructure sectors. Contact us to discuss your specific needs and discover how TLE can help transform your operations.
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
                  <span>Discuss Your Project</span>
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