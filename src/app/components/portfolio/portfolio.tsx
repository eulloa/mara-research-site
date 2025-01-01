import * as React from "react";
import {
  PrenatalStressReduction,
  DataVisualizationSoftware,
  AdvancedHeartFailureDetection,
  MuseumTouchscreen,
  SelectedProjects,
} from "@/components/portfolio";

export const Portfolio = () => (
  <SelectedProjects id="portfolio" label="Portfolio">
    <PrenatalStressReduction />
    <DataVisualizationSoftware />
    <AdvancedHeartFailureDetection />
    <MuseumTouchscreen />
  </SelectedProjects>
);
