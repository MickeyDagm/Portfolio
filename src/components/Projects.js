import Headline from "../shared/Headline";
import projects from "../project.js";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='py-8 px-7 bg-gray-950 h-auto' id="projects">
            <Headline title={'PROJECTS'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}/>
            <div>
            <div className="flex items-start flex-wrap justify-center gap-5 my-8">
                {projects.map((project) => 
                <div 
                key={project.id} 
                className=" bg-black rounded-xl overflow-hidden group">
                    <div className=" w-[24rem] h-[22rem] relative">
                        <img src={project.image} alt="pic" className="h-5/6 w-full rounded-t-xl object-cover transition-transform"/>
                        <h4 className="text-2xl font-bold my-3 text-white text-center">{project.name}</h4>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                            <a href={project.sourceCodeLink} target="_blank" rel="noreferrer"><FaGithub className="text-white w-9 h-9" /></a>
                            <a href={project.link} target="_blank" rel="noreferrer"><FaExternalLinkAlt className=" text-white w-7 h-7" /></a>
                        </div>
                    </div>
                </div>
                )}
                </div>
            </div>
        </div>
    );
};
export default Projects;