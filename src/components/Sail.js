import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

const Sail = ({ content, week, nextStep, handleFormData, values }) => {
  const [selectedSail, setSelectedSail] = useState();

  const submitFirst = () => {
    setSelectedSail(content.name);
    handleFormData([week], `${week}`);
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
          className={`mt-4 border-2 rounded hover:text-albastru ease-in-out transition-all ${
            selectedSail !== undefined ? "font-bold text-albastru" : ""
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Sail;
