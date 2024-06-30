"use client";

import { MouseEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const handleClick = (e: MouseEvent) => {
  const target = e?.target as HTMLUListElement;
  sendGAEvent({ event: "news_list_item", value: target?.innerText });
};

export const News = () => (
  <div className="mt-10" id="news">
    <h1 className="mb-4 dark:text-white text-lg font-bold">News</h1>
    <div className="bg-lightBlue dark:bg-black rounded-lg rounded-e-lg h-[400px] overflow-y-scroll">
      <div className="terminal-header rounded-t-lg bg-darkBlue dark:bg-[#2d2c29] flex sticky top-0 z-10 p-2">
        <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-[#e9685c] mr-2 relative hover:after:content-['\0078'] after:absolute after:top-[-25%] after:left-[22%]"></div>
        <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-[#f5be4f] mr-2 relative hover:after:content-['\2578'] after:absolute after:bottom-[-18%] after:right-[5%]"></div>
        <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-[#61c554] relative hover:after:content-['\02D0'] after:absolute after:right-[30%] after:bottom-[-15%]"></div>
      </div>
      <div className="content p-6 dark:text-white leading-8">
        <ul className="news space-y-4">
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
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
          <li onClick={(e) => handleClick(e)}>
            &#127942; 03/2023 Awarded the{" "}
            <a
              className="underline"
              href="https://www.nsfgrfp.org/contact/about-grfp/"
              target="_blank"
            >
              National Science Foundation Graduate Research Fellowship
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 02/2023 Attended the{" "}
            <a
              className="underline"
              href="https://www.niu.edu/faculty-mentoring/conference/index.shtml"
              target="_blank"
            >
              Preparing Future Faculty of Color Conference
            </a>{" "}
            at Northern Illinois University (NIU)
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128221; 11/2022 First-authored{" "}
            <a
              className="underline"
              href="https://www.frontiersin.org/articles/10.3389/fcomp.2022.1045704/abstract"
              target="_blank"
            >
              Invisible Clinical Labor Driving the Successful Integration of AI
              in Healthcare
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 10/2022 Presented at{" "}
            <a
              className="underline"
              href="https://hci.northwestern.edu/"
              target="_blank"
            >
              NU&apos;s Center for Human-Computer Interaction + Design
              conference
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#127942; 09/2022 Awarded the{" "}
            <a
              className="underline"
              href="https://design.northwestern.edu/"
              target="_blank"
            >
              Segal Design Cluster Fellowship
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 09/2022 Attended the Tapia
            Conference in Washington, DC
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#127942; 07/2022 Awarded the Social Justice Mini-Grant from
            Northwestern
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 07/2022 Served as a panelist in
            the{" "}
            <a
              className="underline"
              href="https://www.tgs.northwestern.edu/diversity/diversity-recruitment/summer-research-opportunity-program/"
              target="_blank"
            >
              NU SROP
            </a>{" "}
            Navigating Graduate School Event
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 03/2022 Started my PhD Internship
            with{" "}
            <a
              className="underline"
              href="https://www.weallcode.org/"
              target="_blank"
            >
              We All Code
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 09/2021 Started my PhD studies in
            CS at{" "}
            <a
              className="underline"
              href="https://www.northwestern.edu/"
              target="_blank"
            >
              Northwestern University
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#127891; 05/2021 Graduated with a Bachelor of Science (BS) degree
            in Computer Science from{" "}
            <a
              className="underline"
              href="https://www.neiu.edu/"
              target="_blank"
            >
              NEIU
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#127942; 01/2021 Awarded the NEIU CS Scholarship
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#127942; 11/2020 Awarded the{" "}
            <a
              className="underline"
              href="https://thelincolnacademyofillinois.org/students/"
              target="_blank"
            >
              Abraham Lincoln Civic Engagement Award
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 07/2020 Presented at the UCLA
            National McNair Conference
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 07/2020 Presented at the The
            National Center for Atmospheric Research Presentations
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 05/2020 Started my internship
            with{" "}
            <a
              className="underline"
              href="https://ncar.ucar.edu/"
              target="_blank"
            >
              NSF The National Center for Atmospheric Research (NCAR)
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 10/2019 Attended and presented at
            the{" "}
            <a
              className="underline"
              href="https://www.sacnas.org/conference/2019-sacnas"
              target="_blank"
            >
              2019 SACNAS Conference
            </a>{" "}
            in Honolulu, HI
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 09/2019 Presented at the 11th
            Annual NEIU Student Symposium
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 08/2019 Started leading
            programming workshops with the NEIU CS department
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 05/2019 Started my summer
            research internship at{" "}
            <a
              className="underline"
              href="https://www.neiu.edu/academics/our-centers-and-programs/student-center-science-engagement"
              target="_blank"
            >
              Northeastern Illinois University (NEIU) SCSE
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            &#127942; 09/2018 Awarded The National TheDream.US Scholarship
          </li>
        </ul>
      </div>
    </div>
  </div>
);
