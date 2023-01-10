import React from "react";
import Navbar from "./Navbar";

const ConfirmedScreen = ({ values }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <h1 className="text-2xl text-center ">Booking confirmation</h1>
        <p className="mt-24 text-center ">
          <span className="font-bold">{values.firstName}</span>
          <span className="ml-1 mr-1 font-bold">{values.lastName}</span>
          your booking has been confirmed!
        </p>
        <div className="flex flex-row justify-evenly">
          <div>
            <div className="flex flex-col ml-32 mt-20">
              <h1 className="ml-0 font-bold">Booking details</h1>
              <hr className="w-1/3 mt-2 mb-6" />
              <div className="flex flex-row">
                <div className="mr-20">
                  <p>Order amount</p>
                  <p>1079$</p>
                </div>
                <div className="mr-20">
                  <p>Application fees & taxes</p>
                  <p>20$</p>
                </div>
                <div className="mr-20">
                  <p>Total</p>
                  <p>1079$</p>
                </div>
              </div>
              <hr className="w-1/3 mt-6 mb-6" />
            </div>
            <div className="flex flex-col ml-32 mt-8">
              <h1 className="ml-0 font-bold">Event details</h1>
              <hr className="w-1/3 mt-2 mb-6" />
              <div className="flex flex-col">
                <div className="flex flex-row mr-20">
                  <p className="mr-10 w-32">Name</p>
                  <p>{values.crew}</p>
                </div>
                <div className="flex flex-row mr-20">
                  <p className="mr-10 w-32">Venue</p>
                  <p>Croatia</p>
                </div>
                <div className="flex flex-row mr-20">
                  <p className="mr-10 w-32">Date & Time</p>
                  <p>
                    {values.week[0]} - {values.week[1]}
                  </p>
                </div>
              </div>
              <hr className="w-1/3 mt-6 mb-6" />
            </div>
          </div>
          <div className="flex flex-col ml-32 mt-20 border-2 border-mov h-60 w-44 text-center rounded">
            <h1 className="text-4xl font-extrabold mt-4 text-mov">
              {values.week[0]}
            </h1>
            <p className="mt-8">{values.crew}</p>
          </div>
        </div>
      </div>
      <button>Print</button>
    </div>
  );
};

export default ConfirmedScreen;
