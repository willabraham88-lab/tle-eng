import { Package, Sparkles, Settings, Activity, Eye, Waves, Wifi, CheckCircle2, ArrowRight, AlertTriangle, Monitor, Cpu } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollableNav } from '../components/ScrollableNav';
import type { Page } from '../types';
import { useState, useRef, useEffect } from 'react';

interface ProductsPageProps {
  onNavigate?: (page: Page) => void;
}

const products = [
  { id: 'pipeline', name: 'Pipeline Management', icon: Activity },
  { id: 'leak-detection', name: 'Leak Detection', icon: AlertTriangle },
  { id: 'fiber-optic', name: 'Fiber Optic Sensing', icon: Waves },
  { id: 'communication', name: 'Communication Systems', icon: Wifi },
  { id: 'rtu', name: 'Remote Terminal Units', icon: Cpu },
  { id: 'hmi', name: 'HMI Integration', icon: Monitor }
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeProduct, setActiveProduct] = useState(0);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToProduct = (index: number) => {
    const element = productRefs.current[index];
    if (element) {
      const yOffset = -160; // Offset for sticky navigation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveProduct(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      for (let i = productRefs.current.length - 1; i >= 0; i--) {
        const element = productRefs.current[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveProduct(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main role="main" aria-label="Products page">
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
                <Package size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Our Products
              </div>
              <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Industry-Leading Solutions for Critical Infrastructure
              </h1>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Explore our comprehensive range of hardware and software products designed to deliver reliable, secure, and efficient operation of critical infrastructure systems.
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

        {/* Product Navigation Tabs */}
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
                {products.map((product, index) => {
                  const Icon = product.icon;
                  const isActive = activeProduct === index;
                  return (
                    <button
                      key={product.id}
                      onClick={() => scrollToProduct(index)}
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
                      <span>{product.name}</span>
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

        {/* Core Products Section */}
        <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Mission-Critical Systems & Solutions
              </h2>
              <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Advanced engineering solutions designed for reliability, safety, and operational excellence
              </p>
            </div>

            {/* Pipeline Management Systems */}
            <div className="mb-16" ref={el => productRefs.current[0] = el}>
              <div className="rounded-xl border-0 shadow-lg overflow-hidden" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-5/12 relative" style={{ minHeight: '400px' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=75&fm=webp&fit=crop"
                      alt="Pipeline Management Systems"
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
                        <Activity size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12">
                    <div className="p-8 lg:p-12">
                      <span className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{
                        background: 'rgba(26, 115, 232, 0.1)',
                        color: 'var(--bs-primary)',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        PIPELINE MANAGEMENT
                      </span>
                      <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Pipeline Management Systems
                      </h3>
                      <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        TLE's Pipeline Management Systems are provided to deliver full operational visibility, control, and safety for critical pipeline networks. Our solutions integrate real-time monitoring, flow and pressure analytics, and automation controls to ensure optimal performance from the control room to the field.
                      </p>
                      <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        With intelligent dashboards, historical data management, and advanced alarm functions, operators can make faster, data-driven decisions that protect assets and reduce downtime.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Key Capabilities:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Real-time Data Acquisition & Visualization',
                            'Flow, Pressure & Temperature Monitoring',
                            'Automated Control & Shutdown Logic',
                            'Leak Detection Integration',
                            'SCADA & Historian Connectivity',
                            'Predictive Maintenance Analytics'
                          ].map((capability, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={18} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
                              <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{capability}</span>
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

            {/* Internal Leak Detection Systems (ILDS, PLDS) */}
            <div className="mb-16" ref={el => productRefs.current[1] = el}>
              <div className="rounded-xl border-0 shadow-lg overflow-hidden" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-5/12 lg:order-2 relative" style={{ minHeight: '400px' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1673115810074-8944eba483f6?w=600&q=75&fm=webp&fit=crop"
                      alt="Oil and Gas Pipeline"
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
                        <AlertTriangle size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12 lg:order-1">
                    <div className="p-8 lg:p-12">
                      <span className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{
                        background: 'rgba(220, 53, 69, 0.1)',
                        color: '#dc3545',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        SAFETY & DETECTION
                      </span>
                      <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Internal Leak Detection Systems (ILDS, PLDS)
                      </h3>
                      <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        At TLE, safety and reliability are at the heart of pipeline operation. Our Internal Leak Detection Systems (ILDS) utilize advanced algorithms — including E-RTTM, Statistical Analysis, and Volume Balance Methods — to detect and localize leaks rapidly and accurately.
                      </p>
                      <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        We combine high-quality instrumentation, redundant communication paths, and real-time data processing to ensure detection sensitivity up to 1% of flow within minutes.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          System Highlights:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Real-Time Transient Model (E-RTTM)',
                            'Negative pressure wave (NPW)',
                            'Statistical & Mass Balance Leak Detection',
                            'Multi-Stage Alarm Logic & Leak Verification',
                            'Integration with SCADA / Historian / Alarm Management',
                            'Time Synchronization and Event Logging'
                          ].map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={18} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
                              <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="mb-2" style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                          Compliance Standards:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['API 1130', 'API 1149', 'API 1155', 'API 1175', 'ISO Standards'].map((std, idx) => (
                            <span key={idx} className="inline-flex items-center px-4 py-2 rounded-md" style={{
                              background: 'rgba(26, 115, 232, 0.1)',
                              color: 'var(--bs-primary)',
                              fontSize: '12px'
                            }}>
                              {std}
                            </span>
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

            {/* Fiber Optic Sensing System (FOS) */}
            <div className="mb-16" ref={el => productRefs.current[2] = el}>
              <div className="rounded-xl border-0 shadow-lg overflow-hidden" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-5/12 relative" style={{ minHeight: '400px' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=75&fm=webp&fit=crop"
                      alt="Fiber Optic Sensing"
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
                        <Waves size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12">
                    <div className="p-8 lg:p-12">
                      <span className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{
                        background: 'rgba(0, 200, 83, 0.1)',
                        color: '#00c853',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        DISTRIBUTED SENSING
                      </span>
                      <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Fiber Optic Sensing System (FOS)
                      </h3>
                      <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Our Fiber Optic Sensing (FOS) technologies transform a single optical cable into a powerful, multi-application monitoring network. By combining Distributed Acoustic (DAS), Temperature (DTS), and Strain (DSS) sensing, TLE delivers continuous, real-time insights across vast infrastructure.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Applications Include:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            'Pipeline Leak & Third-Party Intrusion Detection',
                            'Right-of-Way (ROW) Security and Monitoring',
                            'Perimeter Protection for Industrial Sites',
                            'Temperature Profiling for Process Pipelines',
                            'Power Cable Monitoring (Thermal & Strain)',
                            'Structural Health Monitoring',
                            'Seismic and Vibration Analysis'
                          ].map((app, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Eye size={16} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
                              <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            'Real-Time Distributed Monitoring (DAS/DTS/DSS)',
                            'High Sensitivity and Long-Range Coverage',
                            'Integration with Control Systems and Alarms',
                            'AI-Based Event Classification',
                            'Minimal Maintenance, No Field Electronics'
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
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

            {/* Mission Critical Communication (MCC) Systems */}
            <div className="mb-16" ref={el => productRefs.current[3] = el}>
              <div className="rounded-xl border-0 shadow-lg overflow-hidden" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-5/12 lg:order-2 relative" style={{ minHeight: '400px' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=75&fm=webp&fit=crop"
                      alt="Mission Critical Communication"
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
                        <Wifi size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12 lg:order-1">
                    <div className="p-8 lg:p-12">
                      <span className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{
                        background: 'rgba(156, 39, 176, 0.1)',
                        color: '#9c27b0',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        COMMUNICATION SYSTEMS
                      </span>
                      <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Mission Critical Communication (MCC) Systems
                      </h3>
                      <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Reliable communication is the foundation of safe and efficient operations. TLE designs and implements Mission Critical Communication (MCC) systems that ensure secure, redundant, and uninterrupted data exchange across industrial and energy infrastructures.
                      </p>
                      <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        From pipelines to substations, our MCC platforms support voice, data, and control traffic with guaranteed availability even in harsh environments.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Key Offerings:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Redundant Fiber Optic and Wireless Networks',
                            'IP/MPLS, SDH, and Ethernet-Based Architectures',
                            'Integration with SCADA and Security Systems',
                            'VoIP, Radio, and Telemetry Solutions',
                            'Network Monitoring and Cybersecurity Controls',
                            'Failover and Recovery Design'
                          ].map((offering, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={18} style={{ color: 'var(--bs-primary)', marginTop: '2px', flexShrink: 0 }} />
                              <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{offering}</span>
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

            {/* Remote Terminal Units (RTUs) */}
            <div className="mb-16" ref={el => productRefs.current[4] = el}>
              <div className="rounded-xl border-0 shadow-lg overflow-hidden" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-5/12 relative" style={{ minHeight: '400px' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75&fm=webp&fit=crop"
                      alt="Remote Terminal Units"
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
                        <Cpu size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12">
                    <div className="p-8 lg:p-12">
                      <span className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{
                        background: 'rgba(255, 152, 0, 0.1)',
                        color: '#ff9800',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        CONTROL & AUTOMATION
                      </span>
                      <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Remote Terminal Units (RTUs)
                      </h3>
                      <p className="mb-5" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        TLE's RTU solutions act as the intelligent bridge between field instrumentation and the control room. Designed for reliability, flexibility, and harsh environmental conditions, our RTUs collect, process, and transmit vital data in real-time — ensuring precise monitoring and control of remote assets.
                      </p>
                      <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        We offer both standard and custom-configured RTU platforms tailored for oil & gas, utilities, and industrial applications.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="mb-4" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Modular and Scalable Hardware Architecture',
                            'Support for Multiple Protocols (Modbus, DNP3, IEC, OPC)',
                            'Edge Computing & Local Data Processing',
                            'Built-In Cybersecurity and Encryption',
                            'Seamless Integration with SCADA, PLC, and FOS',
                            'Remote Configuration and Diagnostics'
                          ].map((feature, idx) => (
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

            {/* Digital Assets HMI Integration Software - Coming Soon */}
            <div className="mb-16" ref={el => productRefs.current[5] = el}>
              <div className="rounded-xl border-0 overflow-hidden relative" style={{
                background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.05) 0%, rgba(13, 71, 161, 0.03) 100%)',
                border: '2px dashed rgba(26, 115, 232, 0.3)'
              }}>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-8/12">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-xl inline-flex items-center justify-center p-4" style={{
                          background: 'rgba(26, 115, 232, 0.1)',
                          border: '1px solid rgba(26, 115, 232, 0.2)'
                        }}>
                          <Monitor size={32} style={{ color: 'var(--bs-primary)' }} />
                        </div>
                        <span className="inline-flex items-center px-4 py-2 rounded-full" style={{
                          background: 'rgba(76, 175, 80, 0.1)',
                          color: '#4caf50',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}>
                          COMING SOON
                        </span>
                      </div>
                      <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                        Digital Assets HMI Integration Software
                      </h3>
                      <p className="mb-6" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                        Next-generation Human-Machine Interface platform designed for seamless integration of digital assets across industrial operations. Stay tuned for more information on this groundbreaking solution.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2" style={{ borderColor: 'var(--bs-primary)' }}></div>
                        <span className="text-sm font-semibold" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>In Development</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-4/12 text-center p-8">
                    <Sparkles size={64} className="mb-4 mx-auto" style={{ color: 'var(--bs-primary)', opacity: 0.3 }} />
                    <p className="mb-0 text-sm font-semibold" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                      More Details Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                  onClick={() => onNavigate?.('contact')}
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