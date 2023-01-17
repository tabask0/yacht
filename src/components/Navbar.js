/* eslint-disable no-restricted-globals */
import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Navigation = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="w-full h-18 justify-between shadow-lg">
      <div className="flex flex-row justify-between p-6 mr-auto">
        <Link to="/GY/test">
          <h1 onClick={refreshPage} className="text-md">
            GLOBAL YACHTING
          </h1>
        </Link>
        <Link to="/GY/test/contact">
          <h3 className="text-md hover:cursor-pointer">Contact us</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
