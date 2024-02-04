import { ThemeOptions } from "@/enums";
 
 export const setStorageItem = (item: string, value: string): void => {
   if (typeof window !== "undefined") {
     window.localStorage.setItem(item, value);
   }
 };
 
 export const setThemeFromStorage = (): void => {
   if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setStorageItem("theme", ThemeOptions.DARK);
    } else {
      document.documentElement.classList.remove("dark");
      setStorageItem("theme", ThemeOptions.LIGHT);
    }
 }


 export const getThemeFromStorage = (): string => {
  let theme;

  if (typeof window !== "undefined") {
    theme = window.localStorage.getItem("theme");
  }

  return theme ?? "light";
 }
