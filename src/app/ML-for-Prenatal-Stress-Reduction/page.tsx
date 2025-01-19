import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  AdvancedHeartFailureDetection,
  DataVisualizationSoftware,
  MuseumTouchscreen,
  SelectedProjects,
} from "@/components/portfolio";

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "Human-Computer Interaction, HCI, Machine learning, ML, healthcare, co-design, participatory design, prenatal stress, qualitative research, JITAI, Just-in-Time Adaptive Intervention, EMA, Ecological momentary assessment, wearable sensor, semi-structured interview, preventive healthcare, user centered design, UCD, design method, thematic analysis, survey analysis",
  ],
  title:
    "Mara Ulloa: Co-Designing Patient Facing Machine Learning for Prenatal Stress Reduction",
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
        Co-Designing Patient Facing Machine Learning for Prenatal Stress
        Reduction
      </h1>
      <h2 className="dark:text-white mb-4">Feb. 2023 - Present</h2>
      <div className="bg-lightBlue rounded-lg p-4">
        <h1 className="font-semibold">Project Overview</h1>
        <p className="mb-4">
          Next-day prenatal stress prediction algorithms have recently been
          developed, inferring personal moments of stress before they afflict
          the pregnant person and their child. However, for these machine
          learning (ML) algorithms, and the Just in Time Adaptive Interventions
          (JITAIs) leveraging them, to better align with pregnant peoples&rsquo;
          needs and goals, we must engage pregnant people in defining system
          requirements.
        </p>
        <h1 className="font-semibold">Process and Methods</h1>
        <p className="mb-4">
          Storyboards to discuss key ML and JITAI aspects with lay persons,
          Semi-structured interviews, 20 Design sessions (scenario, reflective
          activities, and prototype feedback) with pregnant people, Affinity
          Diagrams, Quantitative and qualitative survey analysis, Thematic
          analysis; essentially, User-centered design (UCD), ML + Design work,
          and Multi-lingual research (English and Spanish)
        </p>
        <h1 className="font-semibold">Deliverables</h1>
        <p className="mb-4">
          Design method to discuss ML with lay persons, academic posters and
          papers. This multi-year project is part of my PhD dissertation—more
          updates to come.
        </p>
        <p className="text-red">
          ⚠️ Jan 2025: Under construction, more details to come soon
        </p>
      </div>
      <div className="mt-8 rounded-lg">
        <h1 className="dark:text-white mb-4 font-bold">
          Working on an affinity diagram post thematic analysis
        </h1>
        <Image
          className="rounded-lg"
          blurDataURL="/img/placeholder.png"
          src="/img/portfolio/affinity_diagram.jpg"
          alt="Working on an affinity diagram post thematic analysis"
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
        <DataVisualizationSoftware />
        <AdvancedHeartFailureDetection />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
