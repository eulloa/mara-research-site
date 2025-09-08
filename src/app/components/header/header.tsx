"use client";

import { HeaderSmall } from "@/app/components/header/headerSmall";
import { HeaderLarge } from "@/app/components/header/headerLarge";
import { useHasScrolledUp } from "@/hooks";

export const Header = () => (useHasScrolledUp(0) ? (
    <header>
      <HeaderSmall
        classes={`z-20 lg:hidden bg-eggshell dark:bg-navy dark:text-white p-4 fixed w-full top-[0] drop-shadow transition-all`}
      />
      <HeaderLarge
        classes={`z-20 px-4 md:px-48 py-8 bg-eggshell dark:bg-navy dark:text-white hidden lg:block fixed w-full top-[0] drop-shadow transition-all`}
      />
    </header>
  ) : null
);
