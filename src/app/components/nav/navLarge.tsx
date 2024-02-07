"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components";

export const NavLarge = () => {
  return (
    <nav className="flex ">
      <ul className="md:flex-1 md:flex justify-start">
        <li className="md:pr-8">
          <a className="hover:underline block text-center" href="#news">
            News
          </a>
        </li>
        <li className="md:pr-8">
          <a className="hover:underline" href="#events">
            Events
          </a>
        </li>
        <li>
          <Link className="hover:underline" href="/cv.pdf" target="_blank">
            CV
          </Link>
        </li>
      </ul>
      <ul className="flex-1 flex justify-center md:justify-end">
        <li className="pr-8">
          <Link href="https://www.linkedin.com/in/mara-ulloa/" target="_blank">
            <Image
              alt="Linked In"
              src="/img/linkedin.svg"
              width="25"
              height="25"
            />
          </Link>
        </li>
        <li className="pr-8">
          <Link href="https://github.com/Mara16" target="_blank">
            <Image alt="Github" src="/img/github.svg" width="25" height="25" />
          </Link>
        </li>
        <li className="pr-8">
          <Link href="https://twitter.com/mara_ulloa__" target="_blank">
            <Image
              alt="Twitter"
              src="/img/twitter.svg"
              width="25"
              height="25"
            />
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
