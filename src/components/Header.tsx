import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center h-full px-4">
      <div>
        <Link href="/" className="font-semibold italic uppercase text-rose-500">Rohit Bhadouria</Link>
      </div>
      <div className="flex space-x-4">
        {links.map((link) => (
          <Link className="text-base font-normal hover:text-rose-500"  href={link.href} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
