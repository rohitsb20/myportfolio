"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const navItems = [
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

export default function Navbar() {
  const [mobileMenuOpen, setmMobileMenuOpen] = React.useState(false);

  const staggerVariants = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur 
    supports-[backdrop-filter:bg-background/60 px-4 lg:px-0]"
    >
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
         <Link href="/" className="font-semibold italic uppercase text-rose-500">
          Rohit Bhadouria
        </Link>

          {/* navbar */}

          <nav>
            <ul className="md:flex hidden items-center space-x-6 text-sm font-normal">
              {navItems.map((item) => (
                <li key={item.title}>
                  {" "}
                  <Link
                    className="transition-all hover:text-rose-500"
                    href={item.href}
                  >
                    {" "}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button
          className="  inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className=" h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className=" h-6 w-6" aria-hidden="true" />
          )}
        </Button>
      </div>
   
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
        >
          <motion.div className="space-y-1 px-2 pb-3 pt-2 drop-shadow-lg">
            {navItems.map((item) => (
              <motion.div
                className="text-center"
                key={item.title}
                variants={itemVariants}
              >
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-yellow-500 hover:text-black "
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}{" "}
    </header>
  );
}
