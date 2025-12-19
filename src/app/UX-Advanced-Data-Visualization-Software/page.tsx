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

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "User interviews, Advanced data visualization, VAPOR, NSF, NCAR, Data Visualization, participatory design",
  ],
  title:
    "Mara Ulloa: Understanding the User Experience (UX) of Advanced 3D Data Visualization Software for the Geosciences",
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
        Understanding the User Experience (UX) of Advanced 3D Data Visualization
        Software
      </h1>
      <h2 className="dark:text-white mb-4">May 2024 - Aug 2024 (11 weeks)</h2>
      <div className="bg-lightBlue rounded-lg p-4">
        <h1 className="font-semibold">Project Overview</h1>
        <p className="mb-4">
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
        <h1 className="font-semibold">Process and Methods</h1>
        <p className="mb-4">
          Jobs to be Done (JTBD) framework, JTBD&rsquo;s clustering method,
          Understand VAPOR users&rsquo; perspectives through JTBD user
          interviews and exploratory research
        </p>
        <h1 className="font-semibold">Deliverables</h1>
        <p className="mb-4">
          JTBD Forces of progress diagrams, academic posters and podium
          presentations
        </p>
      </div>
      <div className="mt-8 rounded-lg presentation">
        <h1 className="dark:text-white mb-4 font-bold">
          Final podium presentation of the project at NSF NCAR in Boulder, CO
        </h1>
        <Presentation />
      </div>
      <div className="mt-8 rounded-lg">
        <h1 className="dark:text-white mb-4 font-bold">
          Final poster presentation of the project
        </h1>
        <Image
          className="rounded-lg"
          blurDataURL="/img/placeholder.png"
          src="/img/portfolio/poster.jpg"
          alt="Final poster presentation of the project"
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
        <AdvancedHeartFailureDetection />
        <MuseumTouchscreen />
      </SelectedProjects>
    </div>
  );
}
