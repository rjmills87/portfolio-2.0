import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { ArrowUpRightCircle, ArrowLeftCircle } from "iconoir-react";

export default function ProjectPage({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return "No Projects Found";
  }

  return (
    <>
      <section className="project-details flex flex-col items-center p-6 lg:p-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-center">
          {project.name}
          <span className="text-blue-600">.</span>
        </h1>

        <img
          src={project.screenshot}
          alt={project.name}
          className="w-full lg:w-2/3 h-auto rounded-lg border-dotted border-2 p-5 border-blue-600 border-opacity-70 mb-8"
        />

        <div className="markdown-content">
          <ReactMarkdown
            components={{
              h3: ({ ...props }) => (
                <h3
                  className="text-2xl lg:text-3xl font-bold text- mb-6"
                  {...props}
                />
              ),
              p: ({ ...props }) => (
                <p className="text-lg text-gray-700 mb-4" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul
                  className="list-disc marker:text-blue-600 list-inside ml-4 mb-4"
                  {...props}
                />
              ),
              li: ({ ...props }) => <li className="pb-3" {...props} />,
              a: ({ ...props }) => (
                <a className="text-blue-500 underline" {...props} />
              ),
            }}
          >
            {project.description}
          </ReactMarkdown>
        </div>
        <div className="m-6 my-20 lg:mx-20">
          <h3 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
            Technology Used<span className="text-blue-600">.</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {project.techStack &&
              project.techStack.map((tech) => (
                <div
                  className="flex flex-col items-center gap-2"
                  key={tech.techName}
                >
                  <div className="rounded-full border-solid border-2 p-5 border-blue-600 border-opacity-70">
                    <div className="rounded-full border-dotted border-2 p-5 border-blue-600 border-opacity-70">
                      <img
                        className="max-h-16 w-auto p-1"
                        src={tech.techIcon}
                        alt={tech.techName}
                      />
                    </div>
                  </div>
                  <h4>{tech.techName}</h4>
                </div>
              ))}
          </div>
        </div>
        <div className="flex gap-4 mb-10">
          <Button
            btnText="Live Site"
            variant="projectPage"
            href={project.liveLink}
            target="_blank"
            icon={ArrowUpRightCircle}
          />
          <Button
            btnText="View Code"
            variant="projectPage"
            href={project.repoLink}
            target="_blank"
            icon={ArrowUpRightCircle}
          />
        </div>
        <Link to="/">
          <Button btnText="Back" variant="backButton" icon={ArrowLeftCircle} />
        </Link>
      </section>
    </>
  );
}
