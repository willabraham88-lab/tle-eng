import { Shield, Award, Users, Target, Zap, TrendingUp, Clock, Settings, Sparkles, Building2, Cpu, Network, Radio, Wrench, Lightbulb, BadgeCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main role="main" aria-label="About page">
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
                About TLE Ltd.
              </div>
              <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Engineering Excellence for Critical Infrastructure
              </h1>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                For over 25 years, Telemetry & Logic Engineering has been at the forefront of designing, integrating, and supporting advanced communication, automation, and pipeline management technologies.
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

        {/* Who We Are Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Trusted Partners in Critical Infrastructure
              </h2>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '900px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Telemetry & Logic Engineering (TLE) Ltd. is a private limited company incorporated under the laws of England and Wales, headquartered in Aberdeen, Scotland.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
              {/* Left Column - Image and Location Card */}
              <div className="lg:col-span-5">
                <div className="relative h-full">
                  {/* Main Image */}
                  <div className="rounded-2xl overflow-hidden shadow-lg mb-4" style={{ height: '320px' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1738918937796-743064feefa1?w=600&q=75&fm=webp&fit=crop"
                      alt="Industrial Control Room"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  
                  {/* Location & Info Card */}
                  <div className="border-0 shadow-sm rounded-2xl" style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)'
                  }}>
                    <div className="p-4">
                      <div className="flex items-start gap-3 mb-3 pb-3" style={{ borderBottom: '1px solid var(--bs-border-color)' }}>
                        <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                        }}>
                          <Building2 size={24} className="text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm mb-1" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Headquarters</div>
                          <div className="font-semibold" style={{ color: 'var(--bs-body-color)' }}>Aberdeen, Scotland</div>
                          <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>United Kingdom</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                        }}>
                          <Award size={24} className="text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm mb-1" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Legal Status</div>
                          <div className="font-semibold" style={{ color: 'var(--bs-body-color)' }}>Private Limited Company</div>
                          <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>England & Wales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7">
                {/* Specialized Engineering House Card */}
                <div className="border-0 shadow-sm mb-4 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.06) 0%, rgba(13, 71, 161, 0.04) 100%)',
                  border: '1px solid rgba(26, 115, 232, 0.1)'
                }}>
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl inline-flex items-center justify-center shrink-0" style={{
                        width: '56px',
                        height: '56px',
                        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                      }}>
                        <Settings size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Specialized Engineering House
                        </h3>
                        <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                          We are dedicated to the design, integration, and lifecycle support of advanced communication, automation, and pipeline management technologies for critical infrastructure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Expertise Card */}
                <div className="border-0 shadow-sm mb-4 rounded-2xl" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-xl inline-flex items-center justify-center shrink-0" style={{
                        width: '56px',
                        height: '56px',
                        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                      }}>
                        <Zap size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Core Expertise
                        </h3>
                        <p className="mb-3" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                          Our expertise lies in the end-to-end engineering, supply, installation, testing, and commissioning of mission-critical systems:
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <div className="rounded-full mt-1 shrink-0" style={{
                          width: '8px',
                          height: '8px',
                          background: 'var(--bs-primary)'
                        }}></div>
                        <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Mission-Critical Communication (MCC) Systems</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full mt-1 shrink-0" style={{
                          width: '8px',
                          height: '8px',
                          background: 'var(--bs-primary)'
                        }}></div>
                        <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Remote Terminal Units (RTUs)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full mt-1 shrink-0" style={{
                          width: '8px',
                          height: '8px',
                          background: 'var(--bs-primary)'
                        }}></div>
                        <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>SCADA Interfaces</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full mt-1 shrink-0" style={{
                          width: '8px',
                          height: '8px',
                          background: 'var(--bs-primary)'
                        }}></div>
                        <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Pipeline Monitoring Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Technologies Card */}
                <div className="border-0 shadow-sm rounded-2xl" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-xl inline-flex items-center justify-center shrink-0" style={{
                        width: '56px',
                        height: '56px',
                        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                      }}>
                        <Network size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Cutting-Edge Platforms
                        </h3>
                        <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                          Leveraging distributed fiber-optic sensing (DFOS), real-time transient modeling (RTTM/E-RTTM), and next-generation metering and instrumentation to achieve the highest standards of reliability, precision, and regulatory compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats/Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border-0 h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.06) 100%)',
                border: '1px solid rgba(26, 115, 232, 0.15)'
              }}>
                <div className="p-4 text-center">
                  <Shield size={32} style={{ color: 'var(--bs-primary)' }} className="mb-2 inline-block" />
                  <h4 className="mb-2" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Multi-Disciplinary Capability
                  </h4>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Combining engineering expertise with strong project management and procurement governance
                  </p>
                </div>
              </div>
              <div className="border-0 h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.06) 100%)',
                border: '1px solid rgba(26, 115, 232, 0.15)'
              }}>
                <div className="p-4 text-center">
                  <Target size={32} style={{ color: 'var(--bs-primary)' }} className="mb-2 inline-block" />
                  <h4 className="mb-2" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Rigorous Standards
                  </h4>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Every deployment meets technical specifications, operational KPIs, and international standards
                  </p>
                </div>
              </div>
              <div className="border-0 h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.06) 100%)',
                border: '1px solid rgba(26, 115, 232, 0.15)'
              }}>
                <div className="p-4 text-center">
                  <Clock size={32} style={{ color: 'var(--bs-primary)' }} className="mb-2 inline-block" />
                  <h4 className="mb-2" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    24/7 Support
                  </h4>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Continuous operational support ensuring mission-critical systems remain reliable and efficient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-lighter)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full px-3 py-2 mb-3" style={{
                background: 'rgba(26, 115, 232, 0.1)',
                color: 'var(--bs-primary)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                What We Do
              </span>
              <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Empowering Industrial Engineers
              </h2>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                We advance innovation and excellence in industrial engineering through collaboration and knowledge-sharing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-2xl inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Zap size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Enhanced Efficiency
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Optimizing processes and systems for maximum productivity and cost-effectiveness.
                  </p>
                </div>
              </div>

              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-2xl inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Users size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Professional Development
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Providing resources and opportunities for continuous learning and career advancement.
                  </p>
                </div>
              </div>

              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-2xl inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <TrendingUp size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Industry Advocacy
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Promoting the value of industrial engineering in driving sustainable industrial growth.
                  </p>
                </div>
              </div>

              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-2xl inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Sparkles size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Innovation & Excellence
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Driving continuous improvement through cutting-edge engineering methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Our Core Capabilities
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Comprehensive expertise across critical infrastructure technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-full inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Radio size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                    Communication Systems
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Radio networks, fiber optics, satellite communications, and telemetry solutions for remote monitoring and control.
                  </p>
                </div>
              </div>
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-full inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Cpu size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                    Automation & Control
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    SCADA systems, PLC programming, HMI development, and industrial automation for optimal operational efficiency.
                  </p>
                </div>
              </div>
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-full inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Network size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                    Pipeline Management
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Leak detection, flow monitoring, pressure management, and comprehensive pipeline integrity solutions.
                  </p>
                </div>
              </div>
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="p-4 text-center">
                  <div className="rounded-full inline-flex items-center justify-center mb-3" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                  }}>
                    <Settings size={36} style={{ color: 'var(--bs-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                    Integration & Support
                  </h3>
                  <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    System integration, commissioning, training, maintenance, and 24/7 technical support services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose TLE - 5 Key Differentiators */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-lighter)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full px-3 py-2 mb-3" style={{
                background: 'rgba(26, 115, 232, 0.1)',
                color: 'var(--bs-primary)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Why Choose TLE
              </span>
              <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Our Competitive Advantage
              </h2>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Five key differentiators that set us apart in the critical infrastructure engineering sector.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              {/* Industry Expertise */}
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.04) 0%, rgba(13, 71, 161, 0.02) 100%)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Award size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Industry Expertise
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Deep knowledge of communications, control, and automation systems backed by decades of real-world experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Solutions */}
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.04) 0%, rgba(13, 71, 161, 0.02) 100%)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Settings size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Custom Solutions
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Tailored designs that precisely match client requirements and operational needs, not one-size-fits-all approaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation */}
              <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.04) 0%, rgba(13, 71, 161, 0.02) 100%)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Lightbulb size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Innovation
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Adoption of the latest technologies and methodologies to ensure future-ready, scalable systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reliability */}
              <div className="lg:col-span-3 xl:col-span-1 lg:col-start-1 xl:col-start-auto border-0 shadow-sm h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.04) 0%, rgba(13, 71, 161, 0.02) 100%)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <BadgeCheck size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Reliability
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Proven track record in delivering mission-critical systems that operate flawlessly in the most demanding environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* End-to-End Support */}
              <div className="lg:col-span-3 xl:col-span-2 border-0 shadow-sm h-full rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.04) 0%, rgba(13, 71, 161, 0.02) 100%)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Wrench size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        End-to-End Support
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        From concept design and engineering to commissioning and maintenance—comprehensive lifecycle support at every stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="border-0 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
              color: 'white'
            }}>
              <div className="p-8 md:p-12 text-center">
                <Target size={48} className="mb-3 inline-block" style={{ opacity: 0.9 }} />
                <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Committed to Excellence
                </h3>
                <p className="mb-0 mx-auto" style={{ fontSize: '1.125rem', opacity: 0.95, maxWidth: '900px' }}>
                  These differentiators combine to deliver unmatched value to our clients—ensuring projects are completed to the highest standards while maintaining operational safety, regulatory compliance, and long-term system performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="flex justify-center">
              <div className="w-full lg:w-10/12">
                <div className="text-center mb-12">
                  <span className="inline-block rounded-full px-3 py-2 mb-3" style={{
                    background: 'rgba(26, 115, 232, 0.1)',
                    color: 'var(--bs-primary)',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Our Vision
                  </span>
                  <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                    Global Benchmark in Critical Infrastructure
                  </h2>
                  <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Looking forward, our vision is to be recognized as a global benchmark in communications, automation, and pipeline integrity solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)'
                  }}>
                    <div className="p-4 text-center">
                      <div className="rounded-xl inline-flex items-center justify-center mb-3" style={{
                        width: '72px',
                        height: '72px',
                        background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                      }}>
                        <Sparkles size={36} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                      <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                        Continuous Innovation
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Committed to ongoing research and investment in emerging technologies to deliver cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                  <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)'
                  }}>
                    <div className="p-4 text-center">
                      <div className="rounded-xl inline-flex items-center justify-center mb-3" style={{
                        width: '72px',
                        height: '72px',
                        background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                      }}>
                        <Network size={36} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                      <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                        Digital Transformation
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Adopting edge computing, industrial cybersecurity, and data-driven optimization for enhanced performance.
                      </p>
                    </div>
                  </div>
                  <div className="border-0 shadow-sm h-full rounded-2xl" style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)'
                  }}>
                    <div className="p-4 text-center">
                      <div className="rounded-xl inline-flex items-center justify-center mb-3" style={{
                        width: '72px',
                        height: '72px',
                        background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)'
                      }}>
                        <TrendingUp size={36} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                      <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                        Sustainable Operations
                      </h3>
                      <p className="mb-0 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Empowering clients to achieve greater operational safety, efficiency, and sustainability in a complex world.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-0 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.08) 100%)',
                  border: '1px solid rgba(26, 115, 232, 0.15)'
                }}>
                  <div className="p-8 md:p-12">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl flex items-center justify-center shrink-0" style={{
                        width: '56px',
                        height: '56px',
                        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                      }}>
                        <Target size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Aligned with Market Demands
                        </h3>
                        <p className="mb-0" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                          Our teams combine technical depth with execution efficiency, ensuring projects are delivered on schedule, on budget, and to world-class engineering quality. By aligning our expertise with evolving market demands, we empower our clients to achieve greater operational safety, efficiency, and sustainability in a world of growing complexity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-lighter)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="p-8 md:p-12 text-center" style={{
                background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                color: 'white'
              }}>
                <Building2 size={48} className="mb-3 inline-block" style={{ opacity: 0.9 }} />
                <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700' }}>
                  Ready to Transform Your Operations?
                </h2>
                <p className="mb-8 mx-auto" style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '700px' }}>
                  Let's discuss how TLE can help you achieve operational excellence with proven engineering solutions tailored to your critical infrastructure needs.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="px-8 md:px-12 py-3 rounded-lg border-0 cursor-pointer" 
                    style={{
                      background: 'white',
                      color: '#1a73e8',
                      fontWeight: '600',
                      fontSize: '1rem',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Get In Touch
                  </button>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="px-8 md:px-12 py-3 rounded-lg cursor-pointer" 
                    style={{
                      background: 'transparent',
                      color: 'white',
                      border: '2px solid white',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}