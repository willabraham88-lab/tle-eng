import { Home, Wrench, FolderKanban, Mail, SearchX, ArrowRight } from 'lucide-react';
import type { Page } from '../types';

interface NotFoundPageProps {
  onNavigate: (page: Page) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const navigationCards = [
    {
      icon: Home,
      title: 'Home',
      description: 'Return to our homepage',
      page: 'home' as Page,
      color: '#1a73e8'
    },
    {
      icon: Wrench,
      title: 'Services',
      description: 'Explore our solutions',
      page: 'services' as Page,
      color: '#0d47a1'
    },
    {
      icon: FolderKanban,
      title: 'Projects',
      description: 'View our work',
      page: 'projects' as Page,
      color: '#1565c0'
    },
    {
      icon: Mail,
      title: 'Contact',
      description: 'Get in touch',
      page: 'contact' as Page,
      color: '#1976d2'
    }
  ];

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'var(--bs-body-bg)' }}>
        <div className="max-w-4xl w-full">
          {/* Main 404 Card */}
          <div 
            className="rounded-2xl p-8 md:p-12 mb-8 text-center"
            style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              background: 'var(--glass-bg)',
              border: '0.5px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
            }}
          >
            <div className="mb-6">
              <SearchX 
                size={80} 
                className="mx-auto mb-4" 
                style={{ color: 'var(--bs-primary)', opacity: 0.8 }} 
              />
            </div>
            
            <h1 
              className="mb-4" 
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 6rem)', 
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              404
            </h1>
            
            <h2 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '600', color: 'var(--bs-text-primary)' }}>
              Page Not Found
            </h2>
            
            <p className="mb-8 mx-auto" style={{ 
              fontSize: '1.125rem', 
              color: 'var(--bs-text-secondary)',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track with our critical infrastructure solutions.
            </p>

            {/* Quick Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {navigationCards.map((card) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.page}
                    onClick={() => {
                      onNavigate(card.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 rounded-xl border-0 cursor-pointer transition-all duration-300"
                    style={{
                      backdropFilter: 'saturate(150%) blur(12px)',
                      WebkitBackdropFilter: 'saturate(150%) blur(12px)',
                      background: 'var(--glass-bg)',
                      border: '0.5px solid var(--glass-border)',
                      boxShadow: 'var(--glass-shadow)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    <Icon size={32} className="mx-auto mb-3" style={{ color: card.color }} />
                    <h3 className="mb-1" style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--bs-text-primary)' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--bs-text-secondary)' }}>
                      {card.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Primary CTA */}
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-lg border-0 cursor-pointer px-8 py-4"
              style={{
                background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: '0 8px 24px rgba(26, 115, 232, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(26, 115, 232, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(26, 115, 232, 0.3)';
              }}
            >
              <span>Back to Home</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Engineering Excellence Note */}
          <div className="text-center" style={{ color: 'var(--bs-text-secondary)' }}>
            <p style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
              ENGINEERING = EXCELLENCE
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}