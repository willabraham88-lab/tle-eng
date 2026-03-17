import { useState, useEffect, memo } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header = memo(function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Safety check for SSR
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Check initial theme
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const isDark = currentTheme === 'dark';
      setIsDarkMode(isDark);
    };

    // Check on mount
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full" style={{ 
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      backgroundColor: isDarkMode 
        ? 'rgba(28, 28, 30, 0.72)' 
        : 'rgba(255, 255, 255, 0.72)',
      borderBottom: isDarkMode 
        ? '0.5px solid rgba(255, 255, 255, 0.12)' 
        : '0.5px solid rgba(0, 0, 0, 0.08)',
      boxShadow: isDarkMode
        ? '0 1px 8px rgba(0, 0, 0, 0.5)'
        : '0 1px 8px rgba(0, 0, 0, 0.04)',
      zIndex: 1000
    }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigate('home')} 
            className="flex items-center text-decoration-none border-0 bg-transparent p-0 gap-3" 
            style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
          >
            <ImageWithFallback 
              src="https://tle-eng.com/tle-logo.svg"
              alt="TLE Logo"
              style={{ 
                height: 'clamp(32px, 5vw, 40px)', 
                width: 'auto',
                display: 'block'
              }}
            />
            <div className="flex flex-col items-start">
              <div className="font-semibold" style={{ fontSize: 'clamp(11px, 2.5vw, 14px)', color: 'var(--bs-body-color)', lineHeight: '1.2', letterSpacing: '0.3px' }}>
                TELEMETRY & LOGIC ENGINEERING
              </div>
              <div style={{ fontSize: 'clamp(8px, 1.8vw, 10px)', letterSpacing: '0.5px', lineHeight: '1.2', marginTop: '2px', color: 'var(--bs-body-color)', opacity: 0.6 }}>
                ENGINEERING MEETS EXCELLENCE
              </div>
            </div>
          </button>

          {/* Desktop Navigation - aligned to the right */}
          <div className="hidden lg:flex items-center gap-1">
            <nav className="flex items-center gap-0" role="navigation" aria-label="Main navigation">
              {[
                { page: 'home' as Page, label: 'Home' },
                { page: 'about' as Page, label: 'About' },
                { page: 'products' as Page, label: 'Products' },
                { page: 'services' as Page, label: 'Services' },
                { page: 'industries' as Page, label: 'Industries' },
                { page: 'projects' as Page, label: 'Projects' },
                { page: 'contact' as Page, label: 'Contact' }
              ].map((item, index) => (
                <button 
                  key={item.page}
                  onClick={() => handleNavigate(item.page)} 
                  className={`px-3 py-2 rounded cursor-pointer border-0 ${currentPage === item.page ? 'font-semibold' : ''}`}
                  aria-label={`Navigate to ${item.label} page`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                  style={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: currentPage === item.page ? 'var(--bs-primary)' : 'var(--bs-body-color)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                    e.currentTarget.style.color = 'var(--bs-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = currentPage === item.page ? 'var(--bs-primary)' : 'var(--bs-body-color)';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center gap-3 ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 border-0 bg-transparent cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              style={{ 
                color: 'var(--bs-body-color)',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className="lg:hidden overflow-hidden"
          style={{
            maxHeight: mobileMenuOpen ? '600px' : '0',
            transition: 'max-height 0.3s ease-in-out',
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
            transitionProperty: 'max-height, opacity, transform'
          }}
        >
          <nav className="py-3 border-t mt-3" style={{ borderColor: 'var(--bs-border-color)' }}>
            {[
              { page: 'home' as Page, label: 'Home' },
              { page: 'about' as Page, label: 'About' },
              { page: 'products' as Page, label: 'Products' },
              { page: 'services' as Page, label: 'Services' },
              { page: 'industries' as Page, label: 'Industries' },
              { page: 'projects' as Page, label: 'Projects' },
              { page: 'contact' as Page, label: 'Contact' }
            ].map((item, index) => (
              <button 
                key={item.page}
                onClick={() => handleNavigate(item.page)} 
                className="block px-3 py-3 rounded mb-1 w-full text-left border-0 bg-transparent"
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: currentPage === item.page ? 'var(--bs-primary)' : 'var(--bs-body-color)',
                  transition: 'all 0.2s ease',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                  e.currentTarget.style.paddingLeft = '20px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.paddingLeft = '12px';
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle in Mobile Menu */}
            <div className="px-3 py-3 mt-2 border-t" style={{ 
              borderColor: 'var(--bs-border-color)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.2s ease',
              transitionDelay: mobileMenuOpen ? '300ms' : '0ms'
            }}>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '16px', fontWeight: '500', color: 'var(--bs-body-color)' }}>
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
});