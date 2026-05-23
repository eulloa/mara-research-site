import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Presentation } from "@/components";
import {
  PrenatalStressReduction,
  AdvancedHeartFailureDetection,
  MuseumTouchscreen,
  SelectedProjects,
} from "@/components/portfolio";

import { Collapsible, Lightbox, LightboxImage } from "@/components";

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "User interviews, Advanced data visualization, VAPOR, NSF, NCAR, Data Visualization, participatory design",
  ],
  title:
    "Mara Ulloa: Understanding the User Experience (UX) of Advanced 3D Data Visualization Software for the Geosciences",
};

const figureOne: LightboxImage = {
  src: "/img/portfolio/UX-ncar/poster.jpg",
  alt: "Final poster presentation of the project",
  title: "Final poster presentation of the project"
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
        Understanding the User Experience (UX) of Advanced 3D Data Visualization
        Software
      </h1>
      <h2 className="dark:text-white mb-4">May 2024 - Aug 2024 (11 weeks)</h2>
      <Collapsible analytics={{ page: '3d-data-viz', details: 'Project Overview' }} className="mb-4" title="Project Overview" defaultOpen={true}>
        <p>
          The Visualization Services and Research (ViSR) group, at NSF&rsquo;s
          National Center for Atmospheric Research (NCAR) supports the earth
          science research community by enhancing data visualization workflows
          with software tools and applications. One such tool is{" "}
          <Link
            className="underline"
            href="https://www.vapor.ucar.edu/"
            target="_blank"
          >
            VAPOR
          </Link>
          , an open-source, community-driven 3D visualization application
          tailored for analyzing and visualizing time-varying, gridded data from
          numerical simulations. Over the past decade, VAPOR has gained
          popularity in geoscience research and amassed a dedicated user
          community. However, to expand VAPOR&rsquo;s impact, understanding
          end-user needs, preferences, and pain points is imperative.
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: '3d-data-viz', details: 'Process and Methods' }} className="mb-4" title="Process and Methods" defaultOpen={false}>
        <p>
          Jobs to be Done (JTBD) framework, JTBD&rsquo;s clustering method,
          Understand VAPOR users&rsquo; perspectives through JTBD user
          interviews and exploratory research
        </p>
      </Collapsible>
      <Collapsible analytics={{ page: '3d-data-viz', details: 'Deliverables' }} className="mb-4" title="Deliverables" defaultOpen={false}>
        <p className="mb-4">
          JTBD Forces of progress diagrams, academic posters and podium
          presentations
        </p>
        <Presentation />
        <Lightbox images={[figureOne]} />
      </Collapsible>
      <SelectedProjects id="selected-projects" label="Selected Projects">
        <PrenatalStressReduction />
        <AdvancedHeartFailureDetection />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
