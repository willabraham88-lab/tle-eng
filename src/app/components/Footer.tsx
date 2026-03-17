import { memo } from 'react';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer = memo(function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-4" style={{
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      background: 'var(--glass-bg-strong)',
      borderTop: '0.5px solid var(--glass-border)',
      boxShadow: '0 -1px 8px rgba(0, 0, 0, 0.04)'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
          {/* Logo and Company Name */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col justify-center items-center lg:items-start mb-2">
              <span className="font-semibold" style={{ fontSize: '12px', color: 'var(--bs-body-color)', lineHeight: '1.2', letterSpacing: '0.3px' }}>
                TELEMETRY & LOGIC ENGINEERING (TLE) LTD.
              </span>
              <span style={{ fontSize: '8.5px', letterSpacing: '0.4px', lineHeight: '1.2', marginTop: '2px', color: 'var(--bs-body-color)', opacity: 0.6 }}>
                ENGINEERING MEETS EXCELLENCE
              </span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { page: 'privacy' as Page, label: 'Privacy Policy' },
                { page: 'terms' as Page, label: 'Terms of Service' },
                { page: 'cookies' as Page, label: 'Cookie Policy' }
              ].map((link) => (
                <button 
                  key={link.page}
                  onClick={() => handleNavigate(link.page)} 
                  className="border-0 bg-transparent p-0"
                  style={{
                    color: 'var(--bs-body-color)',
                    opacity: 0.7,
                    transition: 'all 0.2s ease',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--bs-primary)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--bs-body-color)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="mb-0" style={{ 
              color: 'var(--bs-body-color)', 
              opacity: 0.6,
              fontSize: '13px'
            }}>
              © {new Date().getFullYear()} TLE Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});