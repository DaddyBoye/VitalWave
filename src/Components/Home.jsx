import React from "react";
import Button from "../Layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-100">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Bringing Heart Health to Every Corner
        </h1>
        <p>
          At VitalWave, we believe that quality healthcare should reach
          everyone, everywhere. Our innovative ECG solution is designed to
          bridge the gap in rural areas, instantly capturing and transmitting
          vital heart data to medical professionals, no matter the distance.
        </p>
      </div>
    </div>
  );
};

export default Home;
