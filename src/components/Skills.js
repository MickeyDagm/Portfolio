import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Headline from '../shared/Headline.js';
import skills from '../skills.js';

const Skills = () =>{
    return(
            <div className='mx-auto py-8 px-7 dark:bg-gray-950 bg-gray-100 dark:text-white pb-8  h-auto ' id='about'>
                <div className="mb-3">
                <Headline title={"SKILLS"} subtitle={""}/>
                </div>
                
                <div className="flex flex-wrap justify-between gap-6 mx-auto">
            {skills.map((skill) => (
                <div
                key={skill.id}
                className="flex flex-col items-center justify-center gap-3 mx-auto"
                >

                <div className="relative w-24 h-24">
                    <CircularProgressbar
                    value={skill.level}
                    styles={buildStyles({
                        pathColor: skill.color,  
                        trailColor: "#374151",   
                        textSize: "0px",         
                    })}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                    <i
                        className={skill.icon}
                        style={{
                        fontSize: "28px",
                        color: skill.icon.includes("colored") ? undefined : "white",
                        
                        }}
                    ></i>
                    {/* {skill.level}% */}
                    </div>
                </div>

                <p className="dark:text-white text-center">{skill.title}</p>
                </div>
            ))}
            </div>
         </div>
    );
}
export default Skills;
