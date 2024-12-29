import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className=" bg-backgroundColor px-4 py-2 text-white px-10 rounded-md active:bg-green-400">
        {title}
      </button>
    </div>
  );
};

export default Button;

//  bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out
