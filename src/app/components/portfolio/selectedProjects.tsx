"use client";

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  AdvancedHeartFailureDetection,
  DataVisualizationSoftware,
  Microsoft,
  MuseumTouchscreen,
  PrenatalStressReduction,
} from "@/components/portfolio";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const SelectedProjects = ({
  children,
  id,
  label,
}: {
  children: React.ReactNode;
  id: string;
  label: string;
}) => (
  <div className="mt-8" id={id}>
    <h1 className="dark:text-white mb-4 text-lg font-bold">{label}</h1>
      <Carousel
        arrows={true}
        containerClass="carousel-container"
        customTransition="all .5s"
        dotListClass="custom-dot-list-style"
        draggable={true}
        infinite={true}
        itemClass="carousel-item-padding-40-px p-4 min-h-full"
        keyBoardControl={true}
        responsive={responsive}
        ssr={true}
        swipeable={true}
        transitionDuration={500}
      >
        <Microsoft />
        <PrenatalStressReduction />
        <AdvancedHeartFailureDetection />
        <DataVisualizationSoftware />
        <MuseumTouchscreen />
      </Carousel>
  </div>
);
