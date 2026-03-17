import { ArrowRight, Radio, Zap, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Page } from '../App';

interface FeaturedProjectsProps {
  onNavigate: (page: Page) => void;
}

const projects = [
  {
    id: 1,
    title: 'Integrated SCADA System Deployment',
    description: 'Deployed a comprehensive SCADA system across 15+ remote sites with real-time monitoring and control capabilities, reducing response time by 60%.',
    industry: 'Oil & Gas',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=75&fm=webp&fit=crop',
    results: [
      '60% faster response time',
      '99.9% system uptime',
      '15+ remote sites connected'
    ],
    icon: Radio
  },
  {
    id: 2,
    title: 'Automated Pipeline Control System',
    description: 'Implemented automated pressure control and leak detection systems for 200km pipeline network, improving safety and operational efficiency.',
    industry: 'Utilities',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=75&fm=webp&fit=crop',
    results: [
      '35% efficiency increase',
      'Zero safety incidents',
      '200km network coverage'
    ],
    icon: Zap
  },
  {
    id: 3,
    title: 'Pipeline Integrity Management System',
    description: 'Designed and deployed state-of-the-art pipeline integrity management system with predictive analytics and automated anomaly detection.',
    industry: 'Mining',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=75&fm=webp&fit=crop',
    results: [
      '90% early detection rate',
      '40% maintenance cost reduction',
      'Predictive analytics enabled'
    ],
    icon: Activity
  }
];

export function FeaturedProjects({ onNavigate }: FeaturedProjectsProps) {
  return (
    <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="inline-block rounded-full px-4 py-2 mb-4" style={{
              background: 'rgba(26, 115, 232, 0.1)',
              color: 'var(--bs-primary)',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>
              Featured Projects
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
              Real-world solutions delivering measurable results for critical infrastructure operations
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border-0 cursor-pointer whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
              color: 'white',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(26, 115, 232, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(26, 115, 232, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.3)';
            }}
          >
            View All Projects
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="group">
                <div 
                  className="h-full border-0 overflow-hidden rounded-2xl"
                  style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--bs-border-color)';
                  }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <Icon size={16} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                    </div>

                    {/* Industry Tag */}
                    <div className="absolute bottom-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--bs-body-color)' }}>
                      {project.title}
                    </h3>
                    <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div 
                            className="rounded-full flex-shrink-0"
                            style={{
                              width: '6px',
                              height: '6px',
                              background: 'var(--bs-primary)',
                              marginTop: '6px'
                            }}
                          />
                          <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.8 }}>
                            {result}
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
    </section>
  );
}