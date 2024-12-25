import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Profile from "../assets/Profile.jpg";

const Home = () => {
  return (
    <div className="py-20 px-12 relative bg-gray-950" id="home">
      <div className="h-auto md:h-screen flex items-center justify-around flex-wrap-reverse gap-8">
        <div className="text-center md:w-1/2 ">
          <h1 className="text-white text-5xl font-extrabold tracking-wider mb-5">
            HI, I'M DAGMAWI
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400"
            sequence={[
              "Designing for the Future, One Website at a Time.",
              1000,
              "Designing for the Online Presence.",
              1000,
              "Designing for the Pixel Perfect Experiences.",
              1000,
              "We Create, You Conquer.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-white text-xl my-8">
            A Web Developer building  Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <div className="flex justify-center gap-5 mb-8">
            <a href="https://www.instagram.com/mickey_dagm/profilecard/?igsh=MW4xeTRwM3YxdWtzMw==" target="_blank" rel="noreferrer">
              <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden bg-gray-950  shadow-md shadow-blue-600 group transition-all duration-500 ">
                  <FaInstagram className="text-white z-10 w-7 h-7" />
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
              </button>
            </a>
            <a href="https://wa.me/qr/VPX75GG4PGCCP1" target="_blank" rel="noreferrer">
              <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden bg-gray-950  shadow-md shadow-blue-600  group transition-all duration-500 ">
              <FaWhatsapp className="text-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-green-400 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
            </a>
            <a href="https://t.me/dagi_0056" target="_blank" rel="noreferrer">
              <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden bg-gray-950  shadow-md shadow-blue-600  group transition-all duration-500 ">
                <FaTelegram className="text-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-400 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/dagmawi-ephrem-559a7b342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden bg-gray-950  shadow-md shadow-blue-600  group transition-all duration-500 ">
                <FaLinkedin className="text-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
            </a>
          </div>
          <div className="flex justify-center">
          <Link to='contact'
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}>
            <button className="px-6 py-3 flex items-center justify-center rounded-full relative overflow-hidden bg-gray-950  shadow-md shadow-blue-600  group transition-all duration-500 ">
              <span className="text-white text-xl fill-white z-10">Contact</span>
            <div className="absolute top-full  w-full h-full rounded-full bg-blue-600 z-0 transition-all duration-500 group-hover:top-0"></div>
          </button>  
          </Link>
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
};

export default Home;