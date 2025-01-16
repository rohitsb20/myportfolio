
import React from "react";
import { CarouselOrientation } from "@/components/Carousel";



export default function Feature() {
  return (
    <div className="border-b-2 px-6">
      <div className=" space-y-4 py-6">
        <h1 className="text-4xl font-semibold tracking-wide">
          Featured Projects
        </h1>
        <p className="text-lg font-normal tracking-wide">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div>
        <CarouselOrientation/>
      </div>
    </div>
  );
}
