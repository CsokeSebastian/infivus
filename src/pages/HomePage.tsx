import usePageMeta from '../hooks/usePageMeta';
import { seo, brand } from '../content/siteCopy';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import SelectedWork from '../components/SelectedWork';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ContactSection from '../components/ContactSection';
import JsonLd from '../components/JsonLd';

export default function HomePage() {
  usePageMeta({
    title: seo.home.title,
    description: seo.home.description,
    canonical: `${brand.url}/`,
  });

  return (
    <main>
      <JsonLd />
      <Hero />
      <SocialProof />
      <SelectedWork />
      <HowItWorks />
      <Services />
      <Pricing />
      <FAQ />
      <CTA />
      <ContactSection />
    </main>
  );
}
