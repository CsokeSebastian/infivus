import { Image, Megaphone, PenLine, FileText, Palette } from 'lucide-react';
import { services } from '../content/siteCopy';

const iconMap = { Image, Megaphone, PenLine, FileText, Palette } as const;

export default function Services() {
  return (
    <section id="services" className="section-block" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="section-header">
          <h2 id="services-heading" className="section-title">{services.heading}</h2>
          <p className="section-subtitle max-w-2xl">{services.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="glass-card p-6 lg:p-8 group hover:border-surface-700/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-surface-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
