import Nav from "../../shared/Nav";
import ProjectCard from "../../shared/ProjectCard";
import projectContent from "./content";

const Projects = () => {
  return (
    <div className="max-desk">
      <Nav />
      <h1 className="text-center my-4">Projects</h1>
      <div className="d-flex align-items-center flex-column">
        {projectContent.map((project, index) => {
          return (
            <ProjectCard
              content={project.content}
              img={project.img}
              title={project.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
