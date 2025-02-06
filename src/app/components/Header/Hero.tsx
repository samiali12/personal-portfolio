"use client";

import Image from "next/image";
import React from "react";
import SamiAliImage from "@/app/assets/sami-ali.jpg";
import { TypeAnimation } from "react-type-animation";
import { MdDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="min-h-screen pt-36 mx-auto lg:max-w-3xl text-center flex flex-col items-center justify-center gap-4 -z-50">
      <div className="w-40 h-40 rounded-full shadow-md overflow-hidden border border-rose-100">
        <Image
          src={SamiAliImage}
          alt="Sami Ali Image"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold font-Ovo lg:text-4xl text-3xl">
          Hi, I am Sami Ali
        </h1>
        <TypeAnimation
          sequence={[
            "",
            1000,
            "I build scalable web applications",
            1000,
            "I specialize in Next.js, React, and Node.js",
            1000,
            "I optimize performance and manage state efficiently",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="lg:text-2xl text-xl tracking-wide"
        />
        <p className="font-normal font-Outfit lg:text-lg text-base  text-center leading-[32px]">
          Full Stack Developer skilled in Next.js, React.js, Node.js, and AWS.
          Experienced with Redux, MySQL, MongoDB, and Prisma.
        </p>
        <div className="flex items-center justify-center gap-4 py-4">
          <button
            className="
          bg-rose-500 text-slate-100 hover:bg-transparent border border-rose-500 hover:border-rose-500 hover:text-rose-500
          flex items-center justify-around px-10 py-3 borderhover:text-rose-500  rounded-full font-Ovo transition-colors duration-300 tracking-wide"
          >
            Resume
            <span className="ml-2">
              <MdDownload />
            </span>
          </button>
          <button
            className="
          border border-rose-500 hover:bg-rose-500 text-rose-500 hover:text-slate-100
          flex items-center justify-around px-10 py-3 borderhover:text-rose-500  rounded-full font-Ovo transition-colors duration-300 leading-8 tracking-wide"
          >
            Github
            <span className="ml-2">
              <FaGithub />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
