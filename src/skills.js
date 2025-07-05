import { 
  // Frontend
  SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
  // Backend
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiLaravel, SiDjango, SiPython,
  // Tools
  SiGit, SiGithub, SiFirebase, SiRust
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

export const frontendSkills = [
    { id: 1, title: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
    { id: 2, title: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" /> },
    { id: 3, title: 'CSS', icon: <SiCss3 className="text-[#1572B6]" /> },
    { id: 4, title: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { id: 5, title: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
];

export const backendSkills = [
    { id: 6, title: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
    { id: 7, title: 'Express', icon: <SiExpress className="text-[#000000]" /> },
    { id: 8, title: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { id: 9, title: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { id: 10, title: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
    { id: 11, title: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
    { id: 12, title: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { id: 13, title: 'Rust', icon: <SiRust className="text-[#000000]" /> },
];

export const tools = [
    { id: 13, title: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { id: 14, title: 'GitHub', icon: <SiGithub className="text-[#181717]" /> },
    { id: 15, title: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    { id: 16, title: 'VS Code', icon: < VscVscode className="text-[#007ACC]" /> },
];