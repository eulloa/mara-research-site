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

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
          Product Managers&rsquo; Integration of Generative AI into Knowledge Work 
      </h1>
      <h2 className="dark:text-white mb-4">April 2025 - June 2025 (12 weeks)</h2>
      <div className="bg-lightBlue rounded-lg p-4">
        <h1 className="font-semibold">Project overview</h1>
        <p className="mb-4">
            Microsoft leadership wanted to investigate the use of Generative AI (genAI) by product managers (PMs),
            a traditionally understudied user group. Previously, only software engineers had been involved
            in the conversations about genAI usage at the organization. As this was the organization&rsquo;s
            first comprehensive study on PMs and genAI, I designed and led a mixed methods study, distributing
            a large scale, global survey (885 participants), in parallel with semi-structured
            interviews (15 participants) and triangulated with telemetry data.
        </p>
        <h1 className="font-semibold">Process and Methods</h1>
        <ul className="mb-4">
            <li>Internally validated research instruments with user group and other productivity researchers</li>
            <li>Led data collection</li>
            <li>Collaborated across disciplines (data science, product management, software engineering, and AI research)</li>
            <li>Qualitatively and quantitatively analyzed data across sources</li>
            <li>Developed Python charts to visualize quantitative and qualitative analytical findings</li>
            <li>Performed thematic analysis on interview and open-text survey questions</li>
            <li>Conducted workshops with product managers to refine findings</li>
        </ul>
        <h1 className="font-semibold">Deliverables</h1>
        <ul className="mb-4">
            <li>Presented findings and their implications to leadership (corporate vice presidents, managers, AI + marketing)</li>
            <li>Produced a framework to depict how PMs delegate tasks to genAI, currently being used to augment PM genAI literacy and guide future work</li>
            <li>First-authored the below academic paper to disseminate findings and implications of this research</li>
        </ul>
        <h1 className="font-semibold">Research Paper</h1>
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
      </div>
      <div className="mt-8 rounded-lg">
        <h1 className="dark:text-white mb-4 font-bold">
           I conducted informal interviews, 15 interviews, and gathered 885 survey responses. 731/885 survey participants consented to system telemetry data analysis.
        </h1>
        <Image
          className="rounded-lg mb-8"
          blurDataURL="/img/portfolio/Figure_1.png"
          src="/img/portfolio/Figure_1.png"
          alt="The study design"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
        <h1 className="dark:text-white mb-4 font-bold">
           PMs identified values at the individual, team, and organizational levels influencing task delegation to genAI
        </h1>
        <Image
          className="rounded-lg mb-8"
          blurDataURL="/img/portfolio/Figure_0.png"
          src="/img/portfolio/Figure_0.png"
          alt="The Selective Delegation Framework"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
        <h1 className="dark:text-white mb-4 font-bold">
          Survey analysis from 885 PMs, including both Indvidual Contributors and People Managers
        </h1>
        <Image
          className="rounded-lg mb-8"
          blurDataURL="/img/portfolio/Figure_2.png"
          src="/img/portfolio/Figure_2.png"
          alt="Survey analysis of 885 PMs on genAI job displacement cocerns and genAI usage encouragement"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
        <h1 className="dark:text-white mb-4 font-bold">
          Individual Contributor coded responses to the optional,open-text question:
          <i> Is there anything else you&rsquo;d like to tell us about barriers
          to using GenAI more effectively in your role?</i>
        </h1>
        <Image
          className="rounded-lg"
          blurDataURL="/img/portfolio/Figure_3.png"
          src="/img/portfolio/Figure_3.png"
          alt="Individual Contributor coded responses to the open-text question: Is there anything else you would like to tell us about barriers to using GenAI more effectively in your role?"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </div>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <PrenatalStressReduction />
        <DataVisualizationSoftware />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
