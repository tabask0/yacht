import React, { useState } from "react";
import moment from "moment";
import Navbar from "./Navbar";
import Week from "./Week";

const Booking = ({ nextStep, prevStep, handleFormData, values }) => {
  var weeks = [];
  var startDate = moment(new Date(2023, 2)).isoWeekday(8);
  if (startDate.date() == 8) {
    startDate = startDate.isoWeekday(-6);
  }
  var today = moment(new Date(2023, 9)).startOf("week").format("YYYY-MM-DD");
  while (startDate.isBefore(today)) {
    let startDateWeek = startDate.isoWeekday("Monday").format("DD MMM");
    let endDateWeek = startDate.isoWeekday("Sunday").format("DD MMM YYYY");
    startDate.add(7, "days");
    weeks.push([startDateWeek, endDateWeek]);
  }

  return (
    <div className="mb-20">
      <Navbar />
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-row">
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            Category
          </span>
          <span className="p-4 border-b-8 border-albastru">Week</span>
          <span className="p-4 border-b-8 border-gri">Crew</span>
          <span className="p-4 border-b-8 border-gri">Confirm</span>
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
