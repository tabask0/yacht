import React, { useState, useEffect } from "react";

const Sail = ({ content, week, nextStep, handleFormData, values }) => {
  const submitFirst = () => {
    handleFormData("week", week);
    handleFormData("crew", content.name);
    nextStep();
    console.log(values);
  };

  return (
    <div className="w-full flex flex-col justify-center p-4">
      <div className="flex flex-col">
        <h1 className="font-bold" style={{ color: content.color }}>
          {content.name}
        </h1>
        <div style={{ fontFamily: "sofia" }} className={`text-gri mt-8`}>
          <p className="row ml-3">2 Yachts</p>
          <p className="row ml-3">3+ Cabins</p>
          <p className="row ml-3">-</p>
        </div>
        <p>{}</p>
        <button
          onClick={() => submitFirst()}
          className="mt-4 border-2 rounded hover:text-albastru ease-in-out transition-all"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Sail;
