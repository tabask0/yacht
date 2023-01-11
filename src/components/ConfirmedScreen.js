import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faNoteSticky,
  faBed,
  faCoins,
  faPeopleGroup,
  faSailboat,
  faCreditCard,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

const ConfirmedScreen = ({ values }) => {
  return (
    <div style={{ minHeight: "130vh" }}>
      <Navbar />
      <div className="flex flex-row justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span className="p-4 border-b-8 border-gri cursor-pointer">
            Category
          </span>
          <span className="p-4 border-b-8 border-gri">Week</span>
          <span className="p-4 border-b-8 border-gri cursor-pointer">Boat</span>
          <span className="p-4 border-b-8 border-albastru">Confirm</span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center mx-auto items-center mt-20">
        <h1 className="text-3xl font-bold">Booking summary</h1>
        <div className="w-full flex flex-row justify-center">
          <div
            style={{ backgroundColor: "white" }}
            className="w-3/6 h-full flex flex-row md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24"
          >
            <div className="w-full  flex flex-col bg-white mt-44">
              <div className="flex flex-row justify-between mb-2 font-semibold">
                <h1 className="mt-44">Classic Monohull Cabin</h1>
              </div>
              <div className="flex flex-col mb-2">
                <h1 className="mt-2" style={{ color: "#838995" }}>
                  From: $1,048/person
                </h1>
                <h1 className="mt-2" style={{ color: "#B2B7C2" }}>
                  Up to 2 guests
                </h1>
                <h1 className="mt-2 text-md" style={{ color: "#838995" }}>
                  Two-person cabin on a Classic Monohull yacht for 6 days,
                  including skipper.
                </h1>
              </div>
              <div className="mt-10 hover:shadow-md">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>What's included?</h1>
                  <FontAwesomeIcon className="text-xl" icon={faNoteSticky} />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>Where do you sleep?</h1>
                  <FontAwesomeIcon className="text-xl" icon={faBed} />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>Are there any extra costs?</h1>
                  <FontAwesomeIcon className="text-xl" icon={faCoins} />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>Who will my crew be?</h1>
                  <FontAwesomeIcon className="text-xl" icon={faPeopleGroup} />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>What yacht will I be sailing on?</h1>
                  <FontAwesomeIcon className="text-xl" icon={faSailboat} />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>Refundable yacht deposit</h1>
                  <FontAwesomeIcon className="text-xl" icon={faCreditCard} />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold">
                  <h1>What airport do I fly into?</h1>
                  <FontAwesomeIcon className="text-xl" icon={faPlane} />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="w-80 h-full flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24 "
          >
            <div className="w-full  flex flex-col bg-white mt-44">
              <div className="flex flex-col justify-between mb-2 font-semibold">
                <h1>Croatia - Original Route</h1>
                <h1 style={{ color: "#B8BDC7" }} className="text-sm mt-2">
                  3 mar - 13 mar 2023
                </h1>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-xl mt-4">$1,086/person</h1>
                <h1
                  style={{ color: "#B8BDC7" }}
                  className="font-semibold text-sm mt-2"
                >
                  Based on 2 guests
                </h1>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-xl mt-4">Cost breakdown</h1>
                <div className="flex flex-row justify-between font-semibold text-sm mt-2">
                  <h1 className="font-semibold text-sm">Cabin rental</h1>
                  <h1 className="font-semibold text-sm">$2,172</h1>
                </div>
                <div className="flex flex-row justify-between mt-2">
                  <h1 className="font-semibold text-sm">Skipper</h1>
                  <FontAwesomeIcon
                    className=""
                    style={{ color: "#45DB5D" }}
                    icon={faCheck}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <h1 className="font-semibold text-xl mt-4">Total</h1>
                <h1 className="font-semibold text-xl mt-4">$2,172</h1>
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-lg mt-4">1 cabin selected</h1>
                <div
                  style={{ color: "#B7BCC6" }}
                  className="flex flex-row justify-between font-semibold text-sm mt-2"
                >
                  <h1 className="font-semibold text-sm">Girls</h1>
                  <h1 className="font-semibold text-sm">1</h1>
                </div>
                <div
                  style={{ color: "#B7BCC6" }}
                  className="flex flex-row justify-between font-semibold text-sm mt-2"
                >
                  <h1 className="font-semibold text-sm">Boys</h1>
                  <h1 className="font-semibold text-sm">1</h1>
                </div>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-lg mt-4">Flexibility</h1>
                <div className="flex flex-row justify-between font-semibold text-sm mt-2">
                  <h1 className="font-semibold text-sm">
                    Free 24 hour cancellation
                  </h1>
                  <FontAwesomeIcon
                    className=""
                    style={{ color: "#45DB5D" }}
                    icon={faCheck}
                  />
                </div>
                <div className="flex flex-row justify-between font-semibold text-sm mt-2">
                  <h1 className="font-semibold text-sm">Split with friends</h1>
                  <FontAwesomeIcon
                    className=""
                    style={{ color: "#45DB5D" }}
                    icon={faCheck}
                  />
                </div>
              </div>
              <button
                style={{ fontFamily: "sofia", backgroundColor: "#45DB5D" }}
                className="w-full h-10 mt-10 p-1/2 rounded-lg buttons"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedScreen;
