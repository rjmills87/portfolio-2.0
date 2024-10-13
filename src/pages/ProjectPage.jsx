import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Button from "../components/Button";
import { ArrowUpRightCircle } from "iconoir-react";

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
        <div className="markdown-content">
          <ReactMarkdown
            components={{
              h3: ({ ...props }) => (
                <h3 className="text-3xl font-bold text- mb-6" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="text-lg text-gray-700 mb-4" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc list-inside ml-4 mb-4" {...props} />
              ),
              a: ({ ...props }) => (
                <a className="text-blue-500 underline" {...props} />
              ),
            }}
          >
            {project.description}
          </ReactMarkdown>
        </div>
        <div className="flex gap-4">
          <Button
            btnText="Live Site"
            variant="projectLiveLink"
            href="#"
            icon={ArrowUpRightCircle}
          />
          <Button
            btnText="View Github Repository"
            variant="projectRepoLink"
            href="#"
            icon={ArrowUpRightCircle}
          />
        </div>
      </section>
    </>
  );
}
