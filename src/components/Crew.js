import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";

const Crew = ({ week, values, nextStep, prevStep }) => {
  return (
    <div>
      <Navbar />
      <div className="flex-1 justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-4 border-gri cursor-pointer"
          >
            Week
          </span>
          <span className="p-4 border-b-4 border-albastru">Crew</span>
          <span className="p-4 border-b-4 border-gri">Confirm</span>
        </div>
      </div>
      <div className="text-center mt-24">
        <div className="flex flex-row justify-center m-2">
          You are sailing in
          <b className="mr-2 ml-2"> Croatia 🇭🇷</b> on{" "}
          {`${values.week[0]} - ${values.week[1]}`} with{" "}
          <p className="font-bold mr-2 ml-2">{values.crew}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;