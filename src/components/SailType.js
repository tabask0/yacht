import React from "react";
import { sailType } from "../assets/sails";
import Sail from "./Sail";
import Navbar from "./Navbar";

const SailType = ({ nextStep, prevStep, handleFormData, values }) => {
  return (
    <div className="justify-center md:justify-start">
      <Navbar />
      <div className="flex flex-row justify-center mt-24 text-center">
        <div className="flex flex-row">
          <span className="p-4 border-b-8 border-albastru">Category</span>
          <span className="p-4 border-b-8 border-gri">Week</span>
          <span className="p-4 border-b-8 border-gri">Boat</span>
          <span className="p-4 border-b-8 border-gri">Confirm</span>
        </div>
      </div>
      <div className="flex flex-row lg:mt-32  mx-auto flex-wrap">
        {sailType.map((sail) => (
          <Sail
            handleFormData={handleFormData}
            key={sail.id}
            content={sail}
            nextStep={nextStep}
          />
        ))}
      </div>
    </div>
  );
};

export default SailType;
