import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Form from '@/components/Form';

const socialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/yourusername',
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
    <div className="h-[600px]  border-b-2 flex justify-center items-center">
      <div className="max-w-6xl   grid grid-cols-1 md:grid-cols-2 rounded-xl gap-x-3 ">
        <div className="flex flex-col  items-center justify-start gap-y-4">
          <h1 className="text-6xl text-center p-3 font-bold text-rose-500">
            LET&apos;S CONNECT
          </h1>

          <p className="text-sm">
            Say hello on <span>rohitashb123@gmail.com</span>
          </p>
          <p className="text-sm">
            For more info here&apos;s my{" "}
            <Link href="/" className="underline hover:scale-105 transform transition-all hover:text-rose-500">
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

        <div className="">
         <Form/>
        </div>
      </div>
    </div>
  );
}
