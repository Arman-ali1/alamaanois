import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.jpeg"; // Ensure the logo path is correct
import { NavLink } from "react-router-dom";

const HeaderNew = () => {

  const location = useLocation();
  const userData = location.state?.UserStatus || {};
  let login = userData.lgn;
  console.log("login===", login);

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleDonateClick = () => {
    navigate("/donate");
  };
  return (
    <Disclosure as="nav" className="bg-white fixed top-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="inline-flex items-center justify-center shadow-sm rounded-md p-2 text-black hover:shadow-lg hover:shadow-gray-200 hover:text-black active:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <div className="flex flex-shrink-0 items-center ">
              <img className="h-8 w-auto navbarlogo " src={logo} alt="Logo" />
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4 items-center">
                {" "}
                {/* Added items-center here */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-black  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? " shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <div className="relative group">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-black  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 hidden w-48 bg-white rounded-md shadow-lg group-hover:block">
                    <NavLink
                      to="/about#alamaan"
                      className={({ isActive }) =>
                        `block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                    >
                      Al Amaan OIS
                    </NavLink>
                    <NavLink
                      to="/about#muftisalmanazhari"
                      className={({ isActive }) =>
                        `block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                    >
                      Mufti Salman Azhari Sahab
                    </NavLink>
                    <NavLink
                      to="/about#ourscholars"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                    >
                      Our Scholars
                    </NavLink>
                    <NavLink
                      to="/about#ourmission"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                    >
                      Our Mission
                    </NavLink>
                  </div>
                </div>
                {/* Add more links as needed */}
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `text-black  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                    }`
                  }
                >
                  Courses
                </NavLink>
                <div className="relative group">
                  <NavLink
                    to="/library"
                    className={({ isActive }) =>
                      `text-black  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                      }`
                    }
                  >
                    Library
                  </NavLink>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 hidden w-48 bg-white rounded-md shadow-lg group-hover:block">
                    <NavLink
                      to="/library#darsibooks"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                      >
                      Darsi Books
                    </NavLink>
                    <NavLink
                      to="/library#quraan"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                      >
                      Quraan
                    </NavLink>
                    <NavLink
                      to="/library#hadith"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                      >
                      Hadith
                    </NavLink>
                    <NavLink
                      to="/library#aqaid"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                      >
                      Aqaid
                    </NavLink>
                    <NavLink
                      to="/library#fiqah"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                      >
                      Fiqah
                    </NavLink>
                    <NavLink
                      to="/library#orientalism"
                      className={({ isActive }) =>
                        ` block text-black  hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                        }`
                      }                      >
                      Orientalism
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `text-black  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                    }`
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-black  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? "shadow-lg shadow-gray-400 text-black border-2 border-b-black" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className=" inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-md bg-green-900 py-2 px-3 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white shadow-lg shadow-gray-400 focus:ring-offset-2 focus:ring-offset-green-600"
              onClick={handleLoginClick}
            >
              <span className="sr-only">Login</span>
              {login ? login : "Login"}
            </button>
            <button
              type="button"
              className="relative rounded-md bg-green-900 py-2 px-3 shadow-lg shadow-gray-400 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
              onClick={handleDonateClick}
            >
              <span className="sr-only">Donate</span>
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLink
            to="/"
            className="text-black block border-2 w-full hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"
          >
            Home
          </NavLink>
          <Disclosure as="div" className="relative">
            <DisclosureButton className="text-black block text-start border-2 w-full hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black">
              About
            </DisclosureButton>
            <DisclosurePanel className="space-y-1 bg-white rounded-md p-2">
              <NavLink
                to="/about#alamaan"
                className="text-black block border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Al Amaan OIS
              </NavLink>
              <NavLink
                to="/about#muftisalmanazhari"
                className="text-black block border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Mufti Salman Azhari Sahab
              </NavLink>
              <NavLink
                to="/about#ourscholars"
                className="text-black block border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Our Scholars
              </NavLink>
              <NavLink
                to="/about#ourmission"
                className="text-black block border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Our Mission
              </NavLink>
            </DisclosurePanel>
          </Disclosure>
          {/* Add more mobile links as needed */}
          <NavLink
            to="/courses"
            className="text-black block text-start border-2 w-full hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"
          >
            Courses
          </NavLink>
          <Disclosure as="div" className="relative">
            <DisclosureButton className="text-black block text-start border-2 w-full hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black">
              Library
            </DisclosureButton>
            <DisclosurePanel className="space-y-1 bg-white rounded-md p-2">
              <NavLink
                to="/library#darsibooks"
                className="text-black block text-start border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Darsi Books
              </NavLink>
              <NavLink
                to="/library#quraan"
                className="text-black block text-start border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Quraan
              </NavLink>
              <NavLink
                to="/library#hadith"
                className="text-black block text-start border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Hadith
              </NavLink>
              <NavLink
                to="/library#aqaid"
                className="text-black block text-start border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Aqaid
              </NavLink>
              <NavLink
                to="/library#fiqah"
                className="text-black block text-start border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Fiqah
              </NavLink>
              <NavLink
                to="/library#orientalism"
                className="text-black block text-start border-2 w-[50%] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"              >
                Orientalism
              </NavLink>
            </DisclosurePanel>
          </Disclosure>
          <NavLink
            to="/contact"
            className="text-black block text-start border-2 w-full hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"
          >
            Contact
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-black block text-start border-2 w-full hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium  border-b-black"
          >
            Blogs
          </NavLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default HeaderNew;
