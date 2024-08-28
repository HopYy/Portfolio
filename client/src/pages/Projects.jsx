import { projects } from "../projects";
import ProjectCard from "../components/cards/ProjectCard";

const Projects = () => {
  if (projects.length === 0) {
    return;
  }

  return (
    <div className="pb-8 px-8 overflow-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
