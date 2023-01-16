import React, { useState } from "react";
import moment from "moment";
import Navbar from "./Navbar";
import Week from "./Week";
import { sails } from "../assets/sails";

const Booking = ({ nextStep, prevStep, handleFormData, values }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center mt-24 text-center">
        <div className="flex flex-row justify-center">
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            Category
          </span>
          <span className="p-4 border-b-8 border-albastru">Week</span>
          <span className="p-4 border-b-8 border-gri">Boat</span>
          <span className="p-4 border-b-8 border-gri">Confirm</span>
        </div>
        <button
          onClick={() => prevStep()}
          className="w-16 mx-auto mt-10 text-alb rounded bg-albastru"
        >
          Back
        </button>
      </div>
      <div className="text-center mt-24">
        <span>
          You are sailing in
          <b> Croatia 🇭🇷</b>
        </span>
      </div>
      <div className="mt-20">
        {sails
          .filter((name) => name.type === values.sailType)
          .map((week, index) => (
            <Week
              values={values}
              nextStep={nextStep}
              handleFormData={handleFormData}
              key={index}
              week={week}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Booking;
