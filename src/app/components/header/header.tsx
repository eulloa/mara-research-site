import { HeaderSmall } from "@/app/components/header/headerSmall";
import { HeaderLarge } from "@/app/components/header/headerLarge";

export const Header = () => (
  <header>
    <HeaderSmall classes="md:hidden bg-eggshell dark:bg-blue dark:text-white p-4" />
    <HeaderLarge classes="px-4 md:px-48 py-8 bg-eggshell dark:bg-blue dark:text-white hidden md:block" />
  </header>
);
