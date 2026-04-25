import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-block" aria-label="Contact">
      <div className="section-container">
        <div className="relative glass-card p-10 lg:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/[0.06] rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="section-title max-w-2xl mx-auto">
              Have a project in mind?
            </h2>
            <p className="section-subtitle">
              Tell us what you need and we will get back to you within 24 hours.
            </p>

            <div className="mt-10">
              <Link to="/contact" className="btn-primary gap-2 text-base px-8 py-4">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
