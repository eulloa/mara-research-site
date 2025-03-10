import { Audio } from "@/components";

export const Bio = () => {
  return (
    <div className="block gap-x-10 dark:text-white lg:flex">
      <div className="flex-1 bg-[url('/img/bio.jpg')] bg-center bg-cover bg-no-repeat rounded-lg max-[1024px]:h-[500px] min-[1400px]:min-h-[500px] min-[2000px]:min-h-[1000px] lg:h-auto"></div>
      <div className="flex-1">
        <Audio classes="hidden md:block lg:hidden" />
        <p className="leading-7">
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
          (CS) at Northwestern University (NU). My work is advised by{" "}
          <span className="underline">
            <a
              href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/jacobs-maia.html"
              target="_blank"
            >
              Maia L. Jacobs
            </a>
          </span>{" "}
          in the Personalized & Adaptive Technology for Health (NU-PATH) lab.{" "}
        </p>
        <p className="mt-4 leading-7 p-2 bg-lightBlue text-navy rounded-lg">
          I specialize in using Human-Computer Interaction (HCI) methodologies
          to design and evaluate human-centered Artificial
          Intelligence(AI)/Machine Learning(ML).
        </p>
        <p className="mt-4 leading-7">
          My interdisciplinary doctoral research focuses on developing and
          applying participatory design methods to co-design ML across different
          healthcare contexts, emphasizing the perspective of the end user.
        </p>
        <p className="mt-4 leading-7">
          More specifically, I investigate how ML-driven interventions for
          mitigating prenatal stress can be designed from the perspective of the
          pregnant person. This involves working with the{" "}
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
          </span>{" "}
          I also investigate the use of ML and conversational agents to support
          community members throughout their cancer journey.
        </p>
        <p className="mt-4 leading-7">
          <span className="font-bold">Research interests/experience:</span>{" "}
          Human-Computer Interaction; artificial intelligence/machine learning +
          design; UX; digital interventions; behavioral science, participatory
          design methods
        </p>
      </div>
    </div>
  );
};
