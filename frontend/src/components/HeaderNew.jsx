import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.jpeg"; // Ensure the logo path is correct
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeaderNew = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleDonateClick = () => {
    navigate("/donate");
  };
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto navbarlogo" src={logo} alt="Logo" />
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center">
                {" "}
                {/* Added items-center here */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-900 text-white" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <div className="relative group">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 hidden w-48 bg-gray-800 rounded-md shadow-lg group-hover:block">
                    <NavLink
                      to="/about/alamaan"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Al Amaan OIS
                    </NavLink>
                    <NavLink
                      to="/about/muftisalmanazhari"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Mufti Salman Azhari Sahab
                    </NavLink>
                    <NavLink
                      to="/about/ourscholars"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Our Scholars
                    </NavLink>
                    <NavLink
                      to="/about/ourmission"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Our Mission
                    </NavLink>
                  </div>
                </div>
                {/* Add more links as needed */}
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "bg-gray-900 text-white" : ""
                    }`
                  }
                >
                  Courses
                </NavLink>
                <div className="relative group">
                  <NavLink
                    to="/library"
                    className={({ isActive }) =>
                      `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : ""
                      }`
                    }
                  >
                    Library
                  </NavLink>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 hidden w-48 bg-gray-800 rounded-md shadow-lg group-hover:block">
                    <NavLink
                      to="/library/darsibooks"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Darsi Books
                    </NavLink>
                    <NavLink
                      to="/library/quraan"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Quraan
                    </NavLink>
                    <NavLink
                      to="/library/hadith"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Hadith
                    </NavLink>
                    <NavLink
                      to="/library/aqaid"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Aqaid
                    </NavLink>
                    <NavLink
                      to="/library/fiqah"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Fiqah
                    </NavLink>
                    <NavLink
                      to="/library/orientalism"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Orientalism
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-900 text-white" : ""
                    }`
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-900 text-white" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-green-900 py-2 px-3 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              onClick={handleLoginClick}
            >
              <span className="sr-only">Login</span>
              Login
            </button>
            <button
              type="button"
              className="relative rounded-full bg-green-900 py-2 px-3 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
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
            className={({ isActive }) =>
              `block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-gray-900 text-white" : ""
              }`
            }
          >
            Home
          </NavLink>
          <Disclosure as="div" className="relative">
            <DisclosureButton className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              About
            </DisclosureButton>
            <DisclosurePanel className="space-y-1 bg-gray-700 rounded-md p-2">
              <NavLink
                to="/about/alamaan"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Al Amaan OIS
              </NavLink>
              <NavLink
                to="/about/muftisalmanazhari"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Mufti Salman Azhari Sahab
              </NavLink>
              <NavLink
                to="/about/ourscholars"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Our Scholars
              </NavLink>
              <NavLink
                to="/about/ourmission"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Our Mission
              </NavLink>
            </DisclosurePanel>
          </Disclosure>
          {/* Add more mobile links as needed */}
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-gray-900 text-white" : ""
              }`
            }
          >
            Courses
          </NavLink>
          <Disclosure as="div" className="relative">
            <DisclosureButton className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Library
            </DisclosureButton>
            <DisclosurePanel className="space-y-1 bg-gray-700 rounded-md p-2">
              <NavLink
                to="/library/darsibooks"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Darsi Books
              </NavLink>
              <NavLink
                to="/library/quraan"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Quraan
              </NavLink>
              <NavLink
                to="/library/hadith"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Hadith
              </NavLink>
              <NavLink
                to="/library/aqaid"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Aqaid
              </NavLink>
              <NavLink
                to="/library/fiqah"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Fiqah
              </NavLink>
              <NavLink
                to="/library/orientalism"
                className="block text-gray-300 hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Orientalism
              </NavLink>
            </DisclosurePanel>
          </Disclosure>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-gray-900 text-white" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-gray-900 text-white" : ""
              }`
            }
          >
            Blogs
          </NavLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default HeaderNew;
