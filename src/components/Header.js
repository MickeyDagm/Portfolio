import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link  } from "react-router-dom"; 
import { FaMoon, FaSun } from 'react-icons/fa';


const Header = ({ toggleDarkMode, darkMode }) => {
  const [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="w-full relative z-[100]">
      <div className="flex items-center justify-between gap-3 dark:bg-gray-950 bg-gray-100 py-4 md:px-14 px-7 fixed top-0 left-0 right-0">
          <div className="font-bold text-2xl tracking-wide cursor-pointer">
            <Link to="/" className="dark:text-white">
              Dagmawi <span className="text-blue-500">Ephrem</span>
            </Link>
          </div>

        <ul
          className={`md:flex md:items-center gap-8 absolute md:static z-50 left-0 w-full md:w-auto dark:bg-gray-950 bg-gray-100 text-center ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-lg border-b-2 md:border-b-0 px-7 py-3 md:py-0 md:px-0 cursor-pointer hover:border-b-2 md:border-b-blue-500 transition-1"
            >
              <Link 
                to={link.link}
                className="dark:text-white text-black hover:text-blue-500 dark:hover:text-blue-500 duration-500"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link >
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-10 ">
          <button
          onClick={toggleDarkMode}
          className="text-white p-2 rounded-lg hover:bg-gray-700"
        >
          {darkMode ? <FaSun className="text-white"/>  : <FaMoon className="text-black"/>}
        </button>
        <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden w-7 h-7"
          >
            {open ? (
              <XMarkIcon className="dark:text-white text-black" />
            ) : (
              <Bars3Icon className="dark:text-white text-black" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
