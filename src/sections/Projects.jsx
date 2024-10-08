import Project from "../components/Project";

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      name: "Dino Studio",
      description:
        "Dino Studio is an exciting educational app to learn all about Dinosaurs.",
      screenshot: "/src/assets/images/projects/dino-studio-screenshot.png",
      src: "#",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className=" flex flex-col justify-center items-center m-6 my-32 lg:mx-20"
      >
        <h2 className="text-5xl lg:text-6xl font-bold pb-12 text-center">
          Projects<span className="text-blue-600">.</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center">
          {myProjects &&
            myProjects.map((project) => (
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
