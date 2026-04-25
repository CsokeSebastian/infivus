import { howItWorks } from '../content/siteCopy';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-block" aria-labelledby="how-it-works-heading">
      <div className="section-container">
        <div className="section-header">
          <h2 id="how-it-works-heading" className="section-title">{howItWorks.heading}</h2>
          <p className="section-subtitle">{howItWorks.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.steps.map((step, i) => (
            <div
              key={i}
              className="glass-card p-6 lg:p-8 group hover:border-brand-500/30 transition-all duration-300"
            >
              <span className="text-4xl font-bold text-brand-500/20 group-hover:text-brand-500/40 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-surface-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
