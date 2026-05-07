import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  AdvancedHeartFailureDetection,
  DataVisualizationSoftware,
  MuseumTouchscreen,
  SelectedProjects,
} from "@/components/portfolio";

import { Collapsible, Lightbox, LightboxImage } from "@/components";

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "Human-Computer Interaction, HCI, Machine learning, ML, healthcare, co-design, participatory design, prenatal stress, qualitative research, JITAI, Just-in-Time Adaptive Intervention, EMA, Ecological momentary assessment, wearable sensor, semi-structured interview, preventive healthcare, user centered design, UCD, design method, thematic analysis, survey analysis",
  ],
  title:
    "Mara Ulloa: Co-Designing Patient Facing Machine Learning for Prenatal Stress Reduction",
};

const affinityDiagram: LightboxImage = {
  src: "/img/portfolio/ML-patient/affinity_diagram.jpg",
  alt: "Working on an affinity diagram post thematic analysis",
  title: "Working on an affinity diagram post thematic analysis"
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
        Co-Designing Patient Facing Machine Learning for Prenatal Stress
        Reduction
      </h1>
      <h2 className="dark:text-white mb-4">Feb. 2023 - Present</h2>
      <Collapsible analytics={{ page: 'prenatal_stress', details: 'Project Overview' }} className="mb-4" title="Project Overview" defaultOpen={true}>
        <p className="mb-4">
          Stress during pregnancy can have lasting impacts on maternal health, pregnancy outcomes, and child development across the lifespan.
          Next-day prenatal stress prediction algorithms have recently been
          developed, inferring personal moments of stress before they afflict
          the pregnant person and their child. However, for these machine
          learning (ML) algorithms, and the Just-in-Time Adaptive Interventions
          (JITAIs) leveraging them, to better align with pregnant peoples&apos;
          needs and goals, we must engage pregnant people in defining system
          requirements.
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: 'prenatal_stress', details: 'Process and Methods' }} className="mb-4" title="Process and Methods">
        <p>
          Storyboards to discuss key ML and JITAI aspects, semi-structured interviews, participatory design workshops, and iterative prototyping.
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: 'prenatal_stress', details: 'Deliverables' }} className="mb-4" title="Deliverables">
        <p className="mb-4">
          A participatory design framework for developing patient-facing ML systems in healthcare, with specific focus on prenatal stress detection and intervention.
        </p>
        <Lightbox images={[affinityDiagram]} />
      </Collapsible>
      <p className="text-red">
        ⚠️ Under construction, more details to come soon
      </p>
      <div className="mt-8 rounded-lg">
        <h1 className="dark:text-white mb-4 font-bold">
          Working on an affinity diagram post thematic analysis
        </h1>
      </div>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <DataVisualizationSoftware />
        <AdvancedHeartFailureDetection />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
