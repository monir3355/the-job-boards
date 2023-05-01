import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  return (
    <header className="bg-[#F9F9FF] relative">
      <div className="absolute top-0 right-0 ">
        <img className="w-24 md:w-36" src="/images/All Images/Vector-1.png" alt="" />
      </div>
      <nav className="container mx-auto flex justify-between items-center py-7">
        <div>
          <Link className="font-semibold text-2xl inline-flex" to="/">
            <img className="h-8 w-8" src="/logo.jpg" alt="" /> theJobBoard
          </Link>
        </div>
        <Bars3BottomRightIcon
          onClick={() => setIsOpen(!isOpen)}
          className="h-7 font-semibold md:hidden cursor-pointer z-10"
        />
        <ul className="md:flex gap-6 hidden">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              aria-label="Statistics"
              title="Statistics"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied"
              aria-label="Applied"
              title="Applied"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="md:flex hidden">
          <Link className="btn-primary" to="/applying">
            Star Applying
          </Link>
        </div>
      </nav>
      {isOpen && (
        <nav className="container mx-auto flex-col text-center py-7 absolute bg-[#c6c6e6] top-8 left-0 w-full right-0 rounded-md z-10">
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 font-semibold md:hidden top-3 right-4 absolute cursor-pointer"
          />
          <div>
            <Link className="font-semibold text-2xl inline-flex" to="/">
              <img className="h-8 w-8" src="/logo.jpg" alt="" /> theJobBoard
            </Link>
          </div>

          <ul className="flex-col gap-6">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applied"
                aria-label="Applied"
                title="Applied"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="mx-auto mt-4">
            <Link
              className="bg-[#818dfe] text-white py-2 px-4 rounded-md hover:bg-[#6e7cf7]"
              to="/applying"
            >
              Star Applying
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
