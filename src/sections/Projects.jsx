import Project from "../components/Project";
import projects from "../data/projects";
import { motion } from "framer-motion";
import fadeInVariant from "../animations/animations";

export default function Projects() {
  return (
    <>
      <motion.div
        id="projects"
        className=" flex flex-col justify-center items-center scroll-mt-36 m-6 my-32 lg:mx-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
                  description={project.summary}
                  src={`/projects/${project.id}`}
                  alt={project.name}
                />
              </div>
            ))}
        </div>
      </motion.div>
    </>
  );
}
