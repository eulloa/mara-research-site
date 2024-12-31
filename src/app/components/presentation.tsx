"use client";

import React, { useEffect, useState } from "react";

export const Presentation = () => {
  const [width, setWidth] = useState<number>(345);

  useEffect(() => {
    setWidth(
      document
        ?.getElementsByClassName("presentation")[0]
        ?.getBoundingClientRect().width
    );
  }, []);

  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="rounded-lg"
      height="315"
      title="2024 SIParCS Presentation Mara Ulloa"
      referrerPolicy="strict-origin-when-cross-origin"
      src="https://www.youtube.com/embed/pbnEhFHh6TY?si=amSxfbgJap-kcF-3&amp;start=74"
      width={width}
    ></iframe>
  );
};
