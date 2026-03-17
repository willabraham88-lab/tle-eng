import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Expertise } from '../components/Expertise';
import { WhyChooseTLE } from '../components/WhyChooseTLE';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import type { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main role="main" aria-label="Home page">
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <Stats />
      <Expertise />
      <WhyChooseTLE />
      <FeaturedProjects onNavigate={onNavigate} />
      <About />
      <Contact />
    </main>
  );
}