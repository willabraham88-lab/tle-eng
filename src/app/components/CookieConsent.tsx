import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import type { Page } from '../App';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieConsentProps {
  onNavigate?: (page: Page) => void;
}

export function CookieConsent({ onNavigate }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      setIsDarkMode(currentTheme === 'dark');
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('tle-cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences and show floating button
      try {
        const saved = JSON.parse(consent);
        setCookiePreferences(saved);
        setShowFloatingButton(true);
      } catch (e) {
        console.error('Error loading cookie preferences:', e);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const prefsWithNecessary = { ...prefs, necessary: true };
    localStorage.setItem('tle-cookie-consent', JSON.stringify(prefsWithNecessary));
    localStorage.setItem('tle-cookie-consent-date', new Date().toISOString());
    setCookiePreferences(prefsWithNecessary);
    setShowBanner(false);
    setShowPreferences(false);
    setShowFloatingButton(true);
    
    // Apply cookie preferences
    applyCookiePreferences(prefsWithNecessary);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Analytics cookies (Google Analytics, etc.)
    if (!prefs.analytics) {
      // Disable analytics tracking
      if (typeof window !== 'undefined') {
        (window as any)['ga-disable-UA-XXXXX-Y'] = true; // Replace with your GA ID
      }
    }

    // Marketing cookies (Facebook Pixel, etc.)
    if (!prefs.marketing) {
      // Disable marketing tracking
      // Add your marketing tracking disable code here
    }

    // Preference cookies
    if (!prefs.preferences) {
      // Clear non-essential preference cookies
      // Note: We keep theme and language preferences as they're essential for UX
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(cookiePreferences);
  };

  const openPreferencesFromButton = () => {
    setShowPreferences(true);
  };

  if (!showBanner && !showPreferences && !showFloatingButton) {
    return null;
  }

  return (
    <>
      {/* Floating Cookie Settings Button */}
      {showFloatingButton && !showBanner && !showPreferences && (
        <button
          onClick={openPreferencesFromButton}
          className="fixed bottom-6 left-6 rounded-full p-3 border-0 cursor-pointer"
          style={{
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            backgroundColor: isDarkMode
              ? 'rgba(28, 28, 30, 0.9)'
              : 'rgba(255, 255, 255, 0.9)',
            border: isDarkMode
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: isDarkMode
              ? '0 4px 16px rgba(0, 0, 0, 0.5)'
              : '0 4px 16px rgba(0, 0, 0, 0.15)',
            zIndex: 999,
            transition: 'all 0.3s ease',
            color: 'var(--bs-body-color)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = isDarkMode
              ? '0 6px 20px rgba(0, 0, 0, 0.6)'
              : '0 6px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = isDarkMode
              ? '0 4px 16px rgba(0, 0, 0, 0.5)'
              : '0 4px 16px rgba(0, 0, 0, 0.15)';
          }}
          aria-label="Cookie Settings"
          title="Cookie Settings"
        >
          <Cookie size={20} style={{ color: 'var(--bs-primary)' }} />
        </button>
      )}

      {/* Cookie Banner */}
      {showBanner && !showPreferences && (
        <div
          className="fixed bottom-0 left-0 right-0 p-4 md:p-6"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          style={{ zIndex: 1050 }}
        >
          <div
            className="mx-auto max-w-6xl rounded-2xl shadow-2xl"
            style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              backgroundColor: isDarkMode
                ? 'rgba(28, 28, 30, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              border: isDarkMode
                ? '1px solid rgba(255, 255, 255, 0.12)'
                : '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: isDarkMode
                ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 rounded-full p-3"
                  style={{
                    backgroundColor: isDarkMode
                      ? 'rgba(77, 159, 255, 0.15)'
                      : 'rgba(26, 115, 232, 0.1)'
                  }}
                >
                  <Cookie
                    size={24}
                    style={{ color: 'var(--bs-primary)' }}
                  />
                </div>

                <div className="flex-1">
                  <h2
                    id="cookie-consent-title"
                    className="mb-3"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--bs-body-color)'
                    }}
                  >
                    Cookie Consent & Privacy
                  </h2>
                  <p
                    id="cookie-consent-description"
                    className="mb-4"
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: 'var(--bs-body-color)',
                      opacity: 0.85
                    }}
                  >
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or reject 
                    non-essential cookies by clicking "Customize".{' '}
                    {onNavigate && (
                      <>
                        Read our{' '}
                        <button
                          onClick={() => {
                            setShowBanner(false);
                            onNavigate('cookies');
                          }}
                          className="border-0 bg-transparent p-0"
                          style={{
                            color: 'var(--bs-primary)',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontSize: 'inherit'
                          }}
                        >
                          Cookie Policy
                        </button>
                        {' '}and{' '}
                        <button
                          onClick={() => {
                            setShowBanner(false);
                            onNavigate('privacy');
                          }}
                          className="border-0 bg-transparent p-0"
                          style={{
                            color: 'var(--bs-primary)',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontSize: 'inherit'
                          }}
                        >
                          Privacy Policy
                        </button>
                        {' '}for more information.
                      </>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2.5 rounded-lg border-0 cursor-pointer"
                      style={{
                        backgroundColor: 'var(--bs-primary)',
                        color: 'white',
                        fontWeight: '500',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 115, 232, 0.3)';
                      }}
                    >
                      Accept All
                    </button>

                    <button
                      onClick={rejectAll}
                      className="px-6 py-2.5 rounded-lg border cursor-pointer"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: isDarkMode
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'rgba(0, 0, 0, 0.15)',
                        color: 'var(--bs-body-color)',
                        fontWeight: '500',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      Reject All
                    </button>

                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-2.5 rounded-lg border cursor-pointer flex items-center gap-2"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: isDarkMode
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'rgba(0, 0, 0, 0.15)',
                        color: 'var(--bs-body-color)',
                        fontWeight: '500',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Settings size={16} />
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 1050
          }}
          onClick={() => setShowPreferences(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              backgroundColor: isDarkMode
                ? 'rgba(28, 28, 30, 0.98)'
                : 'rgba(255, 255, 255, 0.98)',
              border: isDarkMode
                ? '1px solid rgba(255, 255, 255, 0.12)'
                : '1px solid rgba(0, 0, 0, 0.08)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--bs-body-color)'
                  }}
                >
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 rounded-full border-0 bg-transparent cursor-pointer"
                  style={{ color: 'var(--bs-body-color)' }}
                  aria-label="Close preferences"
                >
                  <X size={24} />
                </button>
              </div>

              <p
                className="mb-6"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: 'var(--bs-body-color)',
                  opacity: 0.85
                }}
              >
                We use cookies to improve your experience on our website. You can customize which types of cookies you'd 
                like to allow. Note that blocking some types of cookies may impact your experience on our site.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.03)',
                    border: isDarkMode
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--bs-body-color)'
                      }}
                    >
                      Necessary Cookies
                    </h3>
                    <div
                      className="px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'var(--bs-primary)',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}
                    >
                      Always Active
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--bs-body-color)',
                      opacity: 0.75,
                      lineHeight: '1.5'
                    }}
                  >
                    These cookies are essential for the website to function properly. They enable basic functions like page 
                    navigation, security, and access to secure areas. The website cannot function properly without these cookies.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.03)',
                    border: isDarkMode
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--bs-body-color)'
                      }}
                    >
                      Analytics Cookies
                    </h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) =>
                          setCookiePreferences({
                            ...cookiePreferences,
                            analytics: e.target.checked
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className="relative"
                        style={{
                          width: '48px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: cookiePreferences.analytics
                            ? 'var(--bs-primary)'
                            : isDarkMode
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'rgba(0, 0, 0, 0.15)',
                          transition: 'background-color 0.2s ease'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '2px',
                            left: cookiePreferences.analytics ? '26px' : '2px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            transition: 'left 0.2s ease',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                          }}
                        />
                      </div>
                    </label>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--bs-body-color)',
                      opacity: 0.75,
                      lineHeight: '1.5'
                    }}
                  >
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve our website and services.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.03)',
                    border: isDarkMode
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--bs-body-color)'
                      }}
                    >
                      Marketing Cookies
                    </h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={(e) =>
                          setCookiePreferences({
                            ...cookiePreferences,
                            marketing: e.target.checked
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className="relative"
                        style={{
                          width: '48px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: cookiePreferences.marketing
                            ? 'var(--bs-primary)'
                            : isDarkMode
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'rgba(0, 0, 0, 0.15)',
                          transition: 'background-color 0.2s ease'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '2px',
                            left: cookiePreferences.marketing ? '26px' : '2px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            transition: 'left 0.2s ease',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                          }}
                        />
                      </div>
                    </label>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--bs-body-color)',
                      opacity: 0.75,
                      lineHeight: '1.5'
                    }}
                  >
                    These cookies are used to track visitors across websites to display ads that are relevant and engaging. 
                    They may be set by us or by third-party providers whose services we use.
                  </p>
                </div>

                {/* Preference Cookies */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.03)',
                    border: isDarkMode
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--bs-body-color)'
                      }}
                    >
                      Preference Cookies
                    </h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.preferences}
                        onChange={(e) =>
                          setCookiePreferences({
                            ...cookiePreferences,
                            preferences: e.target.checked
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className="relative"
                        style={{
                          width: '48px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: cookiePreferences.preferences
                            ? 'var(--bs-primary)'
                            : isDarkMode
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'rgba(0, 0, 0, 0.15)',
                          transition: 'background-color 0.2s ease'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '2px',
                            left: cookiePreferences.preferences ? '26px' : '2px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            transition: 'left 0.2s ease',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                          }}
                        />
                      </div>
                    </label>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--bs-body-color)',
                      opacity: 0.75,
                      lineHeight: '1.5'
                    }}
                  >
                    These cookies enable the website to remember choices you make (such as your user name, language, or region) 
                    and provide enhanced, more personalized features.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t" style={{ borderColor: 'var(--bs-border-color)' }}>
                <button
                  onClick={saveCustomPreferences}
                  className="flex-1 px-6 py-3 rounded-lg border-0 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--bs-primary)',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 115, 232, 0.3)';
                  }}
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 rounded-lg border cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.15)',
                    color: 'var(--bs-body-color)',
                    fontWeight: '500',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Utility function to check if user has consented to a specific cookie type
export function hasConsentFor(cookieType: keyof CookiePreferences): boolean {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('tle-cookie-consent');
  if (!consent) return false;
  
  try {
    const prefs = JSON.parse(consent) as CookiePreferences;
    return prefs[cookieType] === true;
  } catch {
    return false;
  }
}

// Utility function to reopen cookie preferences (can be called from footer or settings)
export function reopenCookiePreferences() {
  if (typeof window === 'undefined') return;
  
  // Trigger a custom event that the CookieConsent component can listen to
  window.dispatchEvent(new CustomEvent('reopen-cookie-preferences'));
}