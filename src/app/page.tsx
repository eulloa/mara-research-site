import { Audio, Bio, Events, News } from "@/components";

export default function Home() {
  return (
    <>
      <Bio />
      <Audio classes="hidden" />
      <News />
      <Events />
    </>
  );
}
