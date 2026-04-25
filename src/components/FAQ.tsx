import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from '../content/siteCopy';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-surface-800/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <h3 className="text-white font-medium pr-4 group-hover:text-brand-400 transition-colors duration-200 text-base">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-surface-500 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-surface-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-block" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="section-header">
          <h2 id="faq-heading" className="section-title">{faq.heading}</h2>
          <p className="section-subtitle">{faq.subheading}</p>
        </div>

        <div className="max-w-2xl mx-auto glass-card p-6 lg:p-8">
          {faq.items.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
