import { Audio, Bio, News, Publications } from "@/components";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <Bio />
      <Audio classes="hidden" />
      <Portfolio />
      <Publications />
      <News />
    </>
  );
}
