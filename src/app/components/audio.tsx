"use client";

import Image from "next/image";

const onClick = () => {
  const audio = document.querySelector("audio");
  audio?.play();
};

export const Audio = () => (
  <div className="flex">
    <div className="flex flex-1 mt-4 justify-center dark:text-white">
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
      <span className="text-stone-500">/ MAHR-ah - OOh - YO-ah /</span>
    </div>
    <div className="flex-1"></div>
  </div>
);
