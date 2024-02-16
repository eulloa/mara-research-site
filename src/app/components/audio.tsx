"use client";

import { Speaker } from "@/components";
import { TClasses } from "@/types";

const onClick = () => {
  const audio = document.querySelector("audio");
  audio?.play();
};

export const Audio = ({ classes }: TClasses) => (
  <div className={`block lg:flex ${classes}`}>
    <div className="flex flex-1 lg:mt-4 justify-start lg:justify-center dark:text-white">
      <audio>
        <source src="audio/name.ogg" type="audio/ogg" />
        <source src="audio/name.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="inline-block mr-6" onClick={onClick}>
        <Speaker />
      </button>
      <span className="text-stone-500 text-xs font-thin">
        / MAHR-ah - OOh - YO-ah /
      </span>
    </div>
    <div className="flex-1"></div>
  </div>
);
