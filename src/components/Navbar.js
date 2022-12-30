import React from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-18 justify-between shadow-lg">
      <div className="flex flex-row justify-around p-6 mr-auto">
        <h1 className="text-md">GLOBAL YACHTING</h1>
        <h3
          className="text-md hover:cursor-pointer mr-20"
          onClick={() => navigate("/GY/test")}
        >
          Make a Booking
        </h3>
        <h3
          className="text-md hover:cursor-pointer"
          onClick={() => navigate("/GY/test/contact")}
        >
          Contact us
        </h3>
      </div>
    </div>
  );
};

export default Navigation;
