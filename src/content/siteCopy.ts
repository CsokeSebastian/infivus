export const brand = {
  name: 'Infivus',
  tagline: 'Creative subscription for modern brands',
  copyright: `© ${new Date().getFullYear()} Infivus. All rights reserved.`,
  url: 'https://infivus.com',
  stripeLink: 'https://buy.stripe.com/test_fZubIUaQ65069bE5rz87K00',
};

export const seo = {
  home: {
    title: 'Infivus — Unlimited Design & Creative Subscription Service',
    description:
      'Infivus is a monthly creative subscription service for unlimited design requests, ad creatives, and copywriting. Content and ads subscription for €499/mo. No contracts.',
    ogImage: '/og-image.png',
  },
  terms: {
    title: 'Terms & Fair Usage — Infivus Creative Subscription',
    description:
      'Read the terms of service and fair usage policy for Infivus, an unlimited design subscription service for content, ads, and copy.',
  },
  contact: {
    title: 'Contact Infivus — Get in Touch About Our Creative Subscription',
    description:
      'Have questions about our monthly creative service? Contact the Infivus team for custom arrangements or to learn more about our unlimited design subscription.',
  },
  work: {
    title: 'Our Work — Infivus Creative Subscription Portfolio',
    description:
      'Browse recent creative work from Infivus: ad creatives, landing page designs, social media content, and copywriting delivered through our monthly subscription.',
  },
  impressum: {
    title: 'Impressum — Infivus',
    description:
      'Legal notice (Impressum) for Infivus, a Germany-based creative subscription service.',
  },
  privacy: {
    title: 'Privacy Policy — Infivus',
    description:
      'Datenschutzerklärung and Privacy Policy for Infivus, a Germany-based creative subscription service.',
  },
  thankYou: {
    title: 'Subscription Confirmed — Infivus',
    description:
      'Your Infivus subscription is confirmed. Submit your first creative request to get started.',
  },
  start: {
    title: 'Submit a Request — Infivus',
    description:
      'Submit your first creative request to get started with your Infivus subscription.',
  },
};

export const nav = {
  links: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Subscribe',
};

export const hero = {
  headline: 'Unlimited creative requests.\nOne simple subscription.',
  subheadline:
    'Content, ad creatives, and copy delivered fast — async by default, no meetings required, no messy project scope.',
  primaryCta: 'Subscribe',
  secondaryCta: 'See pricing',
  secondaryCtaHref: '#pricing',
  trustLine:
    'Subscribe in minutes. Pause anytime. One active task at a time. Async by default.',
};

export const socialProof = {
  heading: 'Trusted by founders and growing brands',
  testimonials: [
    {
      quote:
        'Infivus replaced our entire freelancer pipeline. Fast, consistent, and zero hassle.',
      name: 'Sarah M.',
      role: 'Founder, Loomwell',
    },
    {
      quote:
        'We scaled our ad output 3x without adding headcount. The subscription model is a no-brainer.',
      name: 'James K.',
      role: 'Marketing Lead, Stackly',
    },
    {
      quote:
        'Finally, a creative partner that operates at our speed. No meetings, just great work.',
      name: 'Elena R.',
      role: 'CEO, Forma Studio',
    },
  ],
  logos: ['Loomwell', 'Stackly', 'Forma', 'Basekit', 'Claro'],
};

export const selectedWork = {
  heading: 'Selected Work',
  subheading: 'A few examples of recent work and creative output.',
  cta: 'View all work',
  ctaHref: '/work',
};

export const portfolioPage = {
  heading: 'Our Work',
  subheading: 'Real deliverables from real subscriptions.',
  items: [
    { image: '/beauty_ad.png', title: 'Ad Creative' },
    { image: '/beauty_landingpage.png', title: 'Landing Page Design' },
    { image: '/coffee_ad.png', title: 'Ad Creative' },
    { image: '/copy_before_after.png', title: 'Copywriting' },
    { image: '/copywriting.png', title: 'Landing Page Design' },
    { image: '/fitness_ad.png', title: 'Ad Creative' },
    { image: '/landingpage.png', title: 'Landing Page Design' },
    { image: '/media_landingpage.png', title: 'Landing Page Design' },
    { image: '/spa_landingpage.png', title: 'Landing Page Design' },
  ],
};

export const howItWorks = {
  heading: 'How our design subscription works',
  subheading: 'Four simple steps to consistent creative output.',
  steps: [
    {
      number: '01',
      title: 'Subscribe',
      description:
        'Subscribe in minutes. No contracts, no commitments, cancel anytime.',
    },
    {
      number: '02',
      title: 'Add your requests',
      description:
        'Submit creative requests through our simple async workflow. Add as many as you want.',
    },
    {
      number: '03',
      title: 'Receive work fast',
      description:
        'Get polished deliverables in 24–48 hours on average. Revisions included.',
    },
    {
      number: '04',
      title: 'Revise and continue',
      description:
        'Request changes or move on to the next task. Your queue is always running.',
    },
  ],
};

export const services = {
  heading: 'Creative subscription services',
  subheading:
    'Everything you need to keep your marketing engine running — without the complexity.',
  items: [
    {
      title: 'Social media creatives',
      description:
        'Scroll-stopping visuals for Instagram, LinkedIn, Twitter, and more. On-brand, every time.',
      icon: 'Image' as const,
    },
    {
      title: 'Ad creatives',
      description:
        'High-converting ad designs for Meta, Google, TikTok, and display networks.',
      icon: 'Megaphone' as const,
    },
    {
      title: 'Copywriting',
      description:
        'Compelling marketing copy for ads, emails, social captions, and product descriptions.',
      icon: 'PenLine' as const,
    },
    {
      title: 'Landing page copy',
      description:
        'Conversion-focused headlines, body copy, and CTAs that turn visitors into customers.',
      icon: 'FileText' as const,
    },
    {
      title: 'Promotional graphics',
      description:
        'Banners, event graphics, sale announcements, and branded visuals for any campaign.',
      icon: 'Palette' as const,
    },
  ],
};

export const pricing = {
  heading: 'One plan. Everything included.',
  subheading: 'No tiers to compare. No hourly rates. Just predictable creative output for a flat monthly fee.',
  plan: {
    name: 'Subscription',
    price: '€499',
    period: '/month',
    description: 'Unlimited creative requests for founders, startups, and growing teams.',
    features: [
      'Unlimited requests',
      'One active task at a time',
      'Average 24–48h delivery',
      'Pause anytime',
      'Async communication',
      'No unnecessary meetings',
    ],
    cta: 'Subscribe',
  },
};

export const faq = {
  heading: 'Frequently asked questions',
  subheading: 'Everything you need to know before getting started.',
  items: [
    {
      question: 'How does unlimited requests work?',
      answer:
        'You can add as many requests to your queue as you want. We work through them one at a time, so your pipeline never stops. There is no cap on total requests per month.',
    },
    {
      question: 'What does one active task mean?',
      answer:
        'One active task means we are actively working on one deliverable at a time. Once it is delivered, we move to the next item in your queue. This keeps quality high and turnaround fast.',
    },
    {
      question: 'What counts as a task?',
      answer:
        'A task can be a single creative request such as an ad creative, social media post, caption, copy update, or landing page section. Simpler requests are usually completed faster, while larger or more complex work — such as website design or more involved creative projects — may take longer depending on scope. All work is handled one active task at a time.',
    },
    {
      question: 'How fast is delivery?',
      answer:
        'Most tasks are delivered within 24–48 hours. Complex requests may take slightly longer, but we will always communicate timelines upfront.',
    },
    {
      question: 'Can I pause anytime?',
      answer:
        'Yes. You can pause your subscription at any time and resume when you are ready. Your unused days carry over so you never lose what you paid for.',
    },
    {
      question: 'What is not included?',
      answer:
        'We do not offer video editing, complex strategy consulting, or large custom website builds. Our service is focused on content, ad creatives, and copy — the assets that keep your marketing moving.',
    },
    {
      question: 'Who is this for?',
      answer:
        'Infivus is built for founders, creators, startups, and small businesses that need consistent marketing assets without the overhead of agencies or full-time hires.',
    },
  ],
};

export const cta = {
  heading: 'Subscribe and start shipping creative today.',
  subheading:
    'No proposals. No onboarding calls. Subscribe, add your first request, and get work back in 24–48 hours.',
  primaryCta: 'Subscribe',
  secondaryCta: 'See pricing',
  secondaryCtaHref: '#pricing',
};

export const footer = {
  links: [
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export const termsPage = {
  title: 'Terms & Fair Usage',
  lastUpdated: 'April 2026',
  sections: [
    {
      heading: 'Overview',
      content:
        'These terms govern your use of the Infivus creative subscription service. By subscribing, you agree to these terms.',
    },
    {
      heading: 'Subscription',
      content:
        'Your subscription begins on the date of purchase and renews monthly. You may cancel or pause at any time from your account dashboard. Paused subscriptions retain unused days.',
    },
    {
      heading: 'Fair usage',
      content:
        'Unlimited requests means there is no cap on the number of tasks you can add to your queue. However, tasks are completed one at a time. Requests must be within scope of the services we offer: social media creatives, ad creatives, copywriting, landing page copy, and promotional graphics.',
    },
    {
      heading: 'What is not included',
      content:
        'Our service does not cover video editing, complex strategy consulting, large custom website projects, or any deliverable outside the productized services listed. If a request falls outside scope, we will let you know and suggest alternatives.',
    },
    {
      heading: 'Revisions',
      content:
        'Each task includes reasonable revisions. We want you to be happy with the output. If a request requires significant rework beyond the original brief, it may be treated as a new task.',
    },
    {
      heading: 'Intellectual property',
      content:
        'All deliverables created under your subscription are yours. Upon delivery, full ownership and usage rights transfer to you. We retain the right to showcase work in our portfolio unless you opt out.',
    },
    {
      heading: 'Refunds',
      content:
        'We do not offer refunds for partial months. If you are unsatisfied, you may pause or cancel at any time. We encourage reaching out so we can resolve any concerns before you cancel.',
    },
    {
      heading: 'Changes to terms',
      content:
        'We may update these terms from time to time. Significant changes will be communicated via email. Continued use of the service constitutes acceptance of updated terms.',
    },
  ],
};

export const contactPage = {
  title: 'Get in touch',
  subheading:
    'Have questions about the service, need a custom arrangement, or just want to say hello? Reach out and we will get back to you within 24 hours.',
  email: 'hello@infivus.com',
  fields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'you@company.com',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell us what you need...',
    },
  ],
  submitLabel: 'Send message',
};

export const impressumPage = {
  title: 'Impressum',
  lastUpdated: 'April 2026',
  sections: [
    {
      heading: 'Angaben gemäß § 5 TMG',
      items: [
        'Infivus',
        '[YOUR NAME]',
        '[YOUR ADDRESS]',
        '[YOUR CITY, ZIP CODE]',
        'Deutschland',
      ],
    },
    {
      heading: 'Kontakt',
      items: [
        'E-Mail: [YOUR EMAIL]',
        'Telefon: [YOUR PHONE NUMBER — optional]',
      ],
    },
    {
      heading: 'Umsatzsteuer-ID',
      items: [
        'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:',
        '[YOUR VAT ID — if available, otherwise remove this section]',
      ],
    },
    {
      heading: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      items: [
        '[YOUR NAME]',
        '[YOUR ADDRESS]',
        '[YOUR CITY, ZIP CODE]',
      ],
    },
    {
      heading: 'Haftungsausschluss',
      items: [
        'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
      ],
    },
  ],
  englishTitle: 'Legal Notice',
  englishSections: [
    {
      heading: 'Information pursuant to § 5 TMG',
      items: [
        'Infivus',
        '[YOUR NAME]',
        '[YOUR ADDRESS]',
        '[YOUR CITY, ZIP CODE]',
        'Germany',
      ],
    },
    {
      heading: 'Contact',
      items: [
        'Email: [YOUR EMAIL]',
        'Phone: [YOUR PHONE NUMBER — optional]',
      ],
    },
    {
      heading: 'VAT ID',
      items: [
        'VAT identification number pursuant to § 27a of the German VAT Act:',
        '[YOUR VAT ID — if available, otherwise remove this section]',
      ],
    },
    {
      heading: 'Responsible for content pursuant to § 55 Abs. 2 RStV',
      items: [
        '[YOUR NAME]',
        '[YOUR ADDRESS]',
        '[YOUR CITY, ZIP CODE]',
      ],
    },
    {
      heading: 'Disclaimer',
      items: [
        'The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs. 1 TMG under general law.',
      ],
    },
  ],
};

export const thankYouPage = {
  title: 'Subscription confirmed',
  subtitle: 'Thanks for subscribing. Your next step is to send your first request.',
  howItWorksHeading: 'How it works',
  steps: [
    { number: '01', text: 'You submit a request' },
    { number: '02', text: 'We work on one task at a time' },
    { number: '03', text: 'You receive your work via email' },
    { number: '04', text: 'Revisions are handled via email' },
  ],
  cta: 'Submit your first request',
  ctaHref: '/start',
};

export const privacyPage = {
  title: 'Datenschutzerklärung',
  lastUpdated: 'April 2026',
  sections: [
    {
      heading: '1. Verantwortlicher',
      content:
        'Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n\nInfivus\n[YOUR NAME]\n[YOUR ADDRESS]\n[YOUR CITY, ZIP CODE]\nDeutschland\nE-Mail: [YOUR EMAIL]',
    },
    {
      heading: '2. Erhobene Daten',
      content:
        'Wir erheben folgende personenbezogene Daten, wenn Sie unser Kontaktformular nutzen oder unseren Service abonnieren:\n\n- Name\n- E-Mail-Adresse\n- Nachricht (bei Kontaktanfragen)\n- Zahlungsstatus (über Stripe, siehe unten)',
    },
    {
      heading: '3. Zweck der Datenverarbeitung',
      content:
        'Ihre Daten werden ausschließlich für folgende Zwecke verwendet:\n\n- Kommunikation und Beantwortung Ihrer Anfragen\n- Erbringung unserer Dienstleistungen\n- Zahlungsabwicklung über Stripe',
    },
    {
      heading: '4. Zahlungsabwicklung über Stripe',
      content:
        'Zahlungen werden über Stripe, Inc. abgewickelt. Stripe verarbeitet Ihre Zahlungsdaten eigenständig und unterliegt eigenen Datenschutzbestimmungen. Wir erhalten von Stripe lediglich Ihren Namen, Ihre E-Mail-Adresse und den Zahlungsstatus. Kreditkarten- oder Kontodaten werden zu keinem Zeitpunkt auf unseren Servern gespeichert.\n\nWeitere Informationen finden Sie in der Datenschutzerklärung von Stripe: https://stripe.com/de/privacy',
    },
    {
      heading: '5. Datenspeicherung',
      content:
        'Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen dies verlangen.',
    },
    {
      heading: '6. Ihre Rechte',
      content:
        'Sie haben jederzeit das Recht auf:\n\n- Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)\n- Berichtigung unrichtiger Daten (Art. 16 DSGVO)\n- Löschung Ihrer Daten (Art. 17 DSGVO)\n- Einschränkung der Verarbeitung (Art. 18 DSGVO)\n- Datenübertragbarkeit (Art. 20 DSGVO)\n- Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)\n\nZur Ausübung Ihrer Rechte kontaktieren Sie uns unter: [YOUR EMAIL]',
    },
    {
      heading: '7. Hosting',
      content:
        'Diese Website wird bei einem externen Dienstleister gehostet. Der Hosting-Anbieter erhebt in der Regel Server-Logfiles, die Ihre IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeitpunkt enthalten. Diese Daten werden zur Sicherstellung des Betriebs und der Sicherheit verarbeitet.',
    },
  ],
  englishTitle: 'Privacy Policy',
  englishSections: [
    {
      heading: '1. Data Controller',
      content:
        'The party responsible for data processing on this website is:\n\nInfivus\n[YOUR NAME]\n[YOUR ADDRESS]\n[YOUR CITY, ZIP CODE]\nGermany\nEmail: [YOUR EMAIL]',
    },
    {
      heading: '2. Data Collected',
      content:
        'We collect the following personal data when you use our contact form or subscribe to our service:\n\n- Name\n- Email address\n- Message (for contact inquiries)\n- Payment status (via Stripe, see below)',
    },
    {
      heading: '3. Purpose of Data Processing',
      content:
        'Your data is used exclusively for the following purposes:\n\n- Communication and responding to your inquiries\n- Delivery of our services\n- Payment processing via Stripe',
    },
    {
      heading: '4. Payment Processing via Stripe',
      content:
        'Payments are processed by Stripe, Inc. Stripe handles your payment data independently and is subject to its own privacy policy. We only receive your name, email address, and payment status from Stripe. Credit card or bank account details are never stored on our servers.\n\nFor more information, see Stripe\'s privacy policy: https://stripe.com/privacy',
    },
    {
      heading: '5. Data Retention',
      content:
        'Your personal data is stored only for as long as necessary to fulfill the respective purpose or as required by statutory retention periods.',
    },
    {
      heading: '6. Your Rights',
      content:
        'You have the right at any time to:\n\n- Access your stored data (Art. 15 GDPR)\n- Rectify inaccurate data (Art. 16 GDPR)\n- Delete your data (Art. 17 GDPR)\n- Restrict processing (Art. 18 GDPR)\n- Data portability (Art. 20 GDPR)\n- Object to processing (Art. 21 GDPR)\n\nTo exercise your rights, contact us at: [YOUR EMAIL]',
    },
    {
      heading: '7. Hosting',
      content:
        'This website is hosted by an external service provider. The hosting provider typically collects server log files that contain your IP address, browser type, operating system, and access time. This data is processed to ensure the operation and security of the website.',
    },
  ],
};

export const startPage = {
  title: 'Submit a request',
  note: 'All requests must be submitted through this form. We work on one task at a time.',
  successMessage: "Request received. We'll review it and get started as soon as possible.",
  submitLabel: 'Submit request',
};