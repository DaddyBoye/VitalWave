import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-justify lg:text-start">
          At VitalWave, we’re dedicated to making essential healthcare accessible, especially in remote and rural areas where resources are limited. Our portable ECG technology empowers local caregivers by instantly capturing and transmitting heart data, allowing patients in underserved regions to receive timely cardiac assessments without the need to travel.
        </p>
        <p className="text-justify lg:text-start">
          By bridging the distance between rural patients and healthcare providers, our solution ensures that every heartbeat matters. We believe that no one should be left without access to quality heart monitoring and care, no matter where they live.
        </p>
        <p className="text-justify lg:text-start">
          Our mission is to bring the power of real-time health insights to the places that need it most. With innovation, compassion, and dedication, we’re paving the way for a future where healthcare knows no boundaries.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img className="rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;