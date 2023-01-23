import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const Confirm = ({ values, prevStep, nextStep, handleFormData }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="flex-1 justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span className="p-4 border-b-8 border-gri cursor-pointer">
            {t("Category")}
          </span>
          <span className="p-4 border-b-8 border-gri">{t("Week")}</span>
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            {t("Boat")}
          </span>
          <span className="p-4 border-b-8 border-albastru">{t("Confirm")}</span>
        </div>
      </div>
      <div className="text-center mt-24">
        <h1 className="text-3xl mt-44">
          {t("Your booking is now confirmed!")}
        </h1>
        <p className="mt-16">
          {t(
            "If you don't see the confirmation email in your inbox, please check your Spam folder."
          )}
        </p>
        <div className="mt-24">
          <h1 className="text-xl font-sans">
            {t("For a new booking click here!")}
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="bg-albastru text-alb px-4 py-2 mt-4 rounded-lg"
          >
            {t("Book now")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
