import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { brand, footer } from '../content/siteCopy';

export default function Footer() {
  return (
    <footer className="section-padding py-10 border-t border-surface-800/50">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-brand-400" />
          <span className="text-sm font-semibold text-white">{brand.name}</span>
        </div>

        <p className="text-xs text-surface-500 order-3 sm:order-2">
          {brand.copyright}
        </p>

        <nav aria-label="Footer navigation" className="flex gap-6 order-2 sm:order-3">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-surface-500 hover:text-surface-300 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
