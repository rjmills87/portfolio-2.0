import Project from "../components/Project";
import projects from "../data/projects";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className=" flex flex-col justify-center items-center scroll-mt-36 m-6 my-32 lg:mx-20"
      >
        <h2 className="text-5xl lg:text-6xl font-bold pb-12 text-center">
          Projects<span className="text-blue-600">.</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center">
          {projects &&
            projects.map((project) => (
              <div key={project.id}>
                <Project
                  name={project.name}
                  screenshot={project.screenshot}
                  description={project.description}
                  src={project.src}
                  alt={project.name}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
