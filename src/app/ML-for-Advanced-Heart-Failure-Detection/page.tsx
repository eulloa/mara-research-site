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
    "Machine Learning, Heart failure, User centered design, UCD,  participatory design, co-design, clinical workflow, algorithms",
  ],
  title:
    "Mara Ulloa: Designing Clinician-Facing Machine Learning for Advanced Heart Failure Detection",
};

export default function Page() {
  return (
    <div id="project" className="mt-8">
      <h1 className="text-2xl font-semibold dark:text-white mb-4">
        Designing Clinician-Facing Machine Learning for Advanced Heart Failure
        Detection
      </h1>
      <h2 className="dark:text-white mb-4">Jan 2022 - Nov 2022 (11 months)</h2>
      <div className="bg-lightBlue rounded-lg p-4">
        <h1 className="font-semibold">Project overview</h1>
        <p className="mb-4">
          Untreated heart failure (HF) tends to progress over time. A machine
          learning (ML) tool has been developed to identify when a
          patient&apos;s condition advances from chronic (Stage C HF) to
          advanced (Stage D HF). This transition is critical, as it
          significantly impacts treatment options, often leads to delayed
          referrals, and is associated with higher mortality rates. ML has the
          potential to support clinical workflows, such as the one described
          here, by enabling real-time chart reviews and streamlining early
          referrals for specialist evaluation in heart failure. However, most
          ML-based clinical tools fail to integrate into real-world settings
          because they often lack thorough understanding of existing workflows
          and the specific user requirements. As such, my goal was to engage
          clinicians in using ML algorithms within the electronic health record
          (EHR) to identify patients with advanced heart failure (HF).
        </p>
        <h1 className="font-semibold">Process and Methods</h1>
        <p className="mb-4">
          Thematic analysis, Interdisciplinary literature reviews,
          Semi-structured interviews with nurses, primary care physicians,
          cardiologists, administrators, and quality and data experts.
        </p>
        <h1 className="font-semibold">Deliverables</h1>
        <p className="mb-4">
          Understanding of end user requirements of clinical-ML, academic case
          study paper around the{" "}
          <Link
            className="underline"
            href="https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.1045704/full"
            target="_blank"
          >
            invisible clinical labor driving the successful integration of AI in
            healthcare.
          </Link>
        </p>
        <p className="text-red">
          🎉 This paper was published to Frontiers in Computer Science 2022
        </p>
      </div>
      <div className="mt-8 rounded-lg">
        <h1 className="dark:text-white mb-4 font-bold">
          A summary of the three case studies from our research, which we use to characterize examples of invisible clinician labor in the development of novel AI-clinical team tools
        </h1>
        <Image
          className="rounded-lg mb-8"
          blurDataURL="/img/portfolio/placeholder.png"
          src="/img/portfolio/ML-clinician/Frontiers_Figure_1.jpg"
          alt="A summary of the three case studies from our research, which we use to characterize examples of invisible clinician labor in the development of novel AI-clinical team tools."
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
        <h1 className="dark:text-white mb-4 font-bold">
          Four types of labor requiring clinical expertise at different developmental stages
        </h1>
        <Image
          className="rounded-lg mb-8"
          blurDataURL="/img/portfolio/placeholder.png"
          src="/img/portfolio/ML-clinician/Frontiers_Figure_2.png"
          alt="Four types of labor requiring clinical expertise at different developmental stages."
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
