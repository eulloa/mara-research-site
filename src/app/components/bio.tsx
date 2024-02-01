export const Bio = () => {
  return (
    <div className="flex gap-x-10">
      <div className="flex-1 bg-[url('/img/bio.jpg')] bg-center bg-cover bg-no-repeat rounded-lg"></div>
      <div className="flex-1">
        <h1 className="text-3xl">Hi, I'm Mara Ulloa</h1>
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
          and third-year PhD student in the department of Computer Science (CSI)
          at Northwestern University (NU) in the Robert R. McCormick School of
          Engineering and Applied Science. As a member of the Personalized &
          Adaptive Technology for Health (NU-Path) lab, my PhD work is mentored
          by Dr. Maia L. Jacobs.
        </p>
        <p className="mt-4 leading-7">
          My research interests span across the fields of Human-Computer
          Interaction (HCI), Preventive Medicine, and Artificial Intelligence
          (AI), convering to explore the interplay between technology design and
          personalized health tools.
        </p>
        <p className="mt-4 leading-7">
          The objective of my work is to design novel strategies and
          interventions that apply user-centered design to address usability,
          safety, and ethical challenges when implementing machine learning
          insights into real-world settings.
        </p>
        <p className="mt-4 leading-7">
          I am currently working with the Center for Advancing Safety of Machine
          Intelligence (CASMI) in my department to Co-Design Patient-Facing
          Machine Learning for Prenatal Stress Reduction.
        </p>
      </div>
    </div>
  );
};
