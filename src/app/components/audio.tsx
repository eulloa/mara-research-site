"use client";

import Image from "next/image";

const onClick = () => {
  const audio = document.querySelector("audio");
  audio?.play();
};

export const Audio = () => (
  <div className="block lg:flex">
    <div className="flex flex-1 lg:mt-4 justify-start lg:justify-center dark:text-white">
      <audio>
        <source src="audio/name.ogg" type="audio/ogg" />
        <source src="audio/name.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="inline-block mr-6" onClick={onClick}>
        <Image
          src="img/speaker.svg"
          width="20"
          height="20"
          alt="Mara Ulloa name"
        />
      </button>
      <span className="text-stone-500 text-xs font-thin">
        / MAHR-ah - OOh - YO-ah /
      </span>
    </div>
    <div className="flex-1"></div>
  </div>
);
