import * as React from "react";

import Link from "next/link";
import {handleNewsClick} from "@/events";

export const Bar = (): JSX.Element => (
    <ul className="news space-y-4">
        <li onClick={(e) => handleNewsClick(e)}>
            &#127881; 04/2025 I am working as an Applied Research Scientist with{" "}
            <Link
              className="underline"
              href="https://www.microsoft.com/en-us/research/"
              target="_blank"
            >
              Microsoft
            </Link>{" "}
            in Redmond, WA
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 04/2025 I am attending the{" "}
            <Link
              className="underline"
              href="https://cra.org/cra-wp/grad-cohort-for-women/"
              target="_blank"
            >
              2025 CRA-WP Grad Cohort for Women & Grad Cohort for IDEALS
            </Link>{" "}
            in Denver, CO
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 03/2025 I am attending the{" "}
            <Link
              className="underline"
              href="https://www.neiu.edu/academics/our-centers-and-programs/center-of-health/upcoming-events/2025-women-science"
              target="_blank"
            >
              2025 Women in Science Conference
            </Link>{" "}
            at NEIU in Chicago, IL
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 01/2025 I am teaching a workshop
            on Technology-Facilitated Abuse (TFA) & Methods for Designing
            Trauma-Informed Technologies with the{" "}
            <Link
              className="underline"
              href="https://www.hci.northwestern.edu/"
              target="_blank"
            >
              Center for Human-Computer Interaction + Design
            </Link>{" "}
            at Northwestern University
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#127942; 10/2024 I passed my CS PhD Qualifying Examination and
            advanced from PhD Student to PhD Candidate
          </li>
          <li onClick={(e) => handleNewsClick(e)}>
            &#128105;&#127995;&#8205;&#127979; 08/2024 Presented on the{" "}
            <a
              className="underline"
              href="https://youtu.be/pbnEhFHh6TY?si=9bNVYPWZvIXaRc3v&t=74"
              target="_blank"
            >
              User Experience (UX) of Advanced 3D Data Visualization Software
            </a>{" "}
            at{" "}
            <a
              className="underline"
              href="https://ncar.ucar.edu/"
              target="_blank"
            >
              The National Science Foundation&rsquo;s (NSF) National Center for
              Atmospheric Research (NCAR)
            </a>{" "}
            in Boulder, Colorado
          </li> 
    </ul>
);

