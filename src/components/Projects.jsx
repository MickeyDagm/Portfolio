import Headline from "../shared/Headline.jsx";
import projectsData from "../project.js";
import { FaExternalLinkAlt, FaGithub, FaThumbsUp } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { useState } from "react";
// import Repositories from "./Repositories.jsx";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  const handleLike = (id) => {
    const updatedProjects = projects.map(project =>
      project.id === id
        ? {
            ...project,
            liked: !project.liked,
            likes: project.liked ? project.likes - 1 : project.likes + 1,
          }
        : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="pt-12 px-5 dark:bg-gray-950 bg-gray-100" id="projects">
      <Headline
        title="PROJECTS"
        subtitle="Explore personal and client projects."
      />

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                {project.sourceCodeLink && (
                  <a 
                    href={project.sourceCodeLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="View source code"
                  >
                    <FaGithub className="text-gray-800 dark:text-white w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="View live project"
                  >
                    <FaExternalLinkAlt className="text-gray-800 dark:text-white w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack?.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`${tech.color} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Footer with like button */}
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {project.techStack?.length ? `${project.techStack.length} technologies` : ''}
                </div>
                <button
                  onClick={() => handleLike(project.id)}
                  className={`flex items-center gap-1 text-sm ${project.liked ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
                  aria-label="Like this project"
                >
                  <FaThumbsUp className="w-4 h-4" />
                  <span>{project.likes}</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <Repositories /> */}
    </div>
  );
};

export default Projects;