import { useParams } from "react-router-dom";

export default function ProjectPage({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return "No Projects Found";
  }

  return (
    <>
      <section className="project-details p-6 lg:p-20">
        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
        <img src={project.screenshot} alt={project.name} className="mb-6" />
        <p className="text-lg mb-4">{project.description}</p>
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Live
          </a>
          <a
            href={project.repoLink}
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </section>
    </>
  );
}
