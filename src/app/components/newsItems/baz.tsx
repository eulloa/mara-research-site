import * as React from "react";

import Link from "next/link";
import {handleNewsClick} from "@/events";

export const Baz = (): JSX.Element => (
    <ul className="news space-y-4">
        <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 06/2024 Presented ongoing
            research on the design of patient-facing machine learning (ML) at{" "}
            <a
              className="underline"
              href="https://mhealth.jmir.org/2024/1/e50826"
              target="_blank"
            >
              The International Society for Research on Internet Interventions
              (ISRII)
            </a>{" "}
            in Limerick, Ireland
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 05/2024 Started collaborating on
            user experience (UX) research initiatives with{" "}
            <a
              className="underline"
              href="https://ncar.ucar.edu"
              target="_blank"
            >
              The National Science Foundation&apos;s (NSF) National Center for
              Atmospheric Research (NCAR)
            </a>{" "}
            in Boulder, Colorado
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 04/2024 Attended the{" "}
            <a
              className="underline"
              href="https://cra.org/cra-wp/grad-cohort-ideals/"
              target="_blank"
            >
              2024 CRA-WP Grad Cohort Workshop for IDEALS
            </a>{" "}
            in Minneapolis, MN
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 11/2023 Gave a talk on public
            scholarship & building impactful research as an alum of{" "}
            <a
              className="underline"
              href="https://engage.northwestern.edu/programs/geo/"
              target="_blank"
            >
              The Graduate Engagement Opportunities (GEO) Community Practicum
            </a>
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 11/2023 Attended the{" "}
            <a
              className="underline"
              href="https://www.law.northwestern.edu/research-faculty/events/conferences/gender-ai/"
              target="_blank"
            >
              Gender and Intersectional Bias in Artificial Intelligence
              Conference
            </a>{" "}
            in Chicago, IL
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 10/2023 Presented at the{" "}
            <a
              className="underline"
              href="https://cscw.acm.org/2023/"
              target="_blank"
            >
              Computer-Supported Cooperative Work And Social Computing (CSCW)
            </a>{" "}
            workshop on{" "}
            <a
              className="underline"
              href="https://cscw-user-ai-auditing.github.io/"
              target="_blank"
            >
              Supporting User Engagement in Testing, Auditing, and Contesting AI
            </a>{" "}
            in Minneapolis, MN
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 10/2023 Served as a JEDI
            Ambassador at{" "}
            <a
              className="underline"
              href="https://www.ubicomp.org/ubicomp-iswc-2023/"
              target="_blank"
            >
              UbiComp/ISWC conference
            </a>{" "}
            in Canc&uacute;n, Mexico
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 07/2023 Served as a panelist in
            the{" "}
            <a
              className="underline"
              href="https://www.neiu.edu/academics/our-centers-and-programs/mcnair-scholars-program"
              target="_blank"
            >
              NEIU SCSE, TRIO, and McNair
            </a>{" "}
            Graduate School Panel
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 06/2023 Served as a volunteer at
            the{" "}
            <a
              className="underline"
              href="https://idc.acm.org/2023/"
              target="_blank"
            >
              Interaction Design for Children
            </a>{" "}
            conference in Chicago, IL
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#127891; 06/2023 Received a Master of Science (MS) degree in
            Computer Science from{" "}
            <a
              className="underline"
              href="https://www.mccormick.northwestern.edu/computer-science/"
              target="_blank"
            >
              Northwestern University
            </a>
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 04/2023 Served as a panelist in
            the{" "}
            <a
              className="underline"
              href="https://www.neiu.edu/academics/college-of-business-and-technology/departments/computer-science/"
              target="_blank"
            >
              NEIU Computer Science
            </a>{" "}
            Alumni Forum
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 04/2023 Presented at the{" "}
            <a
              className="underline"
              href="https://cra.org/cra-wp/grad-cohort-for-women/"
              target="_blank"
            >
              CRA-WP Grad Cohort Workshop for Women
            </a>{" "}
            in San Francisco, CA
          </li>
    </ul>
);

