import bookrec from "../src/assets/bookrec.jpg";
import explorefact from "../src/assets/explorefact.jpg";
import recipesHub from "../src/assets/recipesHub.jpg";
const projects = [
    {id: 1, name: 'Explore and Share facts', description: "A simple facts-sharing website built with React.js and Supabase, allowing users to anonymously share interesting facts with a clean and responsive design.", image: explorefact ,link:'https://exploreandsharefact.netlify.app/',sourceCodeLink:'https://github.com/MickeyDagm/First-Website'},
    {id: 2, name: 'Book Recommendation System', description: "An AI-driven book recommendation system built with Python and Tkinter, leveraging cosine similarity to suggest books based on titles, descriptions, and categories, with a user-friendly interface.", image: bookrec, link:'',sourceCodeLink:'https://github.com/MickeyDagm/Book-Recommendation'},
    {id: 3, name: 'Recipes Hub', description: "A recipe-sharing website with a modern design, showcasing various recipes and providing an intuitive user experience for discovering and exploring new dishes.", image: recipesHub, link:'',sourceCodeLink:'https://github.com/MickeyDagm/Portfolio'},
]
export default projects;