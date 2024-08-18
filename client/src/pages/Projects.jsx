import { projects } from "../projects";
import ProjectCard from "../components/cards/ProjectCard";

const Projects = () => {
  if (projects.length === 0) {
    return;
  }

  return (
    <div className="p-8 overflow-auto flex flex-wrap items-center gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
