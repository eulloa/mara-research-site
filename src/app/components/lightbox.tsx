"use client";
import {
  useState,
  useEffect,
  useCallback,
  ReactNode,
  FC,
  MouseEvent,
} from 'react';

export interface LightboxImage {
  /** Image source URL */
  src: string;
  /** Optional alt text */
  alt?: string;
  /** Optional caption that appears below the image */
  caption?: string;
  /** Optional title that appears in the top‑right corner when open */
  title?: string;
}

export interface LightboxProps {
  /** Array of images that will be displayed as thumbnails + in the modal */
  images: LightboxImage[];
  /** Optional class name for the thumbnail grid wrapper */
  gridClassName?: string;
  /** Optional class name for each thumbnail container */
  thumbClassName?: string;
  /** Optional function called whenever the lightbox opens/closes */
  onToggle?: (open: boolean, index?: number) => void;
}

export const Lightbox: FC<LightboxProps> = ({
  images,
  gridClassName = 'grid sm:grid-cols-3 grid-cols-1 gap-2',
  thumbClassName = 'relative cursor-pointer overflow-hidden rounded',
  onToggle,
}) => {
  /* ---- State ---- */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* ---- Handlers ---- */
  const open = useCallback(
    (idx: number) => {
      setOpenIndex(idx);
      onToggle?.(true, idx);

      // do not allow UI to scroll when lightbox is open
      document.body.classList.add('lock-scroll');
    },
    [onToggle],
  );

  const close = useCallback(() => {
    setOpenIndex(null);
    onToggle?.(false);

    // allow UI to scroll when lightbox closes
    document.body.classList.remove('lock-scroll');
  }, [onToggle]);

  const next = useCallback(
    (e?: MouseEvent) => {
      e?.stopPropagation();
      if (openIndex === null) return;
      setOpenIndex((openIndex + 1) % images.length);
    },
    [openIndex, images.length],
  );

  const prev = useCallback(
    (e?: MouseEvent) => {
      e?.stopPropagation();
      if (openIndex === null) return;
      setOpenIndex(
        (openIndex - 1 + images.length) % images.length,
      );
    },
    [openIndex, images.length],
  );

  /* ---- Keyboard support ---- */
  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [openIndex, close, next, prev]);

  /* ---- Render ---- */
  return (
    <>
      {/* Thumbnails */}
      <div className={gridClassName}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={thumbClassName}
            onClick={() => open(idx)}
          >
            <img
              src={img.src}
              alt={img.alt ?? `Image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-200 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
          onClick={close}
          aria-modal="true"
          role="dialog"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-caption"
        >
          {/* Prevent click events from bubbling to overlay */}
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              onClick={close}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={images[openIndex].src}
                alt={images[openIndex].alt ?? `Image ${openIndex + 1}`}
                className="max-h-[80vh] max-w-full object-contain rounded"
                id="lightbox-image"
              />
            </div>

            {/* Caption / Title */}
            {images[openIndex].title && (
              <h2
                id="lightbox-title"
                className="mt-4 text-xl font-semibold text-white text-center"
              >
                {images[openIndex].title}
              </h2>
            )}
            {images[openIndex].caption && (
              <p
                id="lightbox-caption"
                className="mt-2 text-sm text-gray-200 text-center"
              >
                {images[openIndex].caption}
              </p>
            )}

            {/* Navigation arrows */}
            {images?.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
                onClick={prev}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
                onClick={next}
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
