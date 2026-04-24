"use client";
import { useState, ReactNode, FC, useRef, useEffect } from 'react';

interface CollapsibleProps {
  /** The header content (string, icon, etc.) */
  title: ReactNode;

  /** Anything you want to show inside the panel */
  children: ReactNode;

  /** Start collapsed (default is open) */
  defaultOpen?: boolean;

  /** Called when the panel is toggled; receives the new state (true = open) */
  onToggle?: (open: boolean) => void;

  /** Optional Tailwind classes for the wrapper */
  className?: string;
}

export const Collapsible: FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
  onToggle,
  className = '',
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  /* Notify parent when state changes */
  useEffect(() => {
    if (onToggle) onToggle(open);
  }, [open, onToggle]);

  const toggle = () => setOpen((o) => !o);

  /* We’ll use a CSS trick to animate the height:
     - The inner div is `overflow-hidden`.
     - The `max-h-[...px]` class is set based on the content’s scrollHeight.  */
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [children]); // re‑measure if content changes

  return (
    <div className={`border rounded-md ${className} bg-lightBlue`}>
      {/* Header – always visible */}
      <button
        type="button"
        className="flex justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="collapsible-content"
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.04 1.08l-4 3.625a.75.75 0 01-1.04 0l-4-3.625a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Content – collapsible section */}
      <div
        id="collapsible-content"
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: open ? `${maxHeight}px` : 0,
        }}
        aria-hidden={!open}
      >
        <div className="px-4 py-3 text-md text-gray-600">{children}</div>
      </div>
    </div>
  );
};

