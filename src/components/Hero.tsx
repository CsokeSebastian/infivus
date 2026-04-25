import { ArrowRight } from 'lucide-react';
import { hero } from '../content/siteCopy';
import { getStripeUrl } from '../lib/stripe';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding pt-24 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-800/50 to-transparent" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in-up whitespace-pre-line">
            {hero.headline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-2xl animate-fade-in-up [animation-delay:100ms] opacity-0">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:200ms] opacity-0">
            <a href={getStripeUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary gap-2 text-base px-8 py-4">
              {hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={hero.secondaryCtaHref} className="btn-secondary text-base px-8 py-4">
              {hero.secondaryCta}
            </a>
          </div>

          <p className="mt-8 text-sm text-surface-500 animate-fade-in-up [animation-delay:300ms] opacity-0">
            {hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
