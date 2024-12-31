"use client";

import { ThemeSwitcher } from "@/components";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

export const NavLarge = () => {
  return (
    <nav className="flex">
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <h1 className="dark:text-white font-bold">
            Mara Ulloa{" "}
            <span className="font-light text-gray">HCI Researcher</span>
          </h1>
        </Link>
      </div>
      <ul className="md:flex-1 md:flex justify-end">
        <li className="md:pr-8">
          <Link className="hover:underline block text-center" href="/">
            About
          </Link>
        </li>
        <li className="md:pr-8">
          <a className="hover:underline block text-center" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="md:pr-8">
          <Link
            className="hover:underline"
            href="/cv.pdf"
            target="_blank"
            onClick={() => sendGAEvent("click", "cv_clicked", { value: "CV" })}
          >
            CV
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
