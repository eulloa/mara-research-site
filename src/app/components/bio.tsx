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
          (CS) at Northwestern University (NU).
          Prior to joining NU, I graduated from Northeastern Illinois University (NEIU) with a B.S. in CS, with high honors. While at NEIU, I received two full scholarships: theDream.US National Scholarship and NEIU CS merit scholarship. I was also awarded the Abraham Lincoln Civic Engagement Award by the Governor of Illinois.
        </p>
        <p className="mt-4 leading-7 p-2 bg-lightBlue text-navy rounded-lg">
          I specialize in using Human-Computer Interaction (HCI) methods to design,
          engineer, and evaluate human-centered artificial intelligence (AI).
        </p>
        <p className="mt-4 leading-7">
          I have worked with Microsoft on generative AI (genAI) for Software Development; Northwestern
          University on machine learning (ML) for healthcare; The NSF National Center for Atmospheric
          Research on user experience (UX) for data visualization software.
        </p>
        <p className="mt-4 leading-7">
          In my interdisciplinary doctoral research, I develop and apply participatory design methods to co-design ML across varied health contexts.{" "}
          My work is advised by{" "}
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
        <p className="mt-4 leading-7">
          <span className="font-bold">Research interests/experience:</span>{" "}
          Human-Computer Interaction; artificial intelligence/machine learning/GenAI + design;
          UX; digital interventions; behavioral science; participatory design methods; future of work;
          software engineering; applied research.
        </p>
        <p className="mt-4 leading-7">
          <span className="font-bold">On the job market:</span>{" "}
          I am currently seeking PhD Research Intern positions for Summer 2026.
          I will be on the industry research scientist and faculty track job markets (2027 - 2028).
        </p>
      </div>
    </div>
  );
};
