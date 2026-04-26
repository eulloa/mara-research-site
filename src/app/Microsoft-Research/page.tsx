import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  PrenatalStressReduction,
  DataVisualizationSoftware,
  MuseumTouchscreen,
  SelectedProjects,
} from "@/components/portfolio";
import { Collapsible, Lightbox, LightboxImage } from "@/components";

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "Knowledge Work, Generative AI, Microsoft, Microsoft Research, Mara Ulloa, Statistical and Qualitative," +
    "Statistical Method, Qualitative Method, Understanding People, Software Engineering, Product Management," +
    "Product Managers, Developers, productivity, AI literacy, generative AI literacy"
  ],
  title:
    "Mara Ulloa: Microsoft Research"
};

const interviews: LightboxImage = {
  src: "/img/portfolio/GenAI-PM/Figure_1.png",
  alt: "I conducted informal interviews, 15 interviews, and gathered 885 survey responses. 731/885 survey participants consented to system telemetry data analysis.",
  title: "Informal Interviews",
};

const jobDisplacementConcerns: LightboxImage = {
  src: "/img/portfolio/GenAI-PM/Figure_2.png",
  alt: "GenAI Job Displacement Concerns",
  title: "Survey analysis from 885 PMs, including both Indvidual Contributors and People Managers"
};

const selectiveDelegationFramework: LightboxImage = {
  src: "/img/portfolio/GenAI-PM/Figure_0.png",
  alt: "The Selective Delegation Framework",
  title: "PMs identified values at the individual, team, and organizational levels influencing task delegation to genAI"
};

const benefitsOfAdoption: LightboxImage = {
  src: "/img/portfolio/GenAI-PM/Figure_3.png",
  alt: 'Perceived Barriers to Generative AI Adoption',
  title: 'Perceived Barriers to Generative AI Adoption',
};

const genAIBenefits: LightboxImage = {
  src: "/img/portfolio/GenAI-PM/Benefits.png",
  alt:"Individual Contributor coded responses to the optional,open-text question: In your opinion, what is the single biggest benefit you've gained from using Generative AI (if any)?",
  title: "Individual Contributor coded responses to the optional,open-text question: <i> In your opinion, what is the single biggest benefit you&rsquo;ve gained from using Generative AI, if any?</i>"
};

const attitudesTowardUsage: LightboxImage = {
  src: "/img/portfolio/GenAI-PM/Attitudes.png",
  alt:"Individual Contributor coded responses to the optional,open-text question: In your opinion, what is the single biggest benefit you've gained from using Generative AI (if any)?",
  title: "A selection of responses to Likert questions posed to 735 Individual Contributors about their thoughts and beliefs on GenAI."
};

const deliverables: LightboxImage[] = [
  jobDisplacementConcerns,
  selectiveDelegationFramework,
  genAIBenefits,
  attitudesTowardUsage
];

const awardPresentation: LightboxImage[] = [
  {
    src: "/img/portfolio/GenAI-PM/ICSE_00.jpeg",
    title:"Mara Ulloa presenting the paper for this work facing the audience; the screen behind her has ICSE logos and shows the title slide.",
    alt: "ICSE Presentation"
  },
  {
    src: "/img/portfolio/GenAI-PM/ICSE_01.jpeg",
    alt: "ISCE Presentation",
    title:"Mara Ulloa presenting the paper for this work facing projected slide behind her and bringing attention to it with her left hand; the screen behind her has ICSE logos and shows the slide on 'rethinking software engineering, as PMs move down the stack."
  },
];

const catto: LightboxImage = {
    src: "/img/portfolio/GenAI-PM/Catto.png",
    alt: "Catto",
    title:"A fluffy oranage cat using a windows laptop with the text 'GenAI Delegation' above it and a quote 'Accountability must not be delegateed to non-human actors' below it. It also includes a qr code to the paper."
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
          Product Managers&rsquo; Integration of Generative AI into Knowledge Work 
      </h1>
      <h2 className="dark:text-white mb-4">April 2025 - June 2025 (12 weeks)</h2>
      <Collapsible className="mb-4" title="Project overview" defaultOpen={true}>
        <p className="mb-4">
            Microsoft leadership wanted to investigate the use of Generative AI (genAI) by product managers (PMs),
            a traditionally understudied user group. Previously, only software engineers had been involved
            in the conversations about genAI usage at the organization. As this was the
            first comprehensive study on PMs and genAI, I designed and led a mixed methods study, distributing
            a large scale, global survey (885 participants), in parallel with semi-structured
            interviews (15 participants) and triangulated with telemetry data.
        </p>
      </Collapsible>
      <Collapsible className="mb-4" title="Process and Methods">
        <ul className="mb-4">
          <li>Internally validated research instruments with user group and other productivity researchers</li>
          <li>Led data collection</li>
          <li>Collaborated across disciplines (data science, product management, software engineering, and AI research)</li>
          <li>Qualitatively and quantitatively analyzed data across sources</li>
          <li>Developed Python charts to visualize quantitative and qualitative analytical findings</li>
          <li>Performed thematic analysis on interview and open-text survey questions</li>
          <li>Conducted workshops with product managers to refine findings</li>
        </ul>
        <h1 className="mb-4 font-bold">
           I conducted informal interviews, 15 interviews, and gathered 885 survey responses. 731/885 survey participants consented to system telemetry data analysis.
        </h1>
           <Lightbox images={[interviews]} />
      </Collapsible>
      <Collapsible className="mb-4" title="Deliverables">
        <ul className="mb-4">
          <li>Presented findings and their implications to leadership (corporate vice presidents, managers, AI + marketing)</li>
          <li>Produced the Selective Delegation framework to depict how PMs delegate tasks to genAI</li>
          <li>Reported on PM GenAI adoption rates, use cases, and perceived benefits and challenges</li>
          <li>Guiding the production of a playbook to augment PM genAI literacy at the company</li>
          <li>This work forms part of{' '}
            <a
              className="text-cherry underline"
              href="https://www.microsoft.com/en-us/research/wp-content/uploads/2025/12/New-Future-Of-Work-Report-2025.pdf"
              target="_blank"
            >
            Microsoft's New Future of Work Report
            </a>
          </li>
          <li>First-authored the below academic paper to disseminate findings and implications of this research</li>
          <Lightbox images={deliverables} />
        </ul>
      </Collapsible>
      <Collapsible className="mb-4" title="Research Paper + Magazine Article">
        <a
            className="underline"
            href="https://arxiv.org/abs/2510.02504"
            target="_blank"
        >
            Product Manager Practices for Delegating Work to Generative AI:{' '}&lsquo;Accountability
            must not be delegated to non-human actors&rsquo;
        </a>
        <p className="text-red">
          🎉 this paper has been accepted to ACM/IEEE International Conference in Software Engineering 2026
        </p>
        <p>Magazine article coming soon</p>
        <h1 className="my-4 font-bold">
          I presented our paper on this work at the{" "}
          <span className="underline">
          <a
            href="https://conf.researchr.org/home/icse-2026"
            target="_blank"
          >
            Internaitonal Conference in Software Engineering (ICSE)
          </a>
          </span>{" "}
          in April 2026. 
        </h1>
        <Lightbox images={awardPresentation} />
        <h1 className="my-4 font-bold">
          I designed the below sticker to share this work in an accessible way with &#10024; everyone &#10024;. 
          You can{" "}
          <span className="underline">
          <a
            href="https://forms.gle/eGY5vG9mxZFTtfa28"
            target="_blank"
          >
            request your sticker here
          </a>
          </span>{" "}
          while supplies last. 
        </h1>
        <Lightbox images={[catto]} />
      </Collapsible>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <PrenatalStressReduction />
        <DataVisualizationSoftware />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
