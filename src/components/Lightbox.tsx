import { useEffect, useCallback, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { image: string; title: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  const animateClose = useCallback(() => {
    setExiting(true);
    setTimeout(onClose, 250);
  }, [onClose]);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') animateClose();
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onNavigate, animateClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) animateClose();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 60;
    if (touchDeltaX.current > threshold) {
      onNavigate((index - 1 + images.length) % images.length);
    } else if (touchDeltaX.current < -threshold) {
      onNavigate((index + 1) % images.length);
    }
  };

  const show = visible && !exiting;
  const item = images[index];

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-250 ${
        show ? 'bg-surface-950/90 backdrop-blur-sm' : 'bg-surface-950/0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        onClick={animateClose}
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-surface-800/70 text-surface-300 hover:text-white hover:bg-surface-700/80 transition-colors duration-200"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            className="absolute left-4 z-10 p-2.5 rounded-full bg-surface-800/70 text-surface-300 hover:text-white hover:bg-surface-700/80 transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate((index + 1) % images.length)}
            className="absolute right-4 z-10 p-2.5 rounded-full bg-surface-800/70 text-surface-300 hover:text-white hover:bg-surface-700/80 transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative max-w-[90vw] max-h-[85vh] transition-all duration-250 ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-w-full max-h-[85vh] object-contain rounded-xl"
        />
        <p className="absolute -bottom-10 left-0 right-0 text-center text-sm text-surface-400">
          {item.title}
          <span className="ml-3 text-surface-600">{index + 1} / {images.length}</span>
        </p>
      </div>
    </div>
  );
}
