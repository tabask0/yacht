import React, { useState } from "react";
import moment from "moment";
import Navbar from "./Navbar";
import Week from "./Week";
import { sails } from "../assets/sails";
import { useTranslation } from "react-i18next";

const Booking = ({ nextStep, prevStep, handleFormData, values }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center mt-24 text-center">
        <div className="flex flex-row justify-center">
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            {t("Category")}
          </span>
          <span className="p-4 border-b-8 border-albastru">{t("Week")}</span>
          <span className="p-4 border-b-8 border-gri">{t("Boat")}</span>
          <span className="p-4 border-b-8 border-gri">{t("Confirm")}</span>
        </div>
        <button
          onClick={() => prevStep()}
          className="w-16 mx-auto mt-10 text-alb rounded bg-albastru"
        >
          {t("Back")}
        </button>
      </div>
      <div className="text-center mt-24">
        <span>
          {t("You are sailing in")}
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
