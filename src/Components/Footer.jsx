import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/DALL_E-2024-11-14-23.26.32-A-logo-design-for-a-heart-pulse-monitoring-device-called-_Vital-Wave_-removebg-preview 2.svg";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <div className="flex items-center pb-4">
            <img src={logo} alt="" className="w-10 h-10"/>
            <h1 className="items-center font-semibold text-xl my-auto">VitalWave</h1>
          </div>
          
          <p className=" text-sm">
            We’re a small, passionate team at VitalWave, driven by the mission to make healthcare more accessible in remote areas. Our team brings together individuals with backgrounds in healthcare, technology, and community outreach. Together, we’re focused on using simple, effective portable ECG devices to help local caregivers provide timely cardiac care to those who need it most.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Communities
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Ejisu, Ashanti Region, Ghana
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              paamoanimaa11@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +233-53-548-6476
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
        Copyright © 2024 - All right reserved By
          <span className=" text-hoverColor"> VitalWave</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;