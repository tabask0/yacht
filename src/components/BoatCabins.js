import React from "react";
import Navbar from "./Navbar";

const BoatCabins = ({ prevStep, nextStep, handleFormData }) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-row">
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            Category
          </span>
          <span className="p-4 border-b-8 border-gri">Week</span>
          <span className="p-4 border-b-8 border-albastru">Boat</span>
          <span className="p-4 border-b-8 border-gri">Confirm</span>
        </div>
      </div>
    </div>
  );
};

export default BoatCabins;
