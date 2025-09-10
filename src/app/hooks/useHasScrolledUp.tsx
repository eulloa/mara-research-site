import { useCallback, useEffect, useState } from "react";

enum Direction {
  DOWN = "DOWN",
  UP = "UP",
}

export const useHasScrolledUp = (target: number): boolean => {
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: Direction.UP,
    scrollPos: 0,
  });

  const handleScroll = useCallback(() => {
    const top = document.body.getBoundingClientRect().top;

    if (top >= target) {
      setScrollStatus({
        scrollDirection: Direction.UP,
        scrollPos: top 
      });

      return;
    }

    setScrollStatus((prev) => {
      return {
        scrollDirection:
          top > prev.scrollPos
            ? Direction.UP
            : Direction.DOWN,
        scrollPos: top,
      };
    });
  }, [target]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);

    return () => window?.removeEventListener("scroll", handleScroll);
  }, [handleScroll, scrollStatus]);

  return scrollStatus.scrollDirection === Direction.UP;
};
