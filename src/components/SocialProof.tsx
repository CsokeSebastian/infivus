import { Star } from 'lucide-react';
import { socialProof } from '../content/siteCopy';

export default function SocialProof() {
  return (
    <section className="section-block" aria-label="Social proof">
      <div className="section-container">
        <h2 className="text-center text-sm font-medium text-surface-500 uppercase tracking-widest mb-12">
          {socialProof.heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-14 mb-16">
          {socialProof.logos.map((logo) => (
            <div
              key={logo}
              className="text-surface-600 font-semibold text-sm tracking-wide hover:text-surface-400 transition-colors duration-200"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socialProof.testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-6 lg:p-8 flex flex-col justify-between hover:border-surface-700/60 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-brand-400 fill-brand-400"
                    />
                  ))}
                </div>
                <blockquote className="text-surface-200 leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-800/50">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-surface-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
