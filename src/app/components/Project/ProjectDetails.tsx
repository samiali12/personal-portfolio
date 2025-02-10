"use client";

import { urlFor } from "@/app/utils/helper";
import Image from "next/image";
import { MdClose } from "react-icons/md";

type ProjectTypes = {
  _id: string;
  title: string;
  description: string;
  skills: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail: any;
  images: unknown[];
};

interface ProjectDetailsDialogProps {
  project: ProjectTypes | null;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ProjectDetailsDialog = ({
  project,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  open,
  setOpen,
}: ProjectDetailsDialogProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-[#020817] max-w-[85%] max-h-[90vh] m-4 p-8 rounded-md shadow-lg relative overflow-y-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-Ovo text-slate-900 font-bold dark:text-slate-100">
            {project?.title}
          </h1>
          <button onClick={() => setOpen(false)} className="p-4">
            <MdClose className="text-2xl text-slate-500 dark:text-slate-100" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto mt-8 pt-4">
          <div className="p-2">
            <div className="my-6">
              <h2 className="font-semibold mb-4 text-justify">Description</h2>
              <p>{project?.description}</p>
            </div>
            <div className="my-4">
              <div>
                <h2 className="font-semibold mb-4 ">Skills and deliverables</h2>
                {project?.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 px-3 py-1 rounded-lg mr-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[400px] pr-2">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              project?.images.map((image: any, index: number) => (
                <div className="mb-4" key={index}>
                  <Image
                    src={urlFor(image).url() as string}
                    alt="project image"
                    width={600}
                    height={500}
                    objectFit="cover"
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsDialog;
