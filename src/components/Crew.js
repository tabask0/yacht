import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { boats, boatSize } from "../assets/sails";
import Boat from "./Boat";
import BoatSize from "./BoatSize";

const Crew = ({ week, values, nextStep, prevStep, handleFormData }) => {
  const [selectedBoat, setSelectedBoat] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span className="p-4 border-b-8 border-gri cursor-pointer">
            Category
          </span>
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            Week
          </span>
          <span className="p-4 border-b-8 border-albastru">Boat</span>
          <span className="p-4 border-b-8 border-gri">Confirm</span>
        </div>
      </div>
      <div className="text-center mt-24">
        <div className="flex flex-row justify-center m-2">
          You are sailing in
          <b className="mr-2 ml-2"> Croatia 🇭🇷</b> on{" "}
          <p className="mr-2 ml-2 font-bold">{`${values.week[0]} - ${values.week[1]}`}</p>
          with a <p className="font-bold mr-2 ml-2">{values.crew}</p>{" "}
        </div>{" "}
      </div>
      {selectedBoat === false && (
        <div className="w-full h-full flex flex-row lg:mt-4 justify-center">
          {boats.map((boat) => (
            <Boat
              setSelectedBoat={setSelectedBoat}
              key={boat.id}
              boat={boat}
              values={values}
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleFormData}
            />
          ))}
        </div>
      )}
      {selectedBoat === true && (
        <div className="w-full h-full flex flex-row lg:mt-4 justify-center">
          {boatSize.map((boats) => (
            <BoatSize boats={boats} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Crew;
