"use client";

import { useEffect, useState } from "react";
import {
  getThemeFromStorage,
  setStorageItem,
  setThemeFromStorage,
} from "@/helpers";
import { ThemeOptions } from "@/enums";

export const ThemeSwitcher = () => {
  const [iconClass, setIconClass] = useState<string>(
    getThemeFromStorage() === ThemeOptions.LIGHT ? "fa-moon" : "fa-sun"
  );

  useEffect(() => {
    setThemeFromStorage();
  }, []);

  const updateTheme = () => {
    const theme = getThemeFromStorage();

    setStorageItem(
      "theme",
      theme === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT
    );

    setThemeFromStorage();
    setIconClass(theme === ThemeOptions.LIGHT ? "fa-sun" : "fa-moon");
  };

  return (
    <button onClick={updateTheme}>
      <i className={`fas ${iconClass}`}></i>
    </button>
  );
};
