"use client";

import { HeaderSmall } from "@/app/components/header/headerSmall";
import { HeaderLarge } from "@/app/components/header/headerLarge";
import { useHasScrolledUp } from "@/hooks";

export const Header = () => {
  const large = useHasScrolledUp() ? "top-0" : "top-[-89px]";
  const small = useHasScrolledUp() ? "top-0" : "top-[-80px]";

  return (
    <header>
      <HeaderSmall
        classes={`z-20 lg:hidden bg-eggshell dark:bg-navy dark:text-white p-4 fixed w-full ${small} drop-shadow transition-all`}
      />
      <HeaderLarge
        classes={`z-20 px-4 md:px-48 py-8 bg-eggshell dark:bg-navy dark:text-white hidden lg:block fixed w-full ${large} drop-shadow transition-all`}
      />
    </header>
  );
};
