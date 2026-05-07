import React from "react";
import Image from "next/image";
import Link from "next/link";
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

const jitaiTranparency: LightboxImage = {
  src: "/img/portfolio/ML-patient/JITAI_transparency.png",
  alt: "Pregnant people asked for better mental model of JITAI functionality",
  title: "Pregnant people asked for better mental model of JITAI functionality across these four areas.",
};

const method: LightboxImage = {
  src: "/img/portfolio/ML-patient/method.png",
  alt: "I designed and developed a participatory design method",
  title: "I designed storyboard-based participatory design method. Each storyboard focuses on a different ML property and contains three modules: a scenario of potential functionality, a reflection activity, and preliminary designs to foster further reflection and future-state ideation."};

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
          (JITAIs) leveraging them, to better align with pregnant people&apos;s
          needs and goals, we must engage pregnant people in defining system
          requirements.
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: 'prenatal_stress', details: 'Process and Methods' }} className="mb-4" title="Process and Methods">
        <p className="mb-4">
          I designed and applied a participatory design method to co-design patient-facing ML systems. 
          In the context of my preliminary study, I applied this method with 20 pregnant people to dicuss the use of ML within JITAIs for prenatal stress management. My goal for
          {' '}   
            <a
              className="underline"
              href="https://drive.google.com/file/d/17twJDbR7YpGIv03-9WaSxCTPSrquyr7F/view?usp=drive_link"
              target="_blank"
            >
            this method 
            </a>{' '} 
            is to facilitate diolgue and co-creation between research teams and laypersons, such as pregnant people and patients more broadly. 
        </p>  
        <Lightbox images={[method, affinityDiagram]} />      
      </Collapsible>
      <Collapsible analytics={{ page: 'prenatal_stress', details: 'Deliverables' }} className="mb-4" title="Deliverables">
        <p className="mb-4">
          Using design sessions that combined reflection and design feedback activities, I found that participants were interested in using ML-driven JITAI that 
          (1) fit into their daily life by offering flexible engagement, 
          (2) supported them in building a mental model of the underlying JITAI functionality, 
          (3) differentiated between non-adherence and non-compliance, and 
          (4) illustrated apparent reciprocal learning. 
        </p>
        <Lightbox images={[jitaiTranparency]} />
        <p>  
          I am currently creating design requirements needed to increase the transparency of JITAIs, developing a prototype, and 
          formulating evaluation method for these designs in the wild. 
        </p>
        <p className="mb-4">
          The first paper on this work (
          <Link
              className="underline"
              href="https://doi.org/10.1145/3808695"
              target="_blank"
          >
            &ldquo;I Don't Like Being Told Just What to Do; I Need to Know Why&rdquo;: Patient Expectations of Machine Learning-Driven JITAIs for Prenatal Stress Management
          </Link>) has been accepted to ACM Health, under the Special Issue on Human Centered Computing in Healthcare. 
            I will present it at the inaugural ACM Interactive Health conference. &#x1f338; 
        </p>
      </Collapsible>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <DataVisualizationSoftware />
        <AdvancedHeartFailureDetection />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
