import React from "react";
import { sailType } from "../assets/sails";
import Sail from "./Sail";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const SailType = ({
  nextStep,
  prevStep,
  handleFormData,
  language,
  setLanguage,
  values,
}) => {
  const { t, i18n } = useTranslation();
  console.log(i18n);

  return (
    <div className="justify-center md:justify-start">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        handleFormData={handleFormData}
        values={values}
      />
      <div className="flex flex-row justify-center mt-24 text-center">
        <div className="flex flex-row ">
          <span className="p-4 border-b-8 border-albastru">
            {t("Category")}
          </span>
          <span className="p-4 border-b-8 border-gri">{t("Week")}</span>
          <span className="p-4 border-b-8 border-gri">{t("Boat")}</span>
          <span className="p-4 border-b-8 border-gri">{t("Confirm")}</span>
        </div>
      </div>
      <div className="flex flex-row lg:mt-28  mx-auto flex-wrap">
        {sailType.map((sail) => (
          <Sail
            handleFormData={handleFormData}
            key={sail.id}
            content={sail}
            nextStep={nextStep}
          />
        ))}
      </div>
    </div>
  );
};

export default SailType;
