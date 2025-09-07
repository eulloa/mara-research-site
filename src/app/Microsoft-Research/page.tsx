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
            Microsoft leadership wanted to investigate the use of Generative AI (GenAI) by product managers (PMs),
            a traditionally understudied user group. Previously, only software engineers had been involved
            in the conversations about GenAI usage at the organization. As this was the organization&rsquo;s
            first comprehensive study on PMs and GenAI, I designed a mixed methods study, distributing
            a large scale, global survey (885 participants), in parallel with semi-structured
            interviews (15 participants) and triangulated with telemetry data.
        </p>
        <h1 className="font-semibold">Process and Methods</h1>
        <ul className="mb-4">
            <li>Internally validated research instruments with user group and other productivity researchers</li>
            <li>Led data collection</li>
            <li>Collaborated across disciplines (data science, product management, software engineering and AI research)</li>
            <li>Qualitatively and quantitatively analyzed data across sources</li>
            <li>Developed Python charts to visualize quantitative and qualitative analytical findings</li>
            <li>Performed thematic analysis on interview and open-text survey questions</li>
            <li>Conducted workshops with product managers to refine findings</li>
        </ul>
        <h1 className="font-semibold">Deliverables</h1>
        <ul className="mb-4">
            <li>Presented findings and their implications to leadership (corporate vice presidents, managers, AI + marketing)</li>
            <li>Produced a framework to depict how PMs delegate tasks to GenAI, currently being used to augment PM GenAI literacy</li>
            <li>Currently authoring academic papers to disseminate findings and implications of this research</li>
        </ul>
        <p className="text-red">
          ⚠️ Under construction, more details to come soon
        </p>
      </div>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <PrenatalStressReduction />
        <DataVisualizationSoftware />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
