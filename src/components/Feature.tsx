import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

export default function Feature() {
  return (
    <div className="border-b-2">
      <div className="p-6 space-y-4">
        <h1 className="text-4xl font-semibold tracking-wide">
          Featured Projects
        </h1>
        <p className="text-lg font-normal tracking-wide">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className="border-2 border-red-400 grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">iMAGE</div>
        <div className="p-4">
          <h1 className="p-3 text-2xl">Promotional landing page for our favorite show</h1>
          <p className="text-base p-3">
            Teamed up with a designer to breathe life into a promotional webpage
            for our beloved show, Adventure Time. Delivered a fully responsive
            design with dynamic content capabilities, seamlessly integrating a
            newsletter feature to keep fans updated with the latest adventures.
          </p>

          <h2 className="text-lg p-3">Project Info</h2>
          <hr />

          <div className="flex justify-between p-3">
            <h3>Year</h3>
            <h3>2023</h3>
          </div>
          <hr />

          <div className="flex justify-between p-3">
            <h3>Role</h3>
            <h3>Front-end Developer</h3>
          </div>
          <hr />
          <div className="flex gap-x-4 text-sm pt-3 pl-3">
            <button className="flex items-center gap-x-1  hover:underline">
              LIVE DEMO <GoArrowUpRight />
            </button>
            <button className="flex items-center gap-x-1  hover:underline">
              SEE ON GITHUB <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
