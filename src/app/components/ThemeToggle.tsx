import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Safety check for SSR
    if (typeof window === 'undefined') return;
    
    // Check for device preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-bs-theme', initialTheme);

    // Listen for changes to data-bs-theme attribute (keeps multiple instances in sync)
    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute('data-bs-theme') as 'light' | 'dark' | null;
      if (current) {
        setTheme(current);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    // Listen for changes in system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-bs-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2 rounded-full p-0 border-0 cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={theme === 'dark'}
      style={{
        width: '64px',
        height: '32px',
        backgroundColor: theme === 'dark' 
          ? (isHovered ? 'rgba(26, 115, 232, 0.3)' : 'rgba(26, 115, 232, 0.2)') 
          : (isHovered ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.1)'),
        position: 'relative',
        transition: 'all 0.3s ease',
        padding: '4px',
        // Ensure touch targets are large enough on mobile
        minWidth: '64px',
        minHeight: '32px',
        touchAction: 'manipulation', // Prevent double-tap zoom on mobile
        WebkitTapHighlightColor: 'transparent' // Remove tap highlight on iOS
      }}
    >
      {/* Toggle Track Icons */}
      <div 
        className="flex items-center justify-center"
        style={{
          position: 'absolute',
          left: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: theme === 'light' ? 0.5 : 0.3,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none' // Prevent interference with click events
        }}
      >
        <Sun size={14} style={{ color: theme === 'light' ? '#f59e0b' : 'var(--bs-body-color)' }} />
      </div>
      <div 
        className="flex items-center justify-center"
        style={{
          position: 'absolute',
          right: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: theme === 'dark' ? 0.5 : 0.3,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none' // Prevent interference with click events
        }}
      >
        <Moon size={14} style={{ color: theme === 'dark' ? '#60a5fa' : 'var(--bs-body-color)' }} />
      </div>

      {/* Toggle Thumb */}
      <div 
        style={{
          position: 'absolute',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transform: theme === 'dark' ? 'translateX(32px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          left: '4px',
          top: '50%',
          marginTop: '-12px',
          pointerEvents: 'none', // Prevent interference with click events
          willChange: 'transform' // Optimize for animation performance
        }}
      >
        {theme === 'light' ? (
          <Sun size={14} style={{ color: '#f59e0b' }} />
        ) : (
          <Moon size={14} style={{ color: '#60a5fa' }} />
        )}
      </div>
    </button>
  );
}