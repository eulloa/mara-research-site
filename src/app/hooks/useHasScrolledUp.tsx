import { useEffect, useState } from "react";

enum Direction {
  DOWN = "DOWN",
  UP = "UP",
}

export const useHasScrolledUp = (target: number = 0): boolean => {
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: Direction.UP,
    scrollPos: 0,
  });

  const handleScroll = () => {
    if (target && document.body.getBoundingClientRect().top >= target) {
      return {
        scrollDirection: Direction.UP,
        scrollPos: document.body.getBoundingClientRect().top,
      };
    }

    setScrollStatus((prev) => {
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? Direction.UP
            : Direction.DOWN,
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);

    return () => window?.removeEventListener("scroll", handleScroll);
  });

  return scrollStatus.scrollDirection === Direction.UP ? true : false;
};
