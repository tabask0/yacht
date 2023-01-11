import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const BoatSize = ({
  prevStep,
  nextStep,
  handleFormData,
  boats,
  setSelectedBoatSize,
}) => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="w-80 h-full flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24 h-full"
    >
      <div className="w-full  flex flex-col bg-white mt-44">
        <h1 className="font-bold h-10 text-2xl">{boats.name}</h1>
        <h1 className="font-bold mb-2" style={{ color: "#838995" }}>
          From: {boats.price}
        </h1>
        <p className="mb-4" style={{ color: "#838995" }}>
          {boats.capacity}
        </p>
        <div
          style={{ color: "#838995" }}
          className="flex flex-row justify-between mb-2 font-semibold"
        >
          <div>Host:</div>
          <div style={{ color: "#838995" }}>
            {boats.host === true ? (
              "Optional"
            ) : (
              <FontAwesomeIcon style={{ color: "red" }} icon={faX} />
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <div className="font-semibold" style={{ color: "#838995" }}>
            Food:
          </div>
          <div>
            {boats.food === false && (
              <FontAwesomeIcon style={{ color: "red" }} icon={faX} />
            )}
          </div>
        </div>
        <p className="h-20 mt-4" style={{ color: "#838995" }}>
          {boats.description}
        </p>
        <button
          onClick={() => setSelectedBoatSize(boats.name)}
          style={{ fontFamily: "sofia" }}
          className="w-full h-10 mt-10 p-1/2 rounded buttons"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default BoatSize;
