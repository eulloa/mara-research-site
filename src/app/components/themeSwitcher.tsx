"use client";

import { useState } from "react";
import { ThemeOptions } from "@/enums";

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useState<string>(ThemeOptions.DARK);
  const [icon, setIcon] = useState<string>("fa-sun");

  const updateTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeOptions.DARK ? ThemeOptions.LIGHT : ThemeOptions.DARK
    );

    setIcon(theme === ThemeOptions.LIGHT ? "fa-sun" : "fa-moon");

    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  return (
    <button className={className} onClick={updateTheme}>
      <i className={`fas ${icon}`}></i>
    </button>
  );
};
