import * as React from "react";
import Link from "next/link";

export const Portfolio = () => (
  <div className="mt-8" id="portfolio">
    <h1 className="dark:text-white mb-4 text-lg font-bold">Portfolio</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
      <Link className="grid" href="/ML-for-Prenatal-Stress-Reduction">
        <div className="bg-lightBlue rounded-lg min-h-[400px]">
          <div className="min-h-[200px] bg-[url('/img/portfolio/pregnant_person.png')] rounded-t-lg bg-center bg-cover bg-no-repeat lg:h-auto"></div>
          <div className="p-4">
            <h1 className="text-lg">Co-Designing Patient-Facing</h1>
            <h2 className="text-2xl font-semibold">
              Machine Learning for Prenatal Stress Reduction
            </h2>
          </div>
        </div>
      </Link>
      <Link className="grid" href="/UX-Advanced-Data-Visualization-Software">
        <div className="bg-lightBlue rounded-lg min-h-[400px]">
          <div className="min-h-[200px] bg-[url('/img/portfolio/vapor.jpg')] rounded-t-lg bg-center bg-cover bg-no-repeat lg:h-auto"></div>
          <div className="p-4">
            <h1 className="text-lg">Understanding the</h1>
            <h2 className="text-2xl font-semibold">
              UX of Advanced 3D Data Visualization Software
            </h2>
          </div>
        </div>
      </Link>
      <Link className="grid" href="/ML-for-Advanced-Heart-Failure-Detection">
        <div className="bg-lightBlue rounded-lg min-h-[400px]">
          <div className="min-h-[200px] bg-[url('/img/portfolio/cardiology.png')] rounded-t-lg bg-center bg-cover bg-no-repeat lg:h-auto"></div>
          <div className="p-4">
            <h1 className="text-lg">Designing Clinician-Facing</h1>
            <h2 className="text-2xl font-semibold">
              Machine Learning for Advanced Heart Failure Detection
            </h2>
          </div>
        </div>
      </Link>
      <Link className="grid" href="/Real-Time-Weather-Museum-Touchscreen">
        <div className="bg-lightBlue rounded-lg min-h-[400px]">
          <div className="min-h-[200px] bg-[url('/img/portfolio/touchscreen.jpg')] rounded-t-lg bg-center bg-cover bg-no-repeat lg:h-auto"></div>
          <div className="p-4">
            <h1 className="text-lg">Developing a</h1>
            <h2 className="text-2xl font-semibold">
              Real-Time Weather Museum Touchscreen
            </h2>
          </div>
        </div>
      </Link>
    </div>
  </div>
);
