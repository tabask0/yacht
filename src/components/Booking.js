import React, { useState } from "react";
import moment from "moment";
import SailItem from "./SailItem";

const Booking = ({ nextStep, handleFormData, values }) => {
  var weeks = [];
  var startDate = moment(new Date(2022, 5)).isoWeekday(8);
  if (startDate.date() == 8) {
    startDate = startDate.isoWeekday(-6);
  }
  var today = moment(new Date(2022, 9)).startOf("week").format("YYYY-MM-DD");
  while (startDate.isBefore(today)) {
    let startDateWeek = startDate.isoWeekday("Monday").format("DD MMM");
    let endDateWeek = startDate.isoWeekday("Sunday").format("DD MMM YYYY");
    startDate.add(7, "days");
    weeks.push([startDateWeek, endDateWeek]);
  }

  return (
    <div>
      <div className="flex-1 justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span className="p-4 border-b-4 border-albastru">Week</span>
          <span className="p-4 border-b-4 border-gri">Crew</span>
          <span className="p-4 border-b-4 border-gri">Confirm</span>
        </div>
      </div>
      <div className="text-center mt-24">
        <span>
          You are sailing in
          <b> Croatia 🇭🇷</b>
        </span>
      </div>
      <div className="mt-20">
        {weeks.map((week, index) => (
          <SailItem
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
