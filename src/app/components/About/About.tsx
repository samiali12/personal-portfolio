"use client";
import Image from "next/image";
import React from "react";
import SamiAliImage from "@/app/assets/sami-ali.jpg";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiPrisma,
  SiRedux,
} from "react-icons/si";

const iconsSize = 24;

const techStack = [
  {
    icon: <SiNextdotjs className="text-4xl text-gray-900" size={iconsSize} />,
    name: "Next.js",
  },
  {
    icon: <SiReact className="text-4xl text-blue-500" size={iconsSize} />,
    name: "React.js",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-400" size={iconsSize} />,
    name: "MongoDB",
  },
  {
    icon: <SiPrisma className="text-4xl text-black" size={iconsSize} />,
    name: "Prisma",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-500" size={iconsSize} />,
    name: "Redux",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="relative mx-auto py-10 px-32">
        <h4 className="text-center text-lg mb-2 font-Ovo text-rose-500">
          About
        </h4>
        <h1 className="text-center text-5xl font-Ovo">Introduction</h1>
        <div className="my-20 lg:flex items-center justify-center gap-20">
          <div className="md:flex items-center justify-center">
            <div className="relative inline-block">
              <div className="w-64 sm:w-80 max-w-none rounded-3xl ">
                <Image
                  src={SamiAliImage}
                  alt="Sami Ali"
                  className="p-4 rounded-3xl w-full"
                />
              </div>
              {[
                "absolute top-0 left-0 border-t-4 border-l-4",
                "absolute top-0 right-0 border-t-4 border-r-4",
                "absolute bottom-0 left-0 border-b-4 border-l-4",
                "absolute bottom-0 right-0 border-b-4 border-r-4",
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  className={`${position} border-rose-500 w-8 h-8`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex-col md:py-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-justify text-center font-Ovo"
            >
              Hi, Im{" "}
              <span className="text-rose-500 font-semibold">Sami Ali</span>, a
              Full Stack Developer skilled in **Next.js, React.js, and
              Node.js**. I craft scalable, high-performance web applications
              with clean architecture and seamless user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-center lg:text-justify font-Ovo mb-6"
            >
              Experienced in **Redux, Prisma, MongoDB, and AWS**, I specialize
              in building secure and efficient backends while delivering
              intuitive UI solutions.
            </motion.p>

            <div className="w-full flex flex-col my-10">
              <h4 className="mb-4 text-lg font-semibold text-rose-400 lg:text-left text-center">
                Tools & Technology
              </h4>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap lg:justify-start lg:items-start items-center justify-center gap-6"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    key={index}
                    className="relative group border border-rose-500 p-2 rounded-md shadow-md transition-all duration-300"
                  >
                    {tech.icon}
                    <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
