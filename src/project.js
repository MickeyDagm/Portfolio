import bookrec from "../src/assets/bookrec.jpg";
import explorefact from "../src/assets/explorefact.jpg";
// import recipesHub from "../src/assets/recipesHub.jpg";
import MDAF from "../src/assets/MDAF.jpg";
import Moive from "../src/assets/Movie.png";
import Supermarket from "../src/assets/Supermarket.png";
import Employee from "../src/assets/Employee.png";
const projects = [
  {
    id: 1,
    name: "Explore and Share Facts",
    description: "A facts-sharing site built with React and Supabase.",
    image: explorefact,
    link: "https://exploreandsharefact.netlify.app/",
    sourceCodeLink: "https://github.com/MickeyDagm/First-Website",
    likes: 0,
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Supabase", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Tailwind", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" }
    ]
  },
  {
    id: 2,
    name: "MDAF Online Tutor Platform",
    description: "An online learning marketplace built with Laravel and React.",
    image: MDAF,
    link: "https://mdafonlinetutorplatform.onrender.com/#",
    sourceCodeLink: "https://github.com/MickeyDagm/MDAFOnlineTutor.git",
    likes: 0,
    techStack: [
      { name: "NodeJs", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "MySQL", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" }
    ]
  },
  {
    id: 3,
    name: "Movie Recommendation System",
    description: "Content-based movie recommender using React.",
    image: Moive,
    link: "https://movieandtrailersearchapp.netlify.app/",
    sourceCodeLink: "https://github.com/MickeyDagm/MovieSearchApp.git",
    likes: 0,
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" }
    ]
  },
  {
    id: 4,
    name: "Book Recommendation System",
    description: "AI-based book recommendations using cosine similarity.",
    image: bookrec,
    link: "",
    sourceCodeLink: "https://github.com/MickeyDagm/Book-Recommendation",
    likes: 0,
    techStack: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "Pandas", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "NLP", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" }
    ]
  },
  {
    id: 5,
    name: "Employee Attrition Prediction",
    description: "Predict employee attrition using machine learning.",
    image: Employee,
    link: "",
    sourceCodeLink: "https://github.com/MickeyDagm/EmployeeAttritionSystem.git",
    likes: 0,
    techStack: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "Matplotlib", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" }
    ]
  },
  {
    id: 6,
    name: "Supermarket Management System",
    description: "A Windows Forms-based supermarket inventory and billing system.",
    image: Supermarket,
    link: "",
    sourceCodeLink: "https://github.com/MickeyDagm/SupermarketManagement.git",
    likes: 0,
    techStack: [
      { name: "C#", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      { name: ".NET", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
      { name: "SQL Server", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" }
    ]
  }
  // {
  //   id: 7,
  //   name: "Recipes Hub",
  //   description: "A recipe-sharing site with modern UI/UX.",
  //   image: recipesHub,
  //   link: "",
  //   sourceCodeLink: "https://github.com/MickeyDagm/Portfolio",
  //   likes: 0,
  //   techStack: [
  //     { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
  //     { name: "Firebase", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
  //     { name: "CSS", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" }
  //   ]
  // },
  // {
  //   id: 8,
  //   name: "Reflexology Center System",
  //   description: "A record management system built for a reflexology center.",
  //   image: recipesHub,
  //   link: "",
  //   sourceCodeLink: "",
  //   likes: 0,
  //   techStack: [
  //     { name: "C#", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
  //     { name: ".NET", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
  //     { name: "SQL Server", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" }
  //   ]
  // },
];

export default projects;