import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Sail = ({ content, week, nextStep, handleFormData, values }) => {
  const { t } = useTranslation();

  const submitFirst = (e) => {
    handleFormData("category", content.name);
    handleFormData(
      "sailType",
      content.name === "Crazy Sails" ? "Crazy Sails" : "all"
    );
    nextStep();
  };

  return (
    <div
      style={{ backgroundColor: "white" }}
      className=" flex flex-row justify-center md:justify-start shadow-lg mx-auto mt-10 p-16 rounded-lg sm:flex-wrap"
    >
      <div className="flex flex-col bg-white">
        <h1
          className="font-bold h-10 text-center text-xl"
          style={{ color: content.color }}
        >
          {content.name}
        </h1>
        <div style={{ fontFamily: "sofia" }} className="text-gri mt-8 h-22">
          <p className="row ml-3">2 {t("Yachts")}</p>
          <p className="row ml-3">3+ {t("Cabins")}</p>
          <p className="row ml-3">-</p>
        </div>
        <p>{}</p>
        <button
          onClick={() => submitFirst()}
          className="w-44 h-8 mx-auto rounded-xl mt-6 buttons"
        >
          {t("Select")}
        </button>
      </div>
    </div>
  );
};

export default Sail;
