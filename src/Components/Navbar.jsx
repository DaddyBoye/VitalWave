import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import logo from "../assets/img/DALL_E-2024-11-14-23.26.32-A-logo-design-for-a-heart-pulse-monitoring-device-called-_Vital-Wave_-removebg-preview 2.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center"
            >
              <img src={logo} alt="" className="w-10 h-10" />
              <h1 className="text-2xl font-semibold">VitalWave</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative transition-all cursor-pointer"
            >
              Home
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative transition-all cursor-pointer"
            >
              About Us
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative transition-all cursor-pointer"
            >
              Services
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative transition-all cursor-pointer"
            >
              Communities
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="blogs"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative transition-all cursor-pointer"
            >
              Blogs
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <button
              className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-green-700 hover:text-white transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Communities
          </Link>
          <Link
            to="blogs"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <div className="lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
