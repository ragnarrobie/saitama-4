import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="logo"
            />
          </Link>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                ${isActive ? "text-orange-700" : "text-gray-700"}
                lg:hover:bg-transparent lg:border-0
                hover:text-orange-700
                lg:p-0
                `
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                ${isActive ? "text-orange-700" : "text-gray-700"}
                lg:hover:bg-transparent lg:border-0
                hover:text-orange-700
                lg:p-0
                `
                }
              >
                {" "}
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact Us"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                ${isActive ? "text-orange-700" : "text-gray-700"}
                lg:hover:bg-transparent lg:border-0
                hover:text-orange-700
                lg:p-0
                `
                }
              >
                {" "}
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/GitHub"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                ${isActive ? "text-orange-700" : "text-gray-700"}
                lg:hover:bg-transparent lg:border-0
                hover:text-orange-700
                lg:p-0
                `
                }
              >
                {" "}
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/User"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                ${isActive ? "text-orange-700" : "text-gray-700"}
                lg:hover:bg-transparent lg:border-0
                hover:text-orange-700
                lg:p-0
                `
                }
              >
                {" "}
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
