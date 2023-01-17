import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Week = ({ nextStep, prevStep, handleFormData, values, week, index }) => {
  const [iconActive, setIconActive] = useState(false);

  const submitFirst = () => {
    handleFormData("week", {
      ...week,
      start: week.start,
      end: week.end,
      person: week.person,
      full: week.baseValue,
      skipper: week.skipper,
    });
    nextStep();
  };

  const formatDate = (date) => {
    const newDate = date.split(".");
    const formattedDate = new Date(
      newDate[2] ? newDate[2] : "",
      newDate[1] - 1,
      newDate[0]
    );
    console.log(newDate[0], newDate[1], newDate[2]);

    return moment(formattedDate).format("DD MMM");
  };

  const formatPrice = (price) => {
    const str = JSON.stringify(price);
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div
      key={index}
      className="flex flex-row justify-center"
      onClick={() =>
        iconActive === false ? setIconActive(true) : setIconActive(false)
      }
    >
      <div
        style={{
          border: "0px 6px 44px 10px rgba(0,0,0,0.22)",
          backgroundColor: "white",
          borderBottom: "1px solid #E0E4EB",
        }}
        className="w-full mr-8 ml-8 h-46 mx-auto flex flex-col border-gri m-0 lg:w-3/6 lg:mr-0 p-4 cursor-pointer"
      >
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
          >{`${formatDate(week.start)} - ${formatDate(week.end)} 2023`}</h1>
        </div>
        <div className="flex flex-row  justify-between ml-4 mt-4">
          <h1 style={{ fontFamily: "sofia" }} className="text-gri">
            Week {moment(formatDate(week.start), "DD MMM YYYY").isoWeek()} from{" "}
            {formatPrice(week.person)}€/person
          </h1>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={iconActive === false ? faArrowRight : faArrowDown}
          />
        </div>
        <div className="w-full flex flex-row lg:mt-4">
          {iconActive === true && (
            <button
              onClick={() => submitFirst()}
              className="w-2/3 h-10 mx-auto rounded-xl mt-6"
              style={{ backgroundColor: "#0084FE", color: "white" }}
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Week;
