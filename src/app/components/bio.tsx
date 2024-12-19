import { Audio } from "@/components";

export const Bio = () => {
  return (
    <div className="block gap-x-10 dark:text-white lg:flex">
      <div className="flex-1 bg-[url('/img/bio.jpg')] bg-center bg-cover bg-no-repeat rounded-lg max-[1024px]:h-[500px] lg:h-auto"></div>
      <div className="flex-1">
        <h1 className="font-bold hidden md:block text-3xl">
          Hi, I&apos;m Mara Ulloa
        </h1>
        <Audio classes="hidden md:block lg:hidden" />
        <p className="mt-4 leading-7">
          I am a{" "}
          <span className="underline">
            <a
              href="https://new.nsf.gov/funding/opportunities/nsf-graduate-research-fellowship-program-grfp"
              target="_blank"
            >
              U.S. National Science Foundation GRFP Fellow,
            </a>
          </span>{" "}
          Human-Computer Interaction (HCI) Researcher, and PhD Candidate in the
          department of{" "}
          <span className="underline">
            <a
              href="https://www.mccormick.northwestern.edu/computer-science/"
              target="_blank"
            >
              Computer Science
            </a>
          </span>{" "}
          (CS) at{" "}
          <span className="underline">
            <a href="https://www.northwestern.edu/" target="_blank">
              Northwestern University
            </a>
          </span>{" "}
          (NU). My work is advised by{" "}
          <span className="underline">
            <a
              href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/jacobs-maia.html"
              target="_blank"
            >
              Maia L. Jacobs
            </a>
          </span>{" "}
          in the{" "}
          <span className="underline">
            <a href="https://sites.northwestern.edu/nupath/" target="_blank">
              Personalized & Adaptive Technology for Health
            </a>
          </span>{" "}
          (NU-PATH) lab.{" "}
        </p>
        <p className="mt-4 leading-7 p-2 bg-lightBlue text-navy rounded-lg">
          I specialize in using HCI methods to design and evaluate user-centered
          technologies.
        </p>
        <p className="mt-4 leading-7">
          My research focuses on co-designing machine learning solutions for
          healthcare, emphasizing the end user&apos;s perspective. One of my
          current projects in this space involves working with the{" "}
          <span className="underline">
            <a href="https://casmi.northwestern.edu/" target="_blank">
              Center for Advancing Safety of Machine Intelligence (CASMI)
            </a>
          </span>{" "}
          to{" "}
          <span className="underline">
            <a
              href="https://casmi.northwestern.edu/research/projects/prenatal-stress-reduction.html"
              target="_blank"
            >
              Co-Design Patient-Facing Machine Learning for Prenatal Stress
              Reduction.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
