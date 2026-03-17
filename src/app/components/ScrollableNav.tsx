import { useRef, useState, useEffect, useCallback, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollableNavProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollableNav({ children, className = '', style }: ScrollableNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const threshold = 4;
    setCanScrollLeft(el.scrollLeft > threshold);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - threshold);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Left fade + arrow */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center pointer-events-none"
        style={{
          width: '64px',
          background: 'linear-gradient(to right, var(--scrollnav-fade, rgba(255,255,255,0.95)) 30%, transparent 100%)',
          opacity: canScrollLeft ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="pointer-events-auto cursor-pointer rounded-full flex items-center justify-center ml-1"
          style={{
            width: '32px',
            height: '32px',
            background: 'var(--glass-bg, rgba(255,255,255,0.7))',
            border: '0.5px solid var(--glass-border, rgba(0,0,0,0.1))',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            color: 'var(--bs-primary, #1a73e8)',
            opacity: canScrollLeft ? 1 : 0,
            transition: 'opacity 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          tabIndex={canScrollLeft ? 0 : -1}
        >
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {/* Right fade + arrow */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end pointer-events-none"
        style={{
          width: '64px',
          background: 'linear-gradient(to left, var(--scrollnav-fade, rgba(255,255,255,0.95)) 30%, transparent 100%)',
          opacity: canScrollRight ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="pointer-events-auto cursor-pointer rounded-full flex items-center justify-center mr-1"
          style={{
            width: '32px',
            height: '32px',
            background: 'var(--glass-bg, rgba(255,255,255,0.7))',
            border: '0.5px solid var(--glass-border, rgba(0,0,0,0.1))',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            color: 'var(--bs-primary, #1a73e8)',
            opacity: canScrollRight ? 1 : 0,
            transition: 'opacity 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          tabIndex={canScrollRight ? 0 : -1}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}