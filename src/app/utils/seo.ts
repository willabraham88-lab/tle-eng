import type { Page } from '../App';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const pageSEO: Record<Page, SEOConfig> = {
  home: {
    title: 'TLE Ltd - Telemetry & Logic Engineering | Critical Infrastructure Solutions',
    description: 'TLE Ltd specializes in designing, integrating, and supporting advanced communication, automation, and pipeline management technologies for critical infrastructure across Scotland and the UK.',
    keywords: 'SCADA systems, industrial automation, pipeline monitoring, PLC programming, control systems, telemetry, logic engineering, critical infrastructure, Scotland engineering',
    canonical: 'https://www.tle-eng.co.uk/',
    ogImage: 'https://www.tle-eng.co.uk/og-home.jpg'
  },
  about: {
    title: 'About TLE Ltd - Leading Engineering Excellence | Telemetry & Logic Engineering',
    description: 'Learn about TLE Ltd\'s 25+ years of expertise in industrial automation, SCADA systems, and critical infrastructure engineering. Meet our team of certified professionals serving the UK.',
    keywords: 'about TLE, engineering company Scotland, industrial automation experts, SCADA engineers, Aberdeen engineering, certified automation professionals',
    canonical: 'https://www.tle-eng.co.uk/about',
    ogTitle: 'About TLE Ltd - 25+ Years of Engineering Excellence',
    ogDescription: 'Discover our mission, values, and the expert team behind TLE Ltd\'s success in critical infrastructure engineering.'
  },
  products: {
    title: 'Engineering Products - SCADA, RTU & Monitoring Solutions | TLE Ltd',
    description: 'Explore TLE Ltd\'s range of industrial-grade products including SCADA systems, RTUs, pipeline monitoring, edge computing devices, and cybersecurity solutions for critical infrastructure.',
    keywords: 'SCADA products, RTU devices, pipeline monitoring systems, industrial automation products, edge computing, industrial cybersecurity, HMI panels',
    canonical: 'https://www.tle-eng.co.uk/products',
    ogTitle: 'Engineering Products - Industrial Automation & Monitoring',
    ogDescription: 'Industry-leading SCADA, RTU, and monitoring products for critical infrastructure operations.'
  },
  services: {
    title: 'Engineering Services - SCADA, Automation & Pipeline Solutions | TLE Ltd',
    description: 'Comprehensive engineering services including SCADA & HMI systems, pipeline automation, industrial communication networks, and 24/7 support from TLE Ltd.',
    keywords: 'SCADA services, HMI development, pipeline automation, industrial networks, PLC programming, control systems engineering, automation services Scotland',
    canonical: 'https://www.tle-eng.co.uk/services',
    ogTitle: 'Engineering Services - SCADA, Automation & Pipeline Solutions',
    ogDescription: 'Expert engineering services for critical infrastructure: SCADA systems, pipeline automation, and industrial networks.'
  },
  projects: {
    title: 'Technical Projects & Case Studies - Industrial Automation | TLE Ltd',
    description: 'Explore TLE Ltd\'s successful projects in PLC programming, SCADA development, industrial networks, and view our completed projects across oil & gas, utilities, and manufacturing sectors.',
    keywords: 'PLC programming, SCADA development, industrial ethernet, fiber optic networks, automation projects, engineering case studies, pipeline monitoring projects',
    canonical: 'https://www.tle-eng.co.uk/projects',
    ogTitle: 'Technical Projects & Delivered Solutions',
    ogDescription: 'Proven expertise across 500+ projects in industrial automation, SCADA systems, and critical infrastructure engineering.'
  },
  industries: {
    title: 'Industries Served - Oil & Gas, Utilities, Manufacturing | TLE Ltd',
    description: 'TLE Ltd serves critical infrastructure across oil & gas, water utilities, power generation, manufacturing, transportation, and mining industries with specialized engineering solutions.',
    keywords: 'oil and gas automation, water treatment SCADA, power generation control, manufacturing automation, pipeline monitoring, industrial sectors',
    canonical: 'https://www.tle-eng.co.uk/industries',
    ogTitle: 'Industries We Serve - Critical Infrastructure Engineering',
    ogDescription: 'Specialized engineering solutions for oil & gas, utilities, power, manufacturing, and transportation sectors.'
  },
  contact: {
    title: 'Contact TLE Ltd - Get In Touch | Aberdeenshire Engineering',
    description: 'Contact Telemetry & Logic Engineering Ltd in Westhill, Aberdeenshire. Call +44 7405 716707 or email contact@tle-eng.co.uk for critical infrastructure engineering solutions.',
    keywords: 'contact TLE, engineering company Aberdeenshire, Westhill engineers, industrial automation contact, SCADA consultants Scotland',
    canonical: 'https://www.tle-eng.co.uk/contact',
    ogTitle: 'Contact TLE Ltd - Expert Engineering Support',
    ogDescription: 'Get in touch with our engineering team. Located in Westhill, Aberdeenshire, serving the UK.'
  },
  privacy: {
    title: 'Privacy Policy | TLE Ltd - Telemetry & Logic Engineering',
    description: 'Read TLE Ltd\'s privacy policy to understand how we collect, use, and protect your personal information in compliance with UK GDPR regulations.',
    keywords: 'privacy policy, data protection, GDPR compliance, personal information, TLE privacy',
    canonical: 'https://www.tle-eng.co.uk/privacy',
    ogTitle: 'Privacy Policy - TLE Ltd'
  },
  terms: {
    title: 'Terms of Service | TLE Ltd - Telemetry & Logic Engineering',
    description: 'Read TLE Ltd\'s terms of service governing the use of our website and professional engineering services.',
    keywords: 'terms of service, legal terms, website terms, service agreement, TLE terms',
    canonical: 'https://www.tle-eng.co.uk/terms',
    ogTitle: 'Terms of Service - TLE Ltd'
  },
  cookies: {
    title: 'Cookie Policy | TLE Ltd - Telemetry & Logic Engineering',
    description: 'Understand how TLE Ltd uses cookies on our website. Learn about cookie types, purposes, and how to manage your cookie preferences.',
    keywords: 'cookie policy, website cookies, cookie preferences, cookie consent, TLE cookies',
    canonical: 'https://www.tle-eng.co.uk/cookies',
    ogTitle: 'Cookie Policy - TLE Ltd'
  },
  '404': {
    title: 'Page Not Found | TLE Ltd - Telemetry & Logic Engineering',
    description: 'The page you are looking for does not exist. Find your way back to our critical infrastructure engineering solutions.',
    keywords: '404, page not found, error page, TLE navigation',
    canonical: 'https://www.tle-eng.com/404',
    ogTitle: '404 - Page Not Found'
  }
};

export function updatePageSEO(page: Page): void {
  const seo = pageSEO[page];
  
  // Update document title
  document.title = seo.title;
  
  // Update meta description
  updateMetaTag('name', 'description', seo.description);
  
  // Update meta keywords
  updateMetaTag('name', 'keywords', seo.keywords);
  
  // Update canonical URL
  updateLinkTag('canonical', seo.canonical);
  
  // Update Open Graph tags
  updateMetaTag('property', 'og:url', seo.canonical);
  updateMetaTag('property', 'og:title', seo.ogTitle || seo.title);
  updateMetaTag('property', 'og:description', seo.ogDescription || seo.description);
  
  if (seo.ogImage) {
    updateMetaTag('property', 'og:image', seo.ogImage);
  }
  
  // Update Twitter Card tags
  updateMetaTag('name', 'twitter:url', seo.canonical);
  updateMetaTag('name', 'twitter:title', seo.ogTitle || seo.title);
  updateMetaTag('name', 'twitter:description', seo.ogDescription || seo.description);
  
  if (seo.ogImage) {
    updateMetaTag('name', 'twitter:image', seo.ogImage);
  }
}

function updateMetaTag(attribute: string, attributeValue: string, content: string): void {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

// Generate structured data for breadcrumbs
export function generateBreadcrumbSchema(page: Page): string {
  const breadcrumbMap: Record<Page, { name: string; position: number }[]> = {
    home: [
      { name: 'Home', position: 1 }
    ],
    about: [
      { name: 'Home', position: 1 },
      { name: 'About', position: 2 }
    ],
    products: [
      { name: 'Home', position: 1 },
      { name: 'Products', position: 2 }
    ],
    services: [
      { name: 'Home', position: 1 },
      { name: 'Services', position: 2 }
    ],
    projects: [
      { name: 'Home', position: 1 },
      { name: 'Projects', position: 2 }
    ],
    industries: [
      { name: 'Home', position: 1 },
      { name: 'Industries', position: 2 }
    ],
    contact: [
      { name: 'Home', position: 1 },
      { name: 'Contact', position: 2 }
    ],
    privacy: [
      { name: 'Home', position: 1 },
      { name: 'Privacy Policy', position: 2 }
    ],
    terms: [
      { name: 'Home', position: 1 },
      { name: 'Terms of Service', position: 2 }
    ],
    cookies: [
      { name: 'Home', position: 1 },
      { name: 'Cookie Policy', position: 2 }
    ],
    '404': [
      { name: 'Home', position: 1 },
      { name: '404', position: 2 }
    ]
  };

  const breadcrumbs = breadcrumbMap[page];
  const baseUrl = 'https://www.tle-eng.co.uk';
  
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    'position': item.position,
    'name': item.name,
    'item': index === 0 ? baseUrl : `${baseUrl}/${page}`
  }));

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': itemListElement
  });
}