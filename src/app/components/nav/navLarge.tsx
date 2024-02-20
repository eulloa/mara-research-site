"use client";

import Link from "next/link";
import {
  Github,
  LinkedIn,
  Scholar,
  ThemeSwitcher,
  Twitter,
} from "@/components";
import { sendGAEvent } from "@next/third-parties/google";

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
          <a className="hover:underline block text-center" href="#publications">
            Publications
          </a>
        </li>
        <li className="md:pr-8">
          <a className="hover:underline" href="#events">
            Events
          </a>
        </li>
        <li>
          <Link
            className="hover:underline"
            href="/cv.pdf"
            target="_blank"
            onClick={() => sendGAEvent({ event: "CVClicked" })}
          >
            CV
          </Link>
        </li>
      </ul>
      <ul className="flex-1 flex justify-center md:justify-end">
        <li className="pr-8">
          <Link href="https://www.linkedin.com/in/mara-ulloa/" target="_blank">
            <LinkedIn />
          </Link>
        </li>
        <li className="pr-8">
          <Link
            href="https://scholar.google.com/citations?hl=en&user=2rXe1OcAAAAJ"
            target="_blank"
          >
            <Scholar />
          </Link>
        </li>
        <li className="pr-8">
          <Link href="https://github.com/Mara16" target="_blank">
            <Github />
          </Link>
        </li>
        <li className="pr-8">
          <Link href="https://twitter.com/mara_ulloa__" target="_blank">
            <Twitter />
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
