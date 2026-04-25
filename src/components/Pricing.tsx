import { Check, ArrowRight } from 'lucide-react';
import { pricing } from '../content/siteCopy';
import { getStripeUrl } from '../lib/stripe';

export default function Pricing() {
  const { plan } = pricing;

  return (
    <section id="pricing" className="section-block" aria-labelledby="pricing-heading">
      <div className="section-container">
        <div className="section-header">
          <h2 id="pricing-heading" className="section-title">{pricing.heading}</h2>
          <p className="section-subtitle max-w-2xl">{pricing.subheading}</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative glass-card p-8 lg:p-10 flex flex-col border-brand-500/40 hover:border-brand-500/60 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-surface-400">{plan.description}</p>
            </div>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl lg:text-5xl font-bold text-white">
                {plan.price}
              </span>
              <span className="text-surface-500 text-sm">{plan.period}</span>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-surface-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={getStripeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 gap-2 text-center"
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
