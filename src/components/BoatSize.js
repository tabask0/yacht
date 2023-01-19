import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const BoatSize = ({
  prevStep,
  nextStep,
  handleFormData,
  boats,
  setSelectedBoatSize,
  submitFirst,
  values,
}) => {
  const { t } = useTranslation();

  const formatPrice = (price) => {
    const str = JSON.stringify(price);
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="w-80 flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-10 h-full"
    >
      <div className="w-full  flex flex-col bg-white mt-44">
        <h1 className="font-bold h-10 text-2xl">{boats.name}</h1>
        <h1 className="font-bold mb-2" style={{ color: "#838995" }}>
          {t("From")}:{" "}
          {boats.name === "Full Yacht"
            ? formatPrice(values.week.full)
            : formatPrice(values.week.person)}
          €/{t("person")}
        </h1>
        <p className="mb-4" style={{ color: "#838995" }}>
          {boats.capacity} {t("people")}
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
            {t("Food")}:
          </div>
          <div>
            {boats.food === false && (
              <FontAwesomeIcon style={{ color: "red" }} icon={faX} />
            )}
          </div>
        </div>
        <p className="h-20 mt-4" style={{ color: "#838995" }}>
          {boats.name === "Full Yacht"
            ? t("YachtDescription", { YachtDescription: boats.description })
            : t("CabinDescription", { CabinDescription: boats.description })}
        </p>
        <button
          onClick={() => {
            setSelectedBoatSize(boats.name);
            submitFirst();
          }}
          style={{ fontFamily: "sofia" }}
          className="w-full h-10 mt-10 p-1/2 rounded buttons"
        >
          {t("Select")}
        </button>
      </div>
    </div>
  );
};

export default BoatSize;
