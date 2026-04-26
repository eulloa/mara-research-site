"use client";
import { useState, ReactNode, FC, useRef, useEffect } from 'react';

interface CollapsibleProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
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
  const [contentHeight, setContentHeight] = useState<number>(0);

  // 1. Use ResizeObserver to track the actual rendered height of the children
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // We measure the first child (the wrapper div) to get the true content height
        const height = entry.target.scrollHeight;
        setContentHeight(height);
      }
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  /* Notify parent when state changes */
  useEffect(() => {
    if (onToggle) onToggle(open);
  }, [open, onToggle]);

  const toggle = () => setOpen((o) => !o);

  return (
    <div className={`rounded-md overflow-hidden ${className} dark:bg-cerulean bg-lightBlue`}>
      {/* Header */}
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
        onClick={toggle}
        aria-expanded={open}
      >
        <div className="font-semibold text-lg dark:text-white text-gray-800">{title}</div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.04 1.08l-4 3.625a.75.75 0 01-1.04 0l-4-3.625a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Collapsible Section */}
      <div
        ref={contentRef}
        className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
        style={{
          // Use 'none' or a very large number if you want to disable 
          // the transition limit once open, but contentHeight is safest.
          maxHeight: open ? `${contentHeight}px` : '0px',
        }}
      >
        {/* Internal wrapper helps ResizeObserver measure accurately without padding issues */}
        <div className="px-4 py-4 text-gray-600 bg-lightBlue">
          {children}
        </div>
      </div>
    </div>
  );
};
