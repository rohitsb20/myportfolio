'use client'
import Link from "next/link";
import React from "react";
import DarkMode from "@/components/DarkMode";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const [open , setOpen] = React.useState(false)
  return (
    <div className="flex justify-between gap-x-2 items-center border-b-2 border-b-rose-500 h-full px-2">
      <div>
        <Link href="/" className="font-semibold italic uppercase text-rose-500">
          Rohit Bhadouria
        </Link>
      </div>
      <div>
        <DarkMode />
      </div>
      <div className="md:flex space-x-4 hidden ">
        {links.map((link) => (
          <Link
            className="text-base font-normal hover:text-rose-500"
            href={link.href}
            key={link.title}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
<Button
          className=" inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <X className=" h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className=" h-6 w-6" aria-hidden="true" />
          )}
        </Button>
      </div>
  {open && (
        <div className="md:hidden bg-red-300">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-yellow-500 hover:text-black"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )} 



    </div>
  );
}
