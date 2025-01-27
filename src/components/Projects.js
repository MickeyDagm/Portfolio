import Headline from "../shared/Headline";
import projectsData from "../project.js";
import { FaExternalLinkAlt, FaGithub, FaThumbsUp } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";
import Repositories from "./Repositories.js";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  const handleLike = (id) => {
    const updatedProjects = projects.map(project => {
      if (project.id === id) {
        return project.liked
          ? { ...project, likes: project.likes - 1, liked: false }
          : { ...project, likes: project.likes + 1, liked: true };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <div>
    <div className="py-8 px-7 dark:bg-gray-950 bg-gray-100 h-auto" id="projects">
      <Headline
        title={"PROJECTS"}
        subtitle={
          "Here, you can explore a selection of personal and client projects I’ve worked on, each accompanied by its own case study."
        }
      />
      <div className="flex items-start flex-wrap justify-center gap-5 my-8">
        {projects.map((project) => (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            key={project.id}
            className="dark:bg-black bg-white rounded-xl overflow-hidden group shadow-sm shadow-blue-600  transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="sm:w-auto w-auto h-auto relative">
              <div className="relative group h-[20rem] w-[24rem]">
                <img
                  src={project.image}
                  alt="pic"
                  className="h-full w-full rounded-t-xl "
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-white w-9 h-9" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="text-white w-7 h-7" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-around">
                <h4 className="text-2xl font-bold my-1 dark:text-white text-center">
                  {project.name}
                </h4>
                <div
                className={`flex items-center justify-end pr-3 text-base font-semibold cursor-pointer transition-all duration-200 ease-in-out ${
                    project.liked ? "text-blue-600" : "text-gray-600"
                }`}
                onClick={() => handleLike(project.id)}
                >
                <FaThumbsUp
                    className={`m-2 transition-colors duration-200 ${
                    project.liked ? "text-blue-600" : "text-gray-600"
                    }`}
                />
                <span>{project.likes}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Repositories/>
    </div>
  );
};

export default Projects;
