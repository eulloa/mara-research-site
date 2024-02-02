import fs from "fs";
import path from "path";

import { Audio, Bio, Events, News } from "@/components";

const getEventImages = () => {
  const dir = path.resolve("./public/img/events");
  const images = fs.readdirSync(dir);

  return images;
};

export default function Home() {
  const images = getEventImages();

  return (
    <>
      <Bio />
      <Audio />
      <News />
      <Events images={images} />
    </>
  );
}
