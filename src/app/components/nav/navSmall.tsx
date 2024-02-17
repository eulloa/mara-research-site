import Link from "next/link";
import {
  Github,
  LinkedIn,
  Scholar,
  ThemeSwitcher,
  Twitter,
} from "@/components";

type TNavSmall = {
  onClick: () => void;
};

export const NavSmall = ({ onClick }: TNavSmall) => {
  const top = window?.scrollY;

  return (
    <nav
      style={{ top: `${top}px` }}
      className="absolute md:flex bottom-0 right-0 left-0 md:static dark:text-white align-middle bg-eggshell dark:bg-navy h-screen z-10"
    >
      <div className="relative top-1/2 translate-y-[-50%]">
        <ul className="md:flex-1 md:flex justify-start mb-20">
          <li className="md:pr-8 mb-8">
            <a className="flex justify-center" href="#news">
              <button onClick={onClick}>News</button>
            </a>
          </li>
          <li className="md:pr-8 mb-8">
            <a className="flex justify-center" href="#publications">
              <button onClick={onClick}>Publications</button>
            </a>
          </li>
          <li className="md:pr-8 mb-8">
            <a className="flex justify-center" href="#events">
              <button onClick={onClick}>Events</button>
            </a>
          </li>
          <li>
            <Link
              className="hover:underline block text-center"
              href="/cv.pdf"
              target="_blank"
            >
              <button onClick={onClick}>CV</button>
            </Link>
          </li>
        </ul>
        <ul className="mt-4 flex-1 flex justify-center md:justify-end">
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
