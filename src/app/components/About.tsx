import { Shield, Award, Users, Wrench } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { mediaAssets } from '../../assets/media';

const capabilities = [
  {
    icon: Shield,
    title: 'Security',
    description: 'Robust security measures to protect your critical infrastructure.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'High-quality solutions that meet the highest industry standards.'
  },
  {
    icon: Users,
    title: 'Expertise',
    description: 'A team of experienced engineers with deep industry knowledge.'
  },
  {
    icon: Wrench,
    title: 'Innovation',
    description: 'Innovative technology solutions to advance critical infrastructure.'
  }
];

export function About() {
  return (
    <section id="about" className="py-12" style={{ background: 'var(--bs-section-bg-lighter)' }}>
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--bs-body-color)' }}>
              About TLE Ltd.
            </h2>
            <div className="space-y-4" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
              <p>
                Telemetry & Logic Engineering (TLE) Ltd. is a specialized engineering firm dedicated to advancing critical infrastructure through innovative technology solutions. Since our establishment, we have been at the forefront of engineering excellence, serving as a trusted partner for organizations operating mission-critical systems worldwide.
              </p>
              <p>
                With deep expertise in communication systems, industrial automation, and pipeline management, we serve clients across oil & gas, utilities, water treatment, mining, and transportation sectors. Our comprehensive approach combines cutting-edge technology with proven engineering methodologies to deliver solutions that stand the test of time.
              </p>
              <p>
                Our team of experienced engineers combines technical excellence with practical industry knowledge to deliver reliable, scalable solutions that meet the demanding requirements of critical infrastructure operations. We understand that downtime is not an option in your operations, which is why our solutions are built with redundancy, reliability, and resilience at their core.
              </p>
              <p>
                From initial consultation through design, implementation, and ongoing support, TLE Ltd. partners with you at every stage of your project lifecycle. Our commitment to quality and customer satisfaction has made us the preferred choice for organizations that cannot compromise on performance, safety, or reliability.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=600&q=75&fm=webp&fit=crop"
                alt="Pipeline control room with multiple monitoring screens for critical infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="grid grid-cols-1 gap-6 mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Our Core Values</h3>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
              These principles guide every project we undertake and every relationship we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-0 h-full rounded-2xl" style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              background: 'var(--glass-bg)',
              border: '0.5px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              <div className="p-6 text-center">
                <Shield size={40} className="text-blue-600 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--bs-body-color)' }}>Safety First</h4>
                <p className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                  We prioritize the safety of personnel, equipment, and the environment in every solution we deliver. Our systems are designed with multiple layers of protection to ensure safe operations under all conditions.
                </p>
              </div>
            </div>
            <div className="border-0 h-full rounded-2xl" style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              background: 'var(--glass-bg)',
              border: '0.5px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              <div className="p-6 text-center">
                <Award size={40} className="text-blue-600 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--bs-body-color)' }}>Uncompromising Quality</h4>
                <p className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                  We maintain the highest standards in engineering, from design through implementation. Our quality assurance processes ensure that every component meets or exceeds industry standards and client expectations.
                </p>
              </div>
            </div>
            <div className="border-0 h-full rounded-2xl" style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              background: 'var(--glass-bg)',
              border: '0.5px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              <div className="p-6 text-center">
                <Users size={40} className="text-blue-600 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--bs-body-color)' }}>Client Partnership</h4>
                <p className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                  We build long-term relationships based on trust, transparency, and mutual success. Your goals become our goals, and we work collaboratively to achieve exceptional results that drive your business forward.
                </p>
              </div>
            </div>
            <div className="border-0 h-full rounded-2xl" style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              background: 'var(--glass-bg)',
              border: '0.5px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              <div className="p-6 text-center">
                <Wrench size={40} className="text-blue-600 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--bs-body-color)' }}>Continuous Innovation</h4>
                <p className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                  We stay at the forefront of technological advancement, constantly researching and adopting new technologies that can benefit our clients while maintaining the reliability they depend on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}