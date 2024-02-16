import { HeaderSmall } from "@/app/components/header/headerSmall";
import { HeaderLarge } from "@/app/components/header/headerLarge";

export const Header = () => (
  <header>
    <HeaderSmall classes="z-20 md:hidden bg-eggshell dark:bg-navy dark:text-white p-4 fixed w-full top-0 drop-shadow" />
    <HeaderLarge classes="z-20 px-4 md:px-48 py-8 bg-eggshell dark:bg-navy dark:text-white hidden md:block fixed w-full top-0 drop-shadow" />
  </header>
);
