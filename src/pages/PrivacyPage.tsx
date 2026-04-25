import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { privacyPage, seo, brand } from '../content/siteCopy';
import usePageMeta from '../hooks/usePageMeta';

function ContentSections({ sections }: { sections: { heading: string; content: string }[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section, i) => (
        <div key={i}>
          <h2 className="text-xl font-semibold text-white mb-3">{section.heading}</h2>
          {section.content.split('\n\n').map((paragraph, j) => (
            <p key={j} className="text-surface-400 leading-relaxed whitespace-pre-line mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function PrivacyPage() {
  usePageMeta({
    title: seo.privacy.title,
    description: seo.privacy.description,
    canonical: `${brand.url}/privacy`,
  });

  return (
    <main className="section-padding pt-28 lg:pt-36 pb-20">
      <div className="section-container max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {privacyPage.title}
        </h1>
        <p className="mt-2 text-sm text-surface-500">
          Stand: {privacyPage.lastUpdated}
        </p>

        <div className="mt-12">
          <ContentSections sections={privacyPage.sections} />
        </div>

        <hr className="my-16 border-surface-800/50" />

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-10">
          {privacyPage.englishTitle}
        </h2>
        <ContentSections sections={privacyPage.englishSections} />
      </div>
    </main>
  );
}
