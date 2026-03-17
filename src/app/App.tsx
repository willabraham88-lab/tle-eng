import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/CookieConsent';
import { updatePageSEO, generateBreadcrumbSchema } from './utils/seo';
import type { Page } from './types';

// Direct imports instead of lazy loading to fix module import errors
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import IndustriesPage from './pages/IndustriesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import NotFoundPage from './pages/NotFoundPage';

export type { Page };

// SEO metadata for each page
const pageMetadata: Record<Page, {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
}> = {
  home: {
    title: 'TLE Ltd. - Critical Infrastructure Solutions | Communication, Automation & Pipeline Management',
    description: 'Telemetry & Logic Engineering (TLE) Ltd. specializes in designing, integrating, and supporting advanced communication systems, automation & control, and pipeline management technologies for critical infrastructure.',
    keywords: 'critical infrastructure, communication systems, automation control, pipeline management, SCADA, telemetry engineering, industrial automation, infrastructure technology',
    ogType: 'website'
  },
  services: {
    title: 'Our Services - Communication, Automation & Pipeline Solutions | TLE Ltd.',
    description: 'Explore TLE\'s comprehensive services: Communication Systems, Automation & Control, and Pipeline Management for critical infrastructure projects.',
    keywords: 'communication systems services, automation control services, pipeline management, SCADA systems, industrial control systems, infrastructure services',
    ogType: 'website'
  },
  products: {
    title: 'Our Products - Communication, Automation & Pipeline Solutions | TLE Ltd.',
    description: 'Discover TLE\'s range of products: Communication Systems, Automation & Control, and Pipeline Management for critical infrastructure projects.',
    keywords: 'communication systems products, automation control products, pipeline management, SCADA systems, industrial control systems, infrastructure products',
    ogType: 'website'
  },
  projects: {
    title: 'Our Projects - Communication, Automation & Pipeline Solutions | TLE Ltd.',
    description: 'Explore TLE\'s successful projects: Communication Systems, Automation & Control, and Pipeline Management for critical infrastructure projects.',
    keywords: 'communication systems projects, automation control projects, pipeline management, SCADA systems, industrial control systems, infrastructure projects',
    ogType: 'website'
  },
  about: {
    title: 'About TLE Ltd. - Leading Critical Infrastructure Engineering',
    description: 'Learn about Telemetry & Logic Engineering (TLE) Ltd., a specialized engineering firm focused on critical infrastructure solutions and advanced technology integration.',
    keywords: 'about TLE, engineering company, critical infrastructure firm, technology integration, telemetry engineering company',
    ogType: 'website'
  },
  contact: {
    title: 'Contact TLE Ltd. - Get In Touch With Our Team',
    description: 'Contact Telemetry & Logic Engineering (TLE) Ltd. for inquiries about communication systems, automation, and pipeline management solutions.',
    keywords: 'contact TLE, engineering inquiries, infrastructure solutions contact, get quote, engineering consultation',
    ogType: 'website'
  },
  industries: {
    title: 'Industries We Serve - Critical Infrastructure Sectors | TLE Ltd.',
    description: 'TLE Ltd. serves critical infrastructure industries with specialized communication, automation, and pipeline management solutions.',
    keywords: 'critical infrastructure industries, oil and gas, utilities, water management, energy sector, industrial sectors',
    ogType: 'website'
  },
  privacy: {
    title: 'Privacy Policy | TLE Ltd.',
    description: 'Read the privacy policy for Telemetry & Logic Engineering (TLE) Ltd. website.',
    keywords: 'privacy policy, data protection, GDPR compliance',
    ogType: 'website'
  },
  terms: {
    title: 'Terms of Service | TLE Ltd.',
    description: 'Read the terms of service for Telemetry & Logic Engineering (TLE) Ltd. website.',
    keywords: 'terms of service, legal terms, website terms',
    ogType: 'website'
  },
  cookies: {
    title: 'Cookie Policy | TLE Ltd.',
    description: 'Learn about how TLE Ltd. uses cookies on our website.',
    keywords: 'cookie policy, cookies, website tracking',
    ogType: 'website'
  },
  '404': {
    title: 'Page Not Found | TLE Ltd.',
    description: 'The page you are looking for does not exist.',
    keywords: '404, page not found, error',
    ogType: 'website'
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Restore the last viewed page from localStorage
    if (typeof window !== 'undefined') {
      const savedPage = localStorage.getItem('tle-current-page') as Page;
      if (savedPage && ['home', 'services', 'products', 'projects', 'about', 'contact', 'industries', 'privacy', 'terms', 'cookies'].includes(savedPage)) {
        return savedPage;
      }
    }
    return 'home';
  });

  // Save current page to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tle-current-page', currentPage);
    }
  }, [currentPage]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Update SEO meta tags when page changes
  useEffect(() => {
    // Safety check for SSR
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Update SEO using utility function
    updatePageSEO(currentPage);
    
    // Add breadcrumb structured data
    const breadcrumbSchema = generateBreadcrumbSchema(currentPage);
    let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]') as HTMLScriptElement;
    
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    
    breadcrumbScript.textContent = breadcrumbSchema;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'products':
        return <ProductsPage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'industries':
        return <IndustriesPage onNavigate={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      case 'cookies':
        return <CookiePolicyPage />;
      case '404':
        return <NotFoundPage onNavigate={setCurrentPage} />;
      default:
        return <NotFoundPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg"
        style={{
          background: 'var(--bs-primary)',
          color: 'white',
          fontWeight: '600',
          textDecoration: 'none'
        }}
      >
        Skip to main content
      </a>
      
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <ErrorBoundary>
        <main id="main-content">
          {renderPage()}
        </main>
      </ErrorBoundary>
      <Footer onNavigate={setCurrentPage} />
      <CookieConsent onNavigate={setCurrentPage} />
    </>
  );
}