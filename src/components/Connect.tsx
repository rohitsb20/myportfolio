import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const socialLinks = [
    {
        name: 'Github',
        url: 'text',
        icon: <FaGithub />
    },
    {
        name: 'Linkedin',
        url: 'text',
        icon: <FaLinkedin />
    },
    {
        name: 'Twitter',
        url: 'text',
        icon: <FaTwitterSquare />
    }
]

export default function Connect() {
  return (
    <div className="h-[500px]  border-b-2 flex justify-center items-center">
      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-2 rounded-xl ">
        <div className="flex flex-col  items-center gap-y-4">
          <h1 className="text-6xl text-center p-3 font-bold text-rose-500">
            LET&apos;S CONNECT
          </h1>

          <p className="text-sm">
            Say hello on <span>rohitashb123@gmail.com</span>
          </p>
          <p className="text-sm">
            For more info here&apos;s my{" "}
            <Link href="/" className="underline">
              resume
            </Link>
          </p>
          <div className="flex gap-x-4 text-lg ">
            {socialLinks.map((social) => (
              <Link
                className="hover:scale-105 transform transition-all hover:text-rose-500"
                href={social.url}
                key={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="p-3 text-2xl text-rose-500">
            I am a front-end developer based in Delhi. Has Computer Science
            Engineering background.
          </h1>
          <p className="text-base p-3">
            I am a front-end developer based in Delhi looking for exciting
            opportunities. Has Computer Science Engineering background. Likes to
            focus on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Nextjs, Webflow
            and a bit of Designing. While I am not programming, I enjoy playing
            video games ,travelling. Learning more to improve skill.
          </p>

          <div className="flex gap-x-4 text-sm pt-3 pl-3">
            <button className="flex items-center gap-x-1  hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
