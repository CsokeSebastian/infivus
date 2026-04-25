import { ArrowRight } from 'lucide-react';
import { cta } from '../content/siteCopy';
import { getStripeUrl } from '../lib/stripe';

export default function CTA() {
  return (
    <section id="cta" className="section-block" aria-label="Call to action">
      <div className="section-container">
        <div className="relative glass-card p-10 lg:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/[0.06] rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="section-title max-w-2xl mx-auto">
              {cta.heading}
            </h2>
            <p className="section-subtitle">
              {cta.subheading}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href={getStripeUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary gap-2 text-base px-8 py-4">
                {cta.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href={cta.secondaryCtaHref} className="btn-secondary text-base px-8 py-4">
                {cta.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
