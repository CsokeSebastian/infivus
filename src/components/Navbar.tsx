import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { brand, nav } from '../content/siteCopy';
import { getStripeUrl } from '../lib/stripe';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    if (!isHome && href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  }

  const linkEl = (href: string, label: string) =>
    isHome && href.startsWith('#') ? (
      <a
        href={href}
        onClick={() => handleNavClick(href)}
        className="text-sm text-surface-400 hover:text-white transition-colors duration-200"
      >
        {label}
      </a>
    ) : (
      <Link
        to={href.startsWith('#') ? '/' + href : href}
        className="text-sm text-surface-400 hover:text-white transition-colors duration-200"
      >
        {label}
      </Link>
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-950/90 backdrop-blur-lg border-b border-surface-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container section-padding" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Zap className="w-5 h-5 text-brand-400 group-hover:text-brand-300 transition-colors" />
            <span className="text-lg font-bold text-white tracking-tight">
              {brand.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <span key={link.href}>{linkEl(link.href, link.label)}</span>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={getStripeUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              {nav.cta}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-surface-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-surface-800/50 animate-fade-in">
            <div className="flex flex-col gap-4 mt-4">
              {nav.links.map((link) => (
                <span key={link.href}>{linkEl(link.href, link.label)}</span>
              ))}
              <a
                href={getStripeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm mt-2 text-center"
                onClick={() => setMobileOpen(false)}
              >
                {nav.cta}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
