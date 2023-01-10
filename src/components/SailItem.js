import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Sail from "./Sail";
import { sails } from "../assets/sails";

const SailItem = ({ nextStep, handleFormData, week, index, values }) => {
  const [iconActive, setIconActive] = useState(false);

  return (
    <div
      key={index}
      className="flex flex-row justify-center"
      onClick={() =>
        iconActive === false ? setIconActive(true) : setIconActive(false)
      }
    >
      <div className="w-full mr-8 ml-8 h-46 mx-auto flex flex-col shadow-xl p-4 m-0 lg:w-3/6 lg:mr-0">
        <div className="ml-4">
          <span style={{ fontSize: 40, color: "#00b1ab" }}>&#x2022;</span>
          <span style={{ fontSize: 40, color: "#eec2a7" }}>&#x2022;</span>
          <span style={{ fontSize: 40, color: "#0084fe" }}>&#x2022;</span>
          <span style={{ fontSize: 40, color: "#b790b0" }}>&#x2022;</span>
          <span style={{ fontSize: 40, color: "#333333" }}>&#x2022;</span>
        </div>
        <div className="flex flex-row">
          <h1
            style={{ fontFamily: "sofia" }}
            className="mx-4 text-lg"
          >{`${week[0]} - ${week[1]}`}</h1>
        </div>
        <div className="flex flex-row  justify-between ml-4 mt-4">
          <h1 style={{ fontFamily: "sofia" }} className="text-gri">
            Week {moment(week[1], "DD MMM YYYY").isoWeek()} from 1070€/person
          </h1>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={iconActive === false ? faArrowRight : faArrowDown}
          />
        </div>
        <div className="w-full flex flex-row lg:mt-4">
          {iconActive === true &&
            sails.map((sail) => (
              <Sail
                values={values}
                nextStep={nextStep}
                handleFormData={handleFormData}
                key={sail.id}
                content={sail}
                week={week}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SailItem;
