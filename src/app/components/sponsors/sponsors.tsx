import React from "react";
import Image from "next/image";

interface ISponsor {
  label: string;
  subLabel: string;
}

interface ISponsors {
  sponsors: ISponsor[];
  title: string;
  url: string;
}

export const Sponsors = ({ sponsors, title, url }: ISponsors) => {
  return (
    <div className="p-4" id="sponsors">
      <h1 className="dark:text-white mb-8">{title}</h1>
      <div className="bg-white rounded-lg">
        <Image
          src={url}
          alt=""
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={1}
          height={1}
          // src={url}
          // alt="Picture of the author"
          // sizes="100vw"
          // fill
          // style={{
          //   objectFit: 'contain',
          // }}
        />
      </div>
      <ul className="dark:text-white mt-4">
        {sponsors.map((sponsor, index) => (
          <li key={index}>
            {sponsor.label}, {sponsor.subLabel}
          </li>
        ))}
      </ul>
    </div>
  );
};
