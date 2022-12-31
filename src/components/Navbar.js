import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full h-18 justify-between shadow-lg">
      <div className="flex flex-row justify-around p-6 mr-auto">
        <h1 className="text-md">GLOBAL YACHTING</h1>
        <h3 className="text-md hover:cursor-pointer mr-20">Make a Booking</h3>
        <h3 className="text-md hover:cursor-pointer">
          <a href={<Contact />}></a>Contact us
        </h3>
      </div>
    </div>
  );
};

export default Navigation;
