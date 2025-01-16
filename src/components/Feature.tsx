import Project from "./Project";
import React from "react";



const data = [
  {
    title: "Promotional landing page for our favorite show",
    description:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    year: 2023,
    role: "Front-end Developer",
    image: "/images/project.png",
  },
];

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
  {
    data.map((data) => (
        <Project
        key={data.title}
            title={data.title}
            description={data.description}
            year={data.year}
            role={data.role}
            image={data.image}
        />
    ))
  }
      </div>
    </div>
  );
}
