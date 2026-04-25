import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { selectedWork } from '../content/siteCopy';

export default function SelectedWork() {
  return (
    <section id="work" className="section-block" aria-labelledby="work-heading">
      <div className="section-container">
        <div className="text-center">
          <h2 id="work-heading" className="section-title">{selectedWork.heading}</h2>
          <p className="section-subtitle">{selectedWork.subheading}</p>
          <div className="mt-10">
            <Link
              to={selectedWork.ctaHref}
              className="btn-primary gap-2 text-base px-8 py-4"
            >
              {selectedWork.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
