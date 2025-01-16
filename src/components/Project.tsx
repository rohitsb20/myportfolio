import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

interface Props {

    title: string;
    description: string;
    year: number;
    role: string;
    image: string;
  
}

export default function Project({title ,description , year, role, image }: Props) {
  return (
    <div className="border-2 border-red-400 grid grid-cols-1 md:grid-cols-2 rounded-xl ">
      <div className="p-4">
        <Image
          src={image}
          alt="project-image"
          width={300}
          height={300}
          layout="responsive"
          className="object-cover"
        ></Image>
      </div>
      <div className="p-4">
        <h1  className="p-3 text-2xl">
          {title}
        </h1>
        <p className="text-base p-3">{description}</p>

        <h2 className="text-lg p-3">Project Info</h2>
        <hr />

        <div className="flex justify-between p-3">
          <h3>Year</h3>
          <h3> {year}</h3>
        </div>
        <hr />

        <div className="flex justify-between p-3">
          <h3>Role</h3>
          <h3> {role} </h3>
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
  );
}
