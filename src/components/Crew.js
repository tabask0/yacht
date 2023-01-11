import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { boats, boatSize } from "../assets/sails";
import Boat from "./Boat";
import BoatSize from "./BoatSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Crew = ({ week, values, nextStep, prevStep, handleFormData }) => {
  const [selectedBoat, setSelectedBoat] = useState(false);
  const [selectedBoatSize, setSelectedBoatSize] = useState(null);
  const [cabinSize, setCabinSize] = useState({
    boysCabin: 0,
    girlsCabin: 0,
    mixedCabin: 0,
  });

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
      {selectedBoat === true && selectedBoatSize === null && (
        <div className="w-full h-full flex flex-row lg:mt-4 justify-center">
          {boatSize.map((boats) => (
            <BoatSize boats={boats} setSelectedBoatSize={setSelectedBoatSize} />
          ))}
        </div>
      )}
      {selectedBoatSize === "Cabins" ? (
        <div className="w-full h-full flex flex-row lg:mt-4 justify-center">
          <div
            style={{ backgroundColor: "white" }}
            className="w-1/3 h-full flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24"
          >
            <div className="w-full flex flex-col bg-white p-2">
              <h1 className="font-bold h-10 text-3xl">Cabins</h1>
              <h1
                className="font-bold mb-2 text-xl"
                style={{ color: "#B2B7C2" }}
              >
                Add a crew
              </h1>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-semibold">2 Boy cabin</h1>
                    <p style={{ color: "#2E90FF" }}>You and friend</p>
                    <p style={{ color: "#333333" }}>$1,086/person</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.boysCabin - 1,
                      })
                    }
                    className="mr-3  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faMinus}
                  />
                  <h1 className="w-4 mx-2 font-bold">{cabinSize.boysCabin}</h1>
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.boysCabin + 1,
                      })
                    }
                    className="ml-2  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faPlus}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-semibold">2 Boy cabin</h1>
                    <p style={{ color: "#2E90FF" }}>You and friend</p>
                    <p style={{ color: "#333333" }}>$1,086/person</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.mixedCabin - 1,
                      })
                    }
                    className="mr-3  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faMinus}
                  />
                  <h1 className="w-4 mx-2 font-bold">{cabinSize.mixedCabin}</h1>
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.mixedCabin + 1,
                      })
                    }
                    className="ml-2  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faPlus}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-semibold">2 Boy cabin</h1>
                    <p style={{ color: "#2E90FF" }}>You and friend</p>
                    <p style={{ color: "#333333" }}>$1,086/person</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.girlsCabin - 1,
                      })
                    }
                    className="mr-3  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faMinus}
                  />
                  <h1 className="w-4 mx-2 font-bold">{cabinSize.girlsCabin}</h1>
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.girlsCabin + 1,
                      })
                    }
                    className="ml-2  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faPlus}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    style={{ visibility: "hidden" }}
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-bold text-xl">Total:</h1>
                  </div>
                </div>
              </div>
              <button
                onClick={() => nextStep()}
                style={{ fontFamily: "sofia" }}
                className="w-full h-10 mt-10 p-1/2 rounded buttons"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : (
        selectedBoatSize === "Full Yacht" && nextStep()
      )}
    </div>
  );
};

export default Crew;
