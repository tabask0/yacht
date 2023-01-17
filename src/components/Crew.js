import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { boats, boatSize } from "../assets/sails";
import Boat from "./Boat";
import BoatSize from "./BoatSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Crew = ({ week, values, nextStep, prevStep, handleFormData }) => {
  const [selectedBoat, setSelectedBoat] = useState(false);
  const [selectedBoatName, setSelectedBoatName] = useState("");
  const [selectedBoatSize, setSelectedBoatSize] = useState(null);
  const [cabinSize, setCabinSize] = useState({
    boysCabin: 0,
    girlsCabin: 0,
    mixedCabin: 0,
    basePrice: values.week.person * 2,
    total: null,
  });
  const yachtSize = {
    boysCabin: 5,
    girlsCabin: 5,
    skipper: 1,
    basePrice: values.week.person,
    total: values.week.full,
  };

  const formatPrice = (price) => {
    const str = JSON.stringify(price);
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const submitFirst = () => {
    handleFormData("fullYacht", selectedBoatSize === "Cabins" ? false : true);
    handleFormData("boat", selectedBoatName);
    handleFormData(
      "cabin",
      selectedBoatSize === "Cabins" ? cabinSize : yachtSize
    );
  };

  const formatDate = (date) => {
    const newDate = date && date.split(" ");
    return `${newDate[0]} - ${newDate[1]}`;
  };

  return (
    <div className="flex flex-col justify-center md:justify-start">
      <Navbar />
      <div className="flex flex-col justify-center mt-24 text-center">
        <div className="flex flex-row justify-center">
          <span className="p-4 border-b-8 border-gri cursor-pointer">
            Category
          </span>
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            Week
          </span>
          <span className="p-4 border-b-8 border-albastru">Boat</span>
          <span className="p-4 border-b-8 border-gri">Confirm</span>
        </div>
        <button
          onClick={() => prevStep()}
          className="w-16 mx-auto mt-10 text-alb rounded bg-albastru"
        >
          Back
        </button>
      </div>
      <div className="text-center mt-24">
        <div className="flex flex-row justify-center m-2 flex-wrap">
          You are sailing in
          <b className="mr-2 ml-2"> Croatia 🇭🇷</b> on{" "}
          <p className="mr-2 ml-2 font-bold flex flex-row">
            {formatDate(values.week.start + " " + values.week.end)}
          </p>
          with a <p className="font-bold mr-2 ml-2">{values.category}</p>{" "}
          <p>package</p>
        </div>{" "}
      </div>
      {selectedBoat === false && (
        <div className="w-full h-full flex flex-row lg:mt-4 justify-center flex-wrap mx-auto mb-12">
          {boats.map((boat, index) => (
            <Boat
              selectedBoatName={selectedBoatName}
              setSelectedBoatName={setSelectedBoatName}
              setSelectedBoat={setSelectedBoat}
              key={index}
              boat={boat}
              values={values}
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleFormData}
              formatPrice={formatPrice}
            />
          ))}
        </div>
      )}
      {selectedBoat === true && selectedBoatSize === null && (
        <div className="w-full h-full flex lg:mt-4 justify-center flex-wrap mb-10">
          {boatSize.map((boats) => (
            <BoatSize
              values={values}
              key={boats.id}
              boats={boats}
              setSelectedBoatSize={setSelectedBoatSize}
              submitFirst={submitFirst}
            />
          ))}
        </div>
      )}
      {selectedBoatSize === "Cabins" ? (
        <div className="w-full lg:w-1/3 h-full flex flex-row lg:mt-4 mx-auto justify-center">
          <div
            style={{ backgroundColor: "white" }}
            className="w-full h-full flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24 mb-12"
          >
            <div className="w-full flex flex-col bg-white p-2">
              <h1 className="font-bold h-10 text-3xl">Cabins</h1>
              <h1
                className="font-bold mb-2 text-xl"
                style={{ color: "#B2B7C2" }}
              >
                Add a crew
              </h1>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-semibold">2 Boy cabin</h1>
                    <p style={{ color: "#2E90FF" }}>You and friend</p>
                    <p style={{ color: "#333333" }}>
                      {formatPrice(values.week.person)}€/person
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin:
                          cabinSize.boysCabin === 0
                            ? 0
                            : cabinSize.boysCabin - 1,
                        total:
                          cabinSize.total === null
                            ? 0
                            : cabinSize.total > 0
                            ? cabinSize.total - values.week.person
                            : 0,
                      })
                    }
                    className="mr-3  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faMinus}
                  />
                  <h1 className="w-4 mx-2 font-bold">{cabinSize.boysCabin}</h1>
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        boysCabin: cabinSize.boysCabin + 1,
                        total:
                          cabinSize.total === null
                            ? values.week.person
                            : cabinSize.total + values.week.person,
                      })
                    }
                    className="ml-2  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faPlus}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-semibold">2 Mixed cabin</h1>
                    <p style={{ color: "#2E90FF" }}>You and friend</p>
                    <p style={{ color: "#333333" }}>
                      {formatPrice(values.week.person)}€/person
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        mixedCabin:
                          cabinSize.mixedCabin === 0
                            ? 0
                            : cabinSize.mixedCabin - 1,
                        total:
                          cabinSize.total === null
                            ? 0
                            : cabinSize.total > 0
                            ? cabinSize.total - values.week.person
                            : 0,
                      })
                    }
                    className="mr-3  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faMinus}
                  />
                  <h1 className="w-4 mx-2 font-bold">{cabinSize.mixedCabin}</h1>
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        mixedCabin: cabinSize.mixedCabin + 1,
                        total:
                          cabinSize.total === null
                            ? values.week.person
                            : cabinSize.total + values.week.person,
                      })
                    }
                    className="ml-2  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faPlus}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-semibold">2 Girl cabin</h1>
                    <p style={{ color: "#2E90FF" }}>You and friend</p>
                    <p style={{ color: "#333333" }}>
                      {formatPrice(values.week.person)}€/person
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        girlsCabin:
                          cabinSize.girlsCabin === 0
                            ? 0
                            : cabinSize.girlsCabin - 1,
                        total:
                          cabinSize.total === null
                            ? 0
                            : cabinSize.total > 0
                            ? cabinSize.total - values.week.person
                            : 0,
                      })
                    }
                    className="mr-3  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faMinus}
                  />
                  <h1 className="w-4 mx-2 font-bold">{cabinSize.girlsCabin}</h1>
                  <FontAwesomeIcon
                    onClick={() =>
                      setCabinSize({
                        ...cabinSize,
                        girlsCabin: cabinSize.girlsCabin + 1,
                        total:
                          cabinSize.total === null
                            ? values.week.person
                            : cabinSize.total + values.week.person,
                      })
                    }
                    className="ml-2  p-1 rounded-lg cursor-pointer cabinsInput"
                    icon={faPlus}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    style={{ visibility: "hidden" }}
                    className="text-2xl mr-4 mt-2"
                    icon={faUsers}
                  />
                  <div>
                    <h1 className="font-bold text-xl">Total:</h1>
                    <h1 className="font-bold text-xl">
                      €
                      {cabinSize.total !== null
                        ? formatPrice(cabinSize.total)
                        : "0"}
                    </h1>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  submitFirst();
                  nextStep();
                }}
                style={{ fontFamily: "sofia" }}
                className="w-full h-10 mt-10 p-1/2 rounded buttons"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : (
        selectedBoatSize === "Full Yacht" && nextStep()
      )}
    </div>
  );
};

export default Crew;
