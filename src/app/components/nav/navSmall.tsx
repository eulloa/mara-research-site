import Link from "next/link";
import {
  Github,
  LinkedIn,
  Scholar,
  ThemeSwitcher,
  Twitter,
} from "@/components";
import { sendGAEvent } from "@next/third-parties/google";

type TNavSmall = {
  onClick: () => void;
};

export const NavSmall = ({ onClick }: TNavSmall) => {
  const top = window?.scrollY;

  return (
    <nav
      style={{ top: `${top}px` }}
      className="absolute bottom-0 right-0 left-0 dark:text-white align-middle bg-eggshell dark:bg-navy h-screen z-10"
    >
      <div className="relative top-1/2 translate-y-[-50%]">
        <ul className="justify-center mb-20">
          <li className="mb-8">
            <a className="flex justify-center" href="#news" onClick={onClick}>
              News
            </a>
          </li>
          <li className="mb-8">
            <a
              className="flex justify-center"
              href="#publications"
              onClick={onClick}
            >
              Publications
            </a>
          </li>
          <li className="mb-8">
            <a className="flex justify-center" href="#events" onClick={onClick}>
              Events
            </a>
          </li>
          <li>
            <Link
              className="hover:underline block text-center"
              href="/cv.pdf"
              onClick={() => {
                onClick();
                sendGAEvent({ event: "select_content", value: "CV" });
              }}
              target="_blank"
            >
              CV
            </Link>
          </li>
        </ul>
        <ul className="mt-4 flex-1 flex justify-center">
          <li className="pr-8">
            <Link
              href="https://www.linkedin.com/in/mara-ulloa/"
              target="_blank"
            >
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
      </div>
    </nav>
  );
};
