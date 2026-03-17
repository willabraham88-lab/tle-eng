import { Contact } from '../components/Contact';
import { MapPin, Phone, Mail, Clock, Sparkles, Building2, Users, Headphones, Award } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-12 pt-3 md:pt-4 relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.08) 100%)',
        borderBottom: '1px solid var(--bs-border-color)',
        marginTop: '-76px',
        paddingTop: '76px'
      }}>
        {/* Animated background circles */}
        <div className="absolute" style={{
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26, 115, 232, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div className="absolute" style={{
          bottom: '-10%',
          left: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative" style={{ paddingTop: '100px', paddingBottom: '3rem' }}>
          <div className="text-center px-3">
            <div className="mb-3 inline-block" style={{
              padding: '8px 16px',
              background: 'rgba(26, 115, 232, 0.1)',
              border: '1px solid rgba(26, 115, 232, 0.2)',
              borderRadius: '20px',
              color: 'var(--bs-primary)',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <Sparkles size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Get In Touch
            </div>
            <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
              Let's Start a Conversation
            </h1>
            <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
              Ready to discuss your infrastructure needs? Our team of experts is here to provide tailored solutions for your projects.
            </p>
          </div>
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Additional Contact Methods */}
      <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Other Ways to Reach Us
              </h2>
              <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Choose the communication method that works best for you. We're here to help in whatever way is most convenient.
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center p-3 rounded-xl" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <div className="flex items-center justify-center rounded-full shrink-0" style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                    marginRight: '12px'
                  }}>
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--bs-body-color)' }}>
                      Emergency Hotline
                    </div>
                    <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                      Available 24/7 for urgent matters
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-xl" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <div className="flex items-center justify-center rounded-full shrink-0" style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                    marginRight: '12px'
                  }}>
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--bs-body-color)' }}>
                      General Inquiries
                    </div>
                    <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                      contact@tle-eng.co.uk
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-xl" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <div className="flex items-center justify-center rounded-full shrink-0" style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                    marginRight: '12px'
                  }}>
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--bs-body-color)' }}>
                      Office Locations
                    </div>
                    <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                      Multiple regions served globally
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 text-center rounded-3xl" style={{
              background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
              color: 'white'
            }}>
              <Clock size={64} className="mb-4 mx-auto" style={{ opacity: 0.9 }} />
              <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>Business Hours</h3>
              <div className="mb-4" style={{ fontSize: '15px', opacity: 0.9 }}>
                <div className="mb-2">
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                </div>
                <div className="mb-2">
                  <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                </div>
                <div>
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
              <div className="mt-4 pt-3" style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '14px',
                opacity: 0.8
              }}>
                Emergency support available 24/7
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}