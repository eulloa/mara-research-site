import { useState, useEffect, useRef } from 'react';

const Lightbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<(string | { src: string; alt: string })[]>([]);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Example images - replace with your actual image data
  useEffect(() => {
    setImages([
      { src: 'https://picsum.photos/seed/1/800/600', alt: 'Placeholder 1' },
      { src: 'https://picsum.photos/seed/2/800/600', alt: 'Placeholder 2' },
      { src: 'https://picsum.photos/seed/3/800/600', alt: 'Placeholder 3' }
    ]);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    // Focus trap to ensure keyboard navigation stays within lightbox
    lightboxRef.current?.focus();
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  // Accessibility: Ensure lightbox is focusable
  useEffect(() => {
    if (isOpen) {
      lightboxRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Trigger button - replace with your actual image gallery */}
      <button
        onClick={() => openLightbox(0)}
        className="border border-gray-300 rounded p-2 hover:bg-gray-100"
      >
        Open Lightbox
      </button>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-labelledby="lightbox-title"
          tabIndex={-1}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => closeLightbox()}
        >
          <div className="relative max-w-4xl max-h-screen w-full h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-400"
              aria-label="Close lightbox"
            >
              &times;
            </button>

            {/* Image display */}
            <div className="relative w-full h-full">
              {Array.isArray(images) && images.length > 0 && (
                <img
                  ref={imageRef}
                  src={typeof images[currentIndex] === 'string' ? images[currentIndex] : images[currentIndex].src}
                  alt={typeof images[currentIndex] === 'string' ? images[currentIndex] : images[currentIndex].alt}
                  className="w-full h-full object-contain"
                  role="img"
                  aria-label={typeof images[currentIndex] === 'string' ? images[currentIndex] : images[currentIndex].alt}
                />
              )}

              {/* Navigation buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                aria-label="Previous image"
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;
