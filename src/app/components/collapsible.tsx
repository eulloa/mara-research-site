"use client";

import { useState, ReactNode, FC, useRef, useEffect, useLayoutEffect } from 'react';
import { sendGAEvent } from "@next/third-parties/google";

interface AnalyticsProps {
  page: string;
  details: string;
}

interface CollapsibleProps {
  analytics?: AnalyticsProps;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  title: ReactNode;
}

export const Collapsible: FC<CollapsibleProps> = ({
  analytics,
  title,
  children,
  defaultOpen = false,
  onToggle,
  className = '',
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // FIX 1: Enforce hard scroll reset to Top on initial client-side node attachment
  // useLayoutEffect runs synchronously BEFORE the browser paints, killing the soft-nav scroll anchors
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }, []);

  // FIX 2: Delay the ResizeObserver execution slightly to keep it out of the critical paint loop
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      // Isolates mutations from the browser's native layout engine anchor tracking
      window.requestAnimationFrame(() => {
        for (let entry of entries) {
          const height = entry.target.scrollHeight;
          setContentHeight(height);
        }
      });
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  /* Notify parent when state changes */
  useEffect(() => {
    if (onToggle) onToggle(open);
  }, [open, onToggle]);

  const toggle = () => {
    setOpen((o) => !o);

    if (analytics) {
      // Fixes GA argument serialization issues present in @next/third-parties
      sendGAEvent('event', analytics.page, { details: analytics.details });
    }
  };

  return (
    <div className={`rounded-md overflow-hidden ${className} bg-lightBlue`}>
      {/* Header */}
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
        onClick={toggle}
        aria-expanded={open}
      >
        <div className="font-semibold text-lg text-gray-800">{title}</div>
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
          // Explicitly fallback safely if the height calculations are pending
          maxHeight: open ? (contentHeight ? `${contentHeight}px` : 'none') : '0px',
        }}
      >
        <div className="px-4 py-4 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

