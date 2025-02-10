"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/app/sanity";
import { urlFor } from "@/app/utils/helper";
import ProjectDetailsDialog from "./ProjectDetails";

type ProjectTypes = {
  _id: string;
  title: string;
  description: string;
  skills: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail: any;
  images: unknown[];
};

const Project = () => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "projects"]`);
      setProjects(data);
    };
    fetchData();
  });

  const handleProjectClick = (project: ProjectTypes) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <div id="project" className="w-full">
      {open && (
        <ProjectDetailsDialog
          project={selectedProject}
          open={open}
          setOpen={setOpen}
        />
      )}
      <div className="relative mx-auto py-10 px-8 lg:px-32">
        <h4 className="text-center text-lg mb-2 font-Ovo text-rose-500">
          Projects
        </h4>
        <h1 className="text-center text-5xl font-Ovo mb-2">My Latest Work</h1>
        <p className="text-center text-lg font-Ovo text-wrap">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10">
          {projects.map((project) => (
            <motion.div
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={project._id}
              className="bg-white dark:bg-transparent dark:border dark:border-rose-400 shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full">
                <Image
                  src={urlFor(project.thumbnail).url()}
                  alt={project.title}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-base font-semibold text-justify mt-4">
                {project.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
