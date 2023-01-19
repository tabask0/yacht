import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Boat = ({
  boat,
  values,
  setSelectedBoat,
  setSelectedBoatName,
  formatPrice,
}) => {
  const { t } = useTranslation();

  const submitFirst = () => {
    setSelectedBoat(true);
    setSelectedBoatName(boat.name);
  };
  return (
    <div
      key={boat.id}
      style={{ backgroundColor: "white" }}
      className="flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-8 h-full"
    >
      <div className="flex flex-col bg-white mt-44 flex-wrap">
        <h1 style={{ color: boat.color }} className="font-bold h-10  text-xl">
          {boat.name}
        </h1>
        <h1 style={{ color: "#838995" }}>
          {t("From")}: €{formatPrice(values.week.person)}/{t("person")}
        </h1>
        <div className="flex flex-col ">
          <div className="flex flex-row justify-between mt-8">
            <div className="text-sm font-medium">{t("Yacht Type")}:</div>
            <div className="text-sm font-medium ml-7">{boat.type}</div>
          </div>
          <div className="mt-4 flex flex-end text-sm font-medium">
            <div className="text-sm font-medium">{t("Yach Age")}:</div>
            <div className="text-sm font-medium ml-10">{boat.age}</div>
          </div>
          <div className="mt-4 flex flex-end text-sm font-medium">
            <div className="text-sm font-medium">{t("Capacity")}:</div>
            <div className="text-sm font-medium ml-11">{boat.capacity}</div>
          </div>
          <div className="mt-4 flex flex-end text-sm font-medium">
            <div>Skipper</div>
            <div>
              <FontAwesomeIcon
                className="ml-14"
                style={{ color: "#45DB5D" }}
                icon={boat.skipper === true && faCheck}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => submitFirst()}
          style={{ fontFamily: "sofia" }}
          className="w-full h-10 mt-10 p-1/2 rounded buttons"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Boat;
