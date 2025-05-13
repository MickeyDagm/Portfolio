import Headline from '../shared/Headline.jsx';
import { frontendSkills, backendSkills, tools } from '../skills.js';

const Skills = () => {

  const renderSkillSection = (title, skills) => (
    <div>
      <h3 className="text-2xl font-bold mb-6 border-b-4 border-blue-500 inline-block dark:text-white">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div
            key={skill.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <i className={`${skill.icon} text-5xl mb-3`}></i>
            <p className="text-center font-medium dark:text-white">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto py-12 px-7 dark:bg-gray-950 bg-gray-100 dark:text-white" id="about">
      <div className="mb-10">
        <Headline title={"SKILLS"} subtitle={""} />
      </div>

      <div className="flex flex-col gap-16">
        {renderSkillSection("Frontend", frontendSkills)}
        {renderSkillSection("Backend", backendSkills)}
        {renderSkillSection("Tools", tools)}
      </div>
    </div>
  );
};

export default Skills;
