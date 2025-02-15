import Link from "next/link";
import { Socials } from "@/components";
import { sendGAEvent } from "@next/third-parties/google";
import { ThemeSwitcher } from "@/components";

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
            <Link
              className="flex justify-center"
              href="/"
              onClick={() => {
                document.body.classList.remove("overflow-y-hidden");
                onClick();
              }}
            >
              About
            </Link>
          </li>
          <li className="mb-8">
            <Link
              className="flex justify-center"
              href="/#portfolio"
              onClick={onClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline block text-center"
              href="/cv.pdf"
              onClick={() => {
                onClick();
                sendGAEvent("click", "cv_clicked");
              }}
              target="_blank"
            >
              CV
            </Link>
          </li>
        </ul>
        <Socials className="mt-4 flex-1 flex justify-center">
          <ThemeSwitcher className="pl-8" />
        </Socials>
      </div>
    </nav>
  );
};
