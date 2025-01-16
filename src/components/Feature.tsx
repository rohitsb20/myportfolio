import Project from "./Project";
import React from "react";



const data = [
  {
    title: "Promotional landing page for our favorite show b",
    description:
      "Teamed up with a designer to breathe life ly respon latest adventures.",
    year: 2023,
    role: "Front-end Developer",
    image: "/images/project.png",
  },

  {
    title: "Promotional landing page for our favorite showhv",
    description:
      "Teamed up with a designer to breathe life ly respon latest adventures.",
    year: 2023,
    role: "Front-end Developer",
    image: "/images/project.png",
  },

  {
    title: "Promotional landing page for our favorite vbshowh",
    description:
      "Teamed up with a designer to breathe life ly respon latest adventures.",
    year: 2023,
    role: "Front-end Developer",
    image: "/images/project.png",
  },
];

export default function Feature() {
  return (
    <div className="border-y-2 px-6 pb-4">
      <div className=" space-y-4 py-6">
        <h1 id="project" className="text-4xl font-semibold tracking-wide">
          Featured Projects
        </h1>
        <p className="text-lg font-normal tracking-wide">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1  gap-2  py-2">
          {data.map((data) => (
            <Project
              key={data.title}
              title={data.title}
              description={data.description}
              year={data.year}
              role={data.role}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
