import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-24">
      <div className="flex">
        <ul className="flex-1 flex justify-start">
          <li className="pr-4">Bio</li>
          <li className="pr-4">News</li>
          <li className="pr-4">Events</li>
          <li>
            <Link href="/cv.pdf" target="_blank">CV</Link>
          </li>
        </ul>
        <ul className="flex-1 flex justify-end">
          <li className="pr-4">
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
          <li className="pr-4">
            <Link href="https://github.com/Mara16" target="_blank">
              <Image
                alt="Github"
                src="/img/github.svg"
                width="25"
                height="25"
              />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/mara_ulloa__" target="_blank">
              <Image
                alt="Twitter"
                src="/img/twitter.svg"
                width="25"
                height="25"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
