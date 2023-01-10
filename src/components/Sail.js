import React, { useState, useEffect } from "react";

const Sail = ({ content, week, nextStep, handleFormData, values }) => {
  const submitFirst = () => {
    handleFormData("category", content.name);
    nextStep();
  };

  return (
    <div
      style={{ backgroundColor: "white" }}
      className="w-full flex flex-col justify-center md:justify-start shadow-lg mx-4 p-16 rounded-lg"
    >
      <div className="flex flex-col bg-white">
        <h1
          className="font-bold h-10 text-center text-xl"
          style={{ color: content.color }}
        >
          {content.name}
        </h1>
        <div style={{ fontFamily: "sofia" }} className="text-gri mt-8 h-22">
          <p className="row ml-3">2 Yachts</p>
          <p className="row ml-3">3+ Cabins</p>
          <p className="row ml-3">-</p>
        </div>
        <p>{}</p>
        <button
          onClick={() => submitFirst()}
          className="w-44 h-8 mx-auto rounded-xl mt-6 buttons"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Sail;
