import React, { useEffect, useState, useContext } from "react";

const Crew = ({ week, values }) => {
  return (
    <div>
      <div className="flex-1 justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span className="p-4 border-b-4 border-gri">Week</span>
          <span className="p-4 border-b-4 border-albastru">Crew</span>
          <span className="p-4 border-b-4 border-gri">Confirm</span>
        </div>
      </div>
      <div className="text-center mt-24">
        <span>
          You are sailing in
          <b> Croatia 🇭🇷</b> on {values.week}
        </span>
      </div>
    </div>
  );
};

export default Crew;
