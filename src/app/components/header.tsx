import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components";

export const Header = () => {
  return (
    <header className="px-4 md:px-48 py-8 bg-eggshell dark:bg-blue dark:text-white">
      <div className="flex">
        <ul className="flex-1 flex justify-start">
          <li className="pr-8">
            <a className="hover:underline" href="#news">
              News
            </a>
          </li>
          <li className="pr-8">
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
        <ul className="flex-1 flex justify-end">
          <li className="pr-8">
            <Link
              href="https://www.linkedin.com/in/mara-ulloa/"
              target="_blank"
            >
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
              <Image
                alt="Github"
                src="/img/github.svg"
                width="25"
                height="25"
              />
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
      </div>
    </header>
  );
};
