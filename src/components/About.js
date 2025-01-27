import { TypeAnimation } from "react-type-animation";
import Profile from "../assets/Profile.jpg";

const About = () => {
    return(
        <div className="pt-40 pb-5 px-12 relative dark:bg-gray-950 bg-gray-100" id="home">
        <div className="h-auto flex items-center justify-around flex-wrap-reverse gap-8">
          <div className="text-center md:w-1/2 ">
            <h1 className="dark:text-white text-5xl font-extrabold tracking-wider mb-5">
              HI, I'M DAGMAWI
            </h1>
            <TypeAnimation
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400"
              sequence={[
                "Designing for the Pixel Perfect Experiences.",
                1000,
                "We Create, You Conquer.",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
            <p className="dark:text-white text-xl my-8">
            I’m a passionate developer with a focus on programming, web development, and AI. Currently studying Information Science, I’m always eager to learn new technologies and build innovative projects. My goal is to create impactful solutions and grow as a professional in the tech industry.
            </p>
            <div className="flex justify-center">
            </div> 
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <img 
            src={Profile} 
            alt="pic"
            className="w-100 h-100 rounded-full shadow-[0_35px_60px_-15px_rgba(37,99,235,0.3)] text-center hover:shadow-[0_40px_65px_-15px_rgba(9, 62, 184)]"
            />
          </div>
        </div> 
      </div>
    );
}
export default About;