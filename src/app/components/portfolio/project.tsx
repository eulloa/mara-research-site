import React from "react";
import Link from "next/link";

interface IProject {
  href: string;
  label: string;
  subLabel: string;
  url: string;
}

export const Project = ({ href, label, subLabel, url }: IProject) => (
  <Link className="grid min-h-full" href={href}>
    <div className="bg-lightBlue rounded-lg min-h-[400px]">
      <div
        className="min-h-[200px] rounded-t-lg lg:h-auto"
        style={{
          background: `center / cover no-repeat url("/img/${url}")`,
        }}
      ></div>
      <div className="p-4">
        <h1 className="text-lg">{label}</h1>
        <h2 className="text-2xl font-semibold">{subLabel}</h2>
      </div>
    </div>
  </Link>
);
