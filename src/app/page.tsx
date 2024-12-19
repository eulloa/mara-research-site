import { Audio, Bio, News, Publications } from "@/components";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Bio />
      <Audio classes="hidden" />
      <Projects />
      <News />
      <Publications />
    </>
  );
}
