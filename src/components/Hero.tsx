import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";

import { motion } from "framer-motion";


import Image from "next/image";

export default function Hero() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 border-b-2 mt-10">
      {/* DIV ONE  */}
      <div className=" flex flex-col justify-center space-y-4 p-6 ">
        <h1 className="uppercase text-semibold text-4xl md:text-5xl">
          hi, i am <br /> Rohit Bhadouria.
        </h1>
        <p className="text-sm md:text-xl ">
          A Delhi based front-end developer passionate about building accessible
          and user friendly websites.
        </p>
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            className="hover:text-rose-500 rounded-3xl dark:hover:text-black font-bold tracking-wide
              bg-rose-500"
          >
            Contact Me
          </Button>
          <div
            className="rounded-full bg-primary/90 w-8 h-8 flex items-center
           justify-center"
          >
            <TiSocialLinkedin className="z-100 text-rose-500 text-2xl dark:hover:text-black hover:text-white" />
          </div>
          <div
            className="rounded-full bg-primary/90 w-8 h-8 flex items-center
           justify-center"
          >
            <SiGithub className="z-100 text-rose-500 text-lg hover:text-white dark:hover:text-black" />
          </div>
        </div>
      </div>

      {/* DIV TWO   */}

      <motion.div
        className="p-6 "
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.8 }}
      >
        <Image
          src="/images/home.png"
          alt="home.png"
          width={400}
          height={400}
          layout="responsive"
        ></Image>
      </motion.div>
    </div>
  );
}
