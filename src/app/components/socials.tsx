import React, { ReactNode } from "react";
import Link from "next/link";
import { BlueSky, Github, LinkedIn, Orcid, Scholar } from "@/components";

export const Socials = ({
  children,
  className,
}: {
  children?: ReactNode;
  className: string;
}) => {
  return (
    <ul className={className}>
      <li className="pr-8">
        <Link
          className="LinkedIn"
          href="https://www.linkedin.com/in/mara-ulloa/"
          target="_blank"
        >
          <LinkedIn />
        </Link>
      </li>
      <li className="pr-8">
        <Link
          className="GoogleScholar"
          href="https://scholar.google.com/citations?hl=en&user=2rXe1OcAAAAJ"
          target="_blank"
        >
          <Scholar />
        </Link>
      </li>
      <li className="pr-8">
        <Link
          className="Github"
          href="https://github.com/Mara16"
          target="_blank"
        >
          <Github />
        </Link>
      </li>
      <li className="pr-8">
        <Link
          className="BlueSky"
          href="https://bsky.app/profile/mara-ulloa.bsky.social"
          target="_blank"
        >
          <BlueSky />
        </Link>
      </li>
      <li>
        <Link
          className="Orcid"
          href="https://orcid.org/0009-0005-4442-4520"
          target="_blank"
        >
          <Orcid />
        </Link>
      </li>
      {children && <li>{children}</li>}
    </ul>
  );
};
