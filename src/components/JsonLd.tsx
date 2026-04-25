import { brand, faq, services, pricing } from '../content/siteCopy';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brand.name,
  url: brand.url,
  description: brand.tagline,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@infivus.com',
    contactType: 'customer service',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Creative Subscription Service',
  provider: {
    '@type': 'Organization',
    name: brand.name,
    url: brand.url,
  },
  name: `${brand.name} — Unlimited Design Subscription`,
  description:
    'Monthly creative subscription service for unlimited design requests, ad creatives, and copywriting.',
  offers: {
    '@type': 'Offer',
    name: pricing.plan.name,
    price: pricing.plan.price.replace('€', ''),
    priceCurrency: 'EUR',
    description: pricing.plan.description,
  },
  areaServed: 'Worldwide',
  category: services.items.map((s) => s.title),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
