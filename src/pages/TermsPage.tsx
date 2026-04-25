import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { termsPage, seo, brand } from '../content/siteCopy';
import usePageMeta from '../hooks/usePageMeta';

export default function TermsPage() {
  usePageMeta({
    title: seo.terms.title,
    description: seo.terms.description,
    canonical: `${brand.url}/terms`,
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
          {termsPage.title}
        </h1>
        <p className="mt-2 text-sm text-surface-500">
          Last updated: {termsPage.lastUpdated}
        </p>

        <div className="mt-12 space-y-10">
          {termsPage.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-white mb-3">
                {section.heading}
              </h2>
              <p className="text-surface-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
