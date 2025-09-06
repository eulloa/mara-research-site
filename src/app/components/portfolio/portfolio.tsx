import * as React from "react";
import {
  PrenatalStressReduction,
  DataVisualizationSoftware,
  AdvancedHeartFailureDetection,
  MuseumTouchscreen,
  Microsoft,
  SelectedProjects,
} from "@/components/portfolio";

export const Portfolio = () => (
  <SelectedProjects id="portfolio" label="Portfolio">
    <PrenatalStressReduction />
    <Microsoft />
    <AdvancedHeartFailureDetection />
    <DataVisualizationSoftware />
    <MuseumTouchscreen />
  </SelectedProjects>
);
