import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  AdvancedHeartFailureDetection,
  DataVisualizationSoftware,
  PrenatalStressReduction,
  SelectedProjects,
} from "@/components/portfolio";

import { Collapsible, Lightbox, LightboxImage } from "@/components";

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "Stakeholder interviews, user interviews, mockups, prototyping, museum touchscreen, kiosk display, visitor center, NCAR, NSF, Mesa Lab, Boulder, Colorado, legacy software, Java",
  ],
  title: "Mara Ulloa: Developing a Real-Time Weather Museum Touchscreen",
};

const figureOne: LightboxImage = {
  src: "/img/portfolio/touchscreen.jpg",
  alt: "Final display on the floor at NCAR",
  title: "Final display on the floor at NCAR"
};

const figureTwo: LightboxImage = {
  src: "/img/portfolio/kiosk.jpg",
  alt: "Final Museum Touchscreen Installation at NSF NCAR in Boulder, CO",
  title: "Final Museum Touchscreen Installation at NSF NCAR in Boulder, CO",
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
        Developing a Real-Time Weather Museum Touchscreen
      </h1>
      <h2 className="dark:text-white mb-4">May 2020 - Aug 2020 (11 weeks)</h2>
      <Collapsible analytics={{ page: 'real-time-weather-touchscreen', details: 'Project Overview' }} className="mb-4" title="Project Overview" defaultOpen={true}>
        <p className="mb-4">
          Staff from the UCAR Center for Science Education, Unidata, and the
          Computational & Information Systems Lab were interested in developing
          a new touchscreen interface that displays real-time weather data. The
          previous exhibit pointed to Windy.com, was limited by the
          functionality already built into the website, and failed to leverage
          internal NSF NCAR software and resources. I gathered requirements for
          the new kiosk application via virtual interviews with stakeholders and
          potential end users, designed mock-ups in Figma, and developed the new
          interface in Java. Today, the new application forms part of exhibits
          at the visitor centers of the NSF NCAR Mesa Lab in Boulder, CO, and at
          the NWSC Visitor Center in Cheyenne, WY.
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: 'real-time-weather-touchscreen', details: 'Process and Methods' }} className="mb-4" title="Process and Methods" defaultOpen={false}>
        <p className="mb-4">
          Stakeholder and end user interviews, adapting legacy software
          developed in Java to meet new design requirements
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: 'real-time-weather-touchscreen', details: 'Deliverables' }} className="mb-4" title="Deliverables" defaultOpen={false}>
        <p className="mb-4">
          Mock-ups, educational and interactive touchscreen display for lab
          visitors to learn about weather patterns, and academic poster and
          presentation to NCAR and National Oceanic and Atmospheric
          Administration (NOAA) scientific community
        </p>
        <Lightbox images={[figureOne, figureTwo]} />
      </Collapsible>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <PrenatalStressReduction />
        <DataVisualizationSoftware />
        <AdvancedHeartFailureDetection />
      </SelectedProjects>
    </div>
  );
}
