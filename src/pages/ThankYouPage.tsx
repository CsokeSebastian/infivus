import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { thankYouPage, seo, brand } from '../content/siteCopy';
import usePageMeta from '../hooks/usePageMeta';

export default function ThankYouPage() {
  usePageMeta({
    title: seo.thankYou.title,
    description: seo.thankYou.description,
    canonical: `${brand.url}/thank-you`,
  });

  return (
    <main className="section-padding pt-28 lg:pt-36 pb-20">
      <div className="section-container max-w-2xl mx-auto">
        {/* Confirmation */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto animate-fade-in">
            <CheckCircle className="w-7 h-7 text-brand-400" />
          </div>

          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-fade-in-up">
            {thankYouPage.title}
          </h1>

          <p className="mt-4 text-lg text-surface-400 leading-relaxed max-w-lg mx-auto animate-fade-in-up [animation-delay:100ms] opacity-0">
            {thankYouPage.subtitle}
          </p>
        </div>

        {/* How it works */}
        <div className="mt-16 animate-fade-in-up [animation-delay:200ms] opacity-0">
          <div className="glass-card p-8 lg:p-10">
            <h2 className="text-xl font-bold text-white tracking-tight">
              {thankYouPage.howItWorksHeading}
            </h2>

            <div className="mt-8 space-y-0">
              {thankYouPage.steps.map((step, i) => (
                <div key={step.number} className="relative flex items-start gap-5 group">
                  {i < thankYouPage.steps.length - 1 && (
                    <div className="absolute left-[17px] top-10 bottom-0 w-px bg-surface-800/80" />
                  )}
                  <div className="relative z-10 w-9 h-9 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-brand-400">{step.number}</span>
                  </div>
                  <p className={`text-surface-300 text-base leading-relaxed pt-1.5 ${i < thankYouPage.steps.length - 1 ? 'pb-8' : ''}`}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fade-in-up [animation-delay:300ms] opacity-0">
          <Link
            to={thankYouPage.ctaHref}
            className="btn-primary gap-2 text-base px-8 py-4"
          >
            {thankYouPage.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}