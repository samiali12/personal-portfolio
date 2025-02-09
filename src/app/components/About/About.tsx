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
  SiHtml5,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

//const iconsSize = 24;

const techStack = [
  {
    icon: <SiNextdotjs className="text-4xl text-gray-900" />,
    name: "Next.js",
    description: "Full-stack React framework",
  },
  {
    icon: <SiReact className="text-4xl text-blue-500" />,
    name: "React.js",
    description: "Frontend library for UI",
  },
  {
    icon: <SiReact className="text-4xl text-blue-500" />,
    name: "React Native",
    description: "Cross-platform framework for mobile applications",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-700" />,
    name: "Node.js",
    description: "Backend runtime for JavaScript",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-500" />,
    name: "Redux",
    description: "State management library",
  },
  {
    icon: <SiPrisma className="text-4xl text-black" />,
    name: "Prisma",
    description: "ORM for databases",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-400" />,
    name: "MongoDB",
    description: "NoSQL database",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600" />,
    name: "MySQL",
    description: "Relational database",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-500" />,
    name: "TypeScript",
    description: "Typed JavaScript",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500" />,
    name: "JavaScript",
    description: "Core programming language",
  },
  {
    icon: <SiHtml5 className="text-4xl text-orange-500" />,
    name: "HTML5",
    description: "Markup language for web",
  },
  {
    icon: <DiCss3 className="text-4xl text-blue-500" />,
    name: "CSS3",
    description: "Styling language for web",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-teal-500" />,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  {
    icon: <FaAws className="text-4xl text-orange-400" />,
    name: "AWS",
    description: "Cloud services platform",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="relative mx-auto py-10 px-8 lg:px-32">
        <h4 className="text-center text-lg mb-2 font-Ovo text-rose-500">
          About
        </h4>
        <h1 className="text-center text-5xl font-Ovo">Introduction</h1>
        <div className="my-20 lg:flex items-center justify-center gap-20">
          <div className="md:flex items-center justify-center">
            <div className="relative inline-block">
              <div className="w-64 sm:w-80 max-w-none rounded-3xl">
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
              className="text-lg text-center lg:text-justify font-Ovo"
            >
              Hi, I&apos;m <span className="text-rose-500 font-semibold">Sami Ali</span>, a passionate Full Stack Developer with expertise in building scalable, high-performance web applications. I specialize in modern JavaScript frameworks like Next.js, React.js, and Node.js, ensuring a seamless blend of functionality and design.

              With a strong foundation in backend technologies such as Prisma, MongoDB, MySQL, and AWS, I craft secure, efficient, and well-architected systems that power intuitive digital experiences. Whether it&apos; designing dynamic UIs, managing state efficiently with Redux, or optimizing performance, I focus on delivering clean, maintainable code that stands the test of time.
            </motion.p>
          </div>
        </div>
        <div className="w-full flex flex-col my-10">
          <h4 className="mb-8 text-xl font-semibold text-rose-400 lg:text-left text-center">
            Essential Tools & Technologies I Used
          </h4>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 "
          >
            {techStack.map((tech, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={index}
                className="relative flex items-center gap-6 border border-rose-500 p-4 rounded-md shadow-md transition-all duration-300 text-center"
              >
                {tech.icon}
                <div className="text-start">
                  <p className="font-semibold">{tech.name}</p>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
