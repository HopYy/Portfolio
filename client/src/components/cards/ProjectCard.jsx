import { useState } from "react";
import { Link } from "react-router-dom";
import { Signal } from "lucide-react";

import Modal from "../common/Modal";
import Button from "../common/Button";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="space-y-2 w-1/3 cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img src={project.img} alt="Project" />
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
        <Link to={project.href} target="_blank" rel="noopener noreferrer">
          <Button variant="white">
            <span>Live APP</span>
            <Signal color="black" size={20} />
          </Button>
        </Link>
      </Modal>
    </>
  );
};

export default ProjectCard;
