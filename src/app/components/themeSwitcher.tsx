"use client";

import { useState } from "react";
import { ThemeOptions } from "@/enums";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Sends GA event on theme switch
 * @param {string} theme
 */
const analytics = (prevTheme: string): void => {
  const nextTheme = prevTheme === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT;
  sendGAEvent("event", `Switching from ${prevTheme} theme to ${nextTheme} theme`);
}

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useState<string>(ThemeOptions.DARK);
  const [icon, setIcon] = useState<string>("fa-sun");

  const updateTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeOptions.DARK ? ThemeOptions.LIGHT : ThemeOptions.DARK
    );

    setIcon(() => (theme === ThemeOptions.LIGHT ? "fa-sun" : "fa-moon"));

    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");

    analytics(theme);
  };

  const classes = [`theme-switcher-mode: ${theme}`, className]
    .filter((cssClass) => cssClass)
    .join(" ");

  return (
    <button className={classes} onClick={updateTheme}>
      <i className={`fas ${icon}`}></i>
    </button>
  );
};
