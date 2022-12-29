import React from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-18 flex flex-row justify-between shadow-lg p-6">
        <h1 className="text-xl">GLOBAL YACHTING</h1>
        <h3
          className="text-md hover:cursor-pointer"
          onClick={() => navigate("/GY/test")}
        >
          Make a Booking
        </h3>
        <h3
          className="hover:cursor-pointer"
          onClick={() => navigate("/GY/test/contact")}
        >
          Contact us
        </h3>
      </div>
    </>
  );
};

export default Navigation;
