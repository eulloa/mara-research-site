import * as React from "react";

import Link from "next/link";
import {handleNewsClick} from "@/events";

export const Foo = (): JSX.Element => (
    <ul className="news space-y-4">
        <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 03/2023 Awarded the{" "}
            <a
              className="underline"
              href="https://www.nsfgrfp.org/contact/about-grfp/"
              target="_blank"
            >
              National Science Foundation Graduate Research Fellowship
            </a>
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 09/2022 Awarded the{" "}
            <a
              className="underline"
              href="https://design.northwestern.edu/"
              target="_blank"
            >
              Segal Design Cluster Fellowship
            </a>
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 09/2022 Attended the Tapia
            Conference in Washington, DC
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 07/2022 Awarded the Social Justice Mini-Grant from
            Northwestern
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 01/2021 Awarded the NEIU CS Scholarship
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 11/2020 Awarded the{" "}
            <a
              className="underline"
              href="https://thelincolnacademyofillinois.org/students/"
              target="_blank"
            >
              Abraham Lincoln Civic Engagement Award
            </a>
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 07/2020 Presented at the UCLA
            National McNair Conference
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 07/2020 Presented at the The
            National Center for Atmospheric Research Presentations
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#127881; 05/2020 Started my internship with{" "}
            <a
              className="underline"
              href="https://ncar.ucar.edu/"
              target="_blank"
            >
              NSF The National Center for Atmospheric Research (NCAR)
            </a>
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 09/2019 Presented at the 11th
            Annual NEIU Student Symposium
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 08/2019 Started leading
            programming workshops with the NEIU CS department
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
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
          <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 09/2018 Awarded The National TheDream.US Scholarship
          </li>
    </ul>
);

