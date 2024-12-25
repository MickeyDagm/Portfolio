import {
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/solid";
  import { useState } from "react";
  import { Link } from "react-scroll";
  
  const Header = () => {
    let Links = [
      { name: "Home", link: "home" },
      { name: "About me", link: "about" },
      { name: "Projects", link: "projects" },
      { name: "Contact", link: "contact" },
    ];
    let [open, setOpen] = useState(false);
  
    return (
      <div className="w-full relative z-[100]">
        <div className="md:flex items-center justify-between bg-gray-950 py-4 md:px-14 px-7 fixed top-0 left-0 right-0">
          <div className="flex items-center justify-between">
          <div className="font-bold text-2xl tracking-wide cursor-pointer ">
            <Link 
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            >
              <span className="text-white">Dagmawi <span className="text-blue-500">Ephrem</span></span>
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className=" cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon className="text-white"/> : <Bars3Icon className="text-white"/>}
          </div>
          </div>
          <ul
            className={`md:flex md:items-center gap-8 absolute md:static z-50 left-0  w-full md:w-auto bg-gray-950 text-center ${
              open ? "top-12 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="text-lg border-b-2 md:border-b-0 px-7 py-3 md:py-0 md:px-0 cursor-pointer hover:border-b-2 md:border-b-blue-500 transition-1" key={link.name}>
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  activeStyle={{
                    color: 'rgb(59, 130, 246)',
                    transition: 'all 0.3s ease-in-out'
                  }}                                 
                 className="text-white hover:text-blue-500 duration-500"
                 onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;