/* eslint-disable no-restricted-globals */
import React from "react";
import Contact from "./Contact";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate.reload();
  }

  return (
    <div className="w-full h-18 justify-between shadow-lg">
      <div className="flex flex-row justify-around p-6 mr-auto">
        <Link to="/GY/test">
          <h1 className="text-md">GLOBAL YACHTING</h1>
        </Link>
        <Link to="/GY/test">
          <h3 className="text-md hover:cursor-pointer mr-20">Make a Booking</h3>
        </Link>
        <Link to="/GY/test/contact">
          <h3 className="text-md hover:cursor-pointer">Contact us</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
