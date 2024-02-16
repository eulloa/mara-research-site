import fs from "fs";
import path from "path";

import { Audio, Bio, Events, News } from "@/components";

const getImages = () => {
  const dir = path.resolve("./public/img/events");
  const images = fs.readdirSync(dir);

  return images;
};

const getDescriptions = () => {
  const descriptions: string[] = [];

  const captions = fs.readdirSync("./public/img/captions/", {
    encoding: "utf-8",
  });

  for (let i = 0; i < captions.length; i++) {
    const data = fs.readFileSync(`./public/img/captions/${captions[i]}`, {
      encoding: "utf-8",
    });

    descriptions.push(data);
  }

  return descriptions;
};

export default function Home() {
  const descriptions = getDescriptions();

  const images = getImages().map((img, index) => ({
    description: descriptions[index],
    src: `/img/events/${img}`,
  }));

  return (
    <>
      <Bio />
      <Audio classes="hidden" />
      <News />
      <Events images={images} />
    </>
  );
}
