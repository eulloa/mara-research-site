import { Audio } from "@/components";

export const Bio = () => {
  return (
    <div className="block gap-x-10 dark:text-white lg:flex">
      <div className="flex-1 bg-[url('/img/bio.jpg')] bg-center bg-cover bg-no-repeat rounded-lg max-[1024px]:h-[500px] lg:h-auto"></div>
      <div className="flex-1">
        <h1 className="hidden md:block text-3xl">Hi, I&apos;m Mara Ulloa</h1>
        <Audio classes="hidden md:block lg:hidden" />
        <p className="mt-4 leading-7">
          I am a{" "}
          <span className="underline">
            <a
              href="https://new.nsf.gov/funding/opportunities/nsf-graduate-research-fellowship-program-grfp"
              target="_blank"
            >
              National Science Foundation GRFP Fellow
            </a>
          </span>{" "}
          and third-year PhD student in the department of{" "}
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
          (NU) in the Robert R. McCormick School of Engineering and Applied
          Science. As a member of the{" "}
          <span className="underline">
            <a href="https://sites.northwestern.edu/nupath/" target="_blank">
              Personalized & Adaptive Technology for Health
            </a>
          </span>{" "}
          (NU-Path) lab, my PhD work is mentored by{" "}
          <span className="underline">
            <a
              href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/jacobs-maia.html"
              target="_blank"
            >
              Dr. Maia L. Jacobs.
            </a>
          </span>
        </p>
        <p className="mt-4 leading-7 p-2 bg-lightBlue text-black">
          My research interests span across the fields of Human-Computer
          Interaction (HCI), Preventive Medicine, and Artificial Intelligence
          (AI), converging to explore the interplay between technology design and
          personalized health tools.
        </p>
        <p className="mt-4 leading-7">
          The objective of my work is to design novel strategies and
          interventions that apply user-centered design to address usability,
          safety, and ethical challenges when implementing machine learning
          insights into real-world settings.
        </p>
        <p className="mt-4 leading-7">
          I am currently working with the{" "}
          <span className="underline">
            <a href="https://casmi.northwestern.edu/" target="_blank">
              Center for Advancing Safety of Machine Intelligence
            </a>
          </span>{" "}
          (CASMI) in my department to{" "}
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
