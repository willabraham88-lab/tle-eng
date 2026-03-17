import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

interface Stat {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 15,
    suffix: '+',
    label: 'Years of Combined Experience'
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'Projects Completed'
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction'
  },
  {
    icon: Globe,
    value: 6,
    suffix: '',
    label: 'Countries Served'
  }
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-12" 
      style={{ 
        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container mx-auto max-w-7xl px-4 py-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div 
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
                <div 
                  className="font-bold mb-2"
                  style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: 'white',
                    lineHeight: '1.2'
                  }}
                >
                  {counts[index]}{stat.suffix}
                </div>
                <div 
                  className="font-semibold"
                  style={{ 
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}