import { useState, useCallback } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { seo, brand, portfolioPage } from '../content/siteCopy';
import Lightbox from '../components/Lightbox';

export default function WorkPage() {
  usePageMeta({
    title: seo.work.title,
    description: seo.work.description,
    canonical: `${brand.url}/work`,
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNavigate = useCallback((i: number) => setLightboxIndex(i), []);
  const handleClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <main className="section-block">
      <div className="section-container">
        <div className="section-header">
          <h1 className="section-title">{portfolioPage.heading}</h1>
          <p className="section-subtitle">{portfolioPage.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioPage.items.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => setLightboxIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(i); }}
            >
              <div className="glass-card overflow-hidden transition-all duration-300 hover:border-surface-600/60 hover:-translate-y-1 h-full flex flex-col">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-6 py-5">
                  <h3 className="text-sm font-medium text-surface-300 tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={portfolioPage.items}
          index={lightboxIndex}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}
    </main>
  );
}
