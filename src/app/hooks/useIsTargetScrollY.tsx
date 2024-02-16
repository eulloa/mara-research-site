"use client";

import { useEffect, useState } from "react";

export const useIsTargetScrollY = (targetOffset: number): boolean => {
  const [isTargetScrollY, setIsTargetScrollY] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);

  const handleScroll = () => {
    setCurrentOffset(window?.scrollY);
    currentOffset >= targetOffset
      ? setIsTargetScrollY(true)
      : setIsTargetScrollY(false);
  };

  useEffect(() => {
    setCurrentOffset(window?.scrollY);
  }, []);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);

    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  });

  return isTargetScrollY;
};
