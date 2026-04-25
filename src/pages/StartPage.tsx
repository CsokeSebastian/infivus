import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { startPage, seo, brand } from '../content/siteCopy';
import usePageMeta from '../hooks/usePageMeta';

const WEB3FORMS_KEY = 'd51746b1-2034-4916-bde3-757024810fa9';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function StartPage() {
  usePageMeta({
    title: seo.start.title,
    description: seo.start.description,
    canonical: `${brand.url}/start`,
  });

  const [status, setStatus] = useState<Status>('idle');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [request, setRequest] = useState('');
  const [links, setLinks] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New client request from ${fullName.trim()}`,
          name: fullName.trim(),
          email: email.trim(),
          business_name: businessName.trim(),
          request: request.trim(),
          links: links.trim(),
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setFullName('');
      setEmail('');
      setBusinessName('');
      setRequest('');
      setLinks('');
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full bg-surface-900/60 border border-surface-800/60 rounded-xl px-4 py-3 text-white placeholder-surface-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-200';

  return (
    <main className="section-padding pt-28 lg:pt-36 pb-20">
      <div className="section-container max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {startPage.title}
        </h1>

        <div className="mt-6 flex items-start gap-3 glass-card px-5 py-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
          <p className="text-sm text-surface-400 leading-relaxed">
            {startPage.note}
          </p>
        </div>

        {status === 'success' ? (
          <div className="mt-12 glass-card p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-5 h-5 text-brand-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              {startPage.successMessage}
            </h2>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm text-brand-400 hover:text-brand-300 transition-colors duration-200"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-surface-300 mb-2">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-surface-300 mb-2">
                Business name
              </label>
              <input
                id="businessName"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Your company or brand"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="request" className="block text-sm font-medium text-surface-300 mb-2">
                What would you like us to work on first?
              </label>
              <textarea
                id="request"
                required
                rows={5}
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="Describe your request in detail..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label htmlFor="links" className="block text-sm font-medium text-surface-300 mb-2">
                Links or references
              </label>
              <textarea
                id="links"
                rows={3}
                value={links}
                onChange={(e) => setLinks(e.target.value)}
                placeholder="Paste any relevant links, references, or inspiration..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary gap-2 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Submitting...' : startPage.submitLabel}
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
