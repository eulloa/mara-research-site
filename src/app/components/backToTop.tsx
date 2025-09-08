"use client";

import { useIsTargetScrollY } from "@/hooks";

export const BackToTop = () => {
  const scrollToTop = () => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return useIsTargetScrollY(100) ? (
    <button
      className="fixed bottom-0 right-0 dark:text-white p-2 bg-black dark:bg-white rounded-full mr-2 mb-2 z-10"
      id="scrollToTop"
      onClick={scrollToTop}
    >
      &#11014;&#65039;
    </button>
  ) : false;
};
