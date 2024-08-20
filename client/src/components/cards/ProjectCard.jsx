import { useState } from "react";
import { Link } from "react-router-dom";
import { Signal, Github } from "lucide-react";

import Modal from "../common/Modal";
import Button from "../common/Button";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer transition-all hover:bg-third-color p-4 rounded-xl md:hover:scale-105"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="w-full rounded-lg overflow-hidden">
          <img
            className="object-cover object-center"
            src={project.img}
            alt="Project"
            loading="lazy"
          />
        </div>
        <h1 className="text-base text-white font-semibold">{project.name}</h1>
        <span className="text-gray-300 text-sm font-semibold">
          {project.description}
        </span>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="flex gap-4">
          <Link to={project.href} target="_blank" rel="noopener noreferrer">
            <Button variant="white">
              <span>Live APP</span>
              <Signal color="black" size={20} />
            </Button>
          </Link>
          <Link to={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="black">
              <span>Github</span>
              <Github color="white" size={20} />
            </Button>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
