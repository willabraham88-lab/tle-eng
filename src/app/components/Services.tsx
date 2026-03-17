import { Radio, Zap, Activity, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { mediaAssets } from '../../assets/media';
import { useState } from 'react';
import type { Page } from '../App';

const services = [
  {
    icon: Radio,
    title: 'Communication Systems',
    description: 'Advanced radio communication, SCADA systems, and telemetry solutions for seamless data transmission across your infrastructure. We design and implement robust communication networks that ensure reliable connectivity in the most challenging environments.',
    image: mediaAssets.services.communication.url,
    imageAlt: mediaAssets.services.communication.alt,
    gradient: 'linear-gradient(135deg, rgba(26, 115, 232, 0.9) 0%, rgba(13, 71, 161, 0.9) 100%)',
    details: [
      'Multi-site radio network design and deployment',
      'SCADA system integration and configuration',
      'Real-time telemetry and remote monitoring solutions',
      'Fiber optic and wireless communication infrastructure',
      'Redundant communication pathways for maximum uptime'
    ]
  },
  {
    icon: Zap,
    title: 'Automation & Control',
    description: 'Cutting-edge automation technologies, PLC programming, and control system integration for optimal operational efficiency. Our automation solutions reduce manual intervention, improve accuracy, and enhance overall system performance.',
    image: mediaAssets.services.automation.url,
    imageAlt: mediaAssets.services.automation.alt,
    gradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.9) 0%, rgba(245, 124, 0, 0.9) 100%)',
    details: [
      'Custom PLC and RTU programming and commissioning',
      'HMI/SCADA design and development',
      'Process automation and optimization',
      'Industrial IoT integration and analytics',
      'Legacy system modernization and upgrades'
    ]
  },
  {
    icon: Activity,
    title: 'Pipeline Management',
    description: 'Comprehensive pipeline monitoring, leak detection systems, and pressure management solutions for safe and efficient operations. We provide end-to-end pipeline integrity solutions that protect assets, personnel, and the environment.',
    image: mediaAssets.services.pipeline.url,
    imageAlt: mediaAssets.services.pipeline.alt,
    gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.9) 0%, rgba(56, 142, 60, 0.9) 100%)',
    details: [
      'Advanced leak detection and location systems',
      'Pipeline pressure and flow monitoring',
      'Cathodic protection monitoring and control',
      'Pipeline integrity management systems',
      'Emergency shutdown and safety systems'
    ]
  },
];

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-12" style={{ 
      background: 'var(--bs-section-bg-lighter)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(26, 115, 232, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(26, 115, 232, 0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container mx-auto max-w-7xl px-4 py-12" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-16">
          <span className="inline-block rounded-full px-4 py-2 mb-4" style={{
            background: 'rgba(26, 115, 232, 0.1)',
            color: 'var(--bs-primary)',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--bs-body-color)' }}>
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-xl mx-auto max-w-3xl" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
            Delivering integrated technologies that power the world's most critical infrastructure systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onNavigate('services')}
              >
                <div 
                  className="h-full border-0 overflow-hidden rounded-3xl group cursor-pointer" 
                  style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: isHovered ? '0 24px 48px rgba(26, 115, 232, 0.2)' : 'var(--glass-shadow)',
                    transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Image Section with Overlay */}
                  <div className="relative overflow-hidden" style={{ height: '280px' }}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: isHovered 
                          ? service.gradient
                          : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
                        transition: 'background 0.5s ease'
                      }}
                    />

                    {/* Icon Badge */}
                    <div 
                      className="absolute top-6 left-6"
                      style={{
                        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <div 
                        className="rounded-xl flex items-center justify-center"
                        style={{
                          width: '64px',
                          height: '64px',
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        <Icon size={32} style={{ color: isHovered ? '#1a73e8' : '#1a73e8' }} />
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 
                        className="text-2xl font-bold text-white mb-2"
                        style={{
                          textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}
                      >
                        {service.title}
                      </h3>
                      <div 
                        className="flex items-center gap-2 text-white"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <span className="text-sm font-semibold">Explore Service</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p 
                      className="mb-4"
                      style={{ 
                        color: 'var(--bs-body-color)', 
                        opacity: 0.8,
                        lineHeight: '1.7',
                        fontSize: '0.95rem'
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Details List */}
                    <div 
                      className="space-y-2"
                      style={{
                        maxHeight: isHovered ? '500px' : '0',
                        opacity: isHovered ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.5s ease'
                      }}
                    >
                      <div 
                        className="pt-4 mb-3"
                        style={{
                          borderTop: '1px solid var(--bs-border-color)'
                        }}
                      >
                        <span className="text-sm font-semibold" style={{ color: 'var(--bs-primary)' }}>
                          Key Capabilities:
                        </span>
                      </div>
                      {service.details.map((detail, detailIndex) => (
                        <div 
                          key={detailIndex} 
                          className="flex items-start gap-2"
                          style={{
                            animation: isHovered ? `slideIn 0.3s ease ${detailIndex * 0.05}s both` : 'none'
                          }}
                        >
                          <div 
                            className="rounded-full flex-shrink-0"
                            style={{
                              width: '6px',
                              height: '6px',
                              background: 'var(--bs-primary)',
                              marginTop: '7px'
                            }}
                          />
                          <span 
                            className="text-sm"
                            style={{ 
                              color: 'var(--bs-body-color)', 
                              opacity: 0.8,
                              lineHeight: '1.6'
                            }}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}