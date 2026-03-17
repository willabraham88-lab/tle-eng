import { ImageWithFallback } from './figma/ImageWithFallback';
import { mediaAssets } from '../../assets/media';
import { Zap, Shield, Gauge } from 'lucide-react';
import type { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: '60vh', marginTop: '-76px', paddingTop: '200px' }}>
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <ImageWithFallback
          src={mediaAssets.hero.background}
          alt={mediaAssets.hero.backgroundAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(26,115,232,0.4))' }} />
      </div>

      {/* Animated background circles */}
      <div className="absolute" style={{
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26, 115, 232, 0.2) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 1
      }}></div>
      <div className="absolute" style={{
        bottom: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13, 71, 161, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite reverse',
        zIndex: 1
      }}></div>

      {/* Content */}
      <div className="relative container mx-auto max-w-7xl px-4 py-20 text-center flex flex-col justify-center" style={{ zIndex: 10, minHeight: '600px' }}>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Engineering Excellence for
          <br />
          <span className="text-blue-500">Critical Infrastructure</span>
        </h1>
        <p className="text-2xl text-gray-300 mb-12 mx-auto max-w-3xl">
          Specialized solutions in communication systems, automation technologies, and pipeline management for mission-critical operations
        </p>
        
        {/* Icon Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl" style={{
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Zap size={32} className="text-blue-500 mb-2 mx-auto" />
            <div className="text-sm text-white">Advanced Technology</div>
          </div>
          <div className="p-4 rounded-xl" style={{
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Shield size={32} className="text-blue-500 mb-2 mx-auto" />
            <div className="text-sm text-white">Proven Reliability</div>
          </div>
          <div className="p-4 rounded-xl" style={{
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Gauge size={32} className="text-blue-500 mb-2 mx-auto" />
            <div className="text-sm text-white">24/7 Support</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('services')} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Explore Our Services
          </button>
          <button 
            onClick={() => onNavigate('contact')} 
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Add floating keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </section>
  );
}