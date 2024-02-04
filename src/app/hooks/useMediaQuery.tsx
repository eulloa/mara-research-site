import { useEffect, useState } from "react";

export const useMediaQuery = (mq: string): boolean => {
  if (typeof window !== "undefined") {
    const [matches, setMatches] = useState<boolean>(false);

    const mediaQueryList = window.matchMedia(mq);

    useEffect(() => {
      mediaQueryList.addEventListener("change", () => {
        if (mediaQueryList.matches) {
          setMatches(true);
        } else {
          setMatches(false);
        }
      });

      return () => {
        mediaQueryList.removeEventListener("change", () => {});
      };
    }, []);

    return matches;
  }

  return false;
};
