import React from "react";
import "./index.css";
import { useState } from "react";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Crew from "./components/Crew";
import Confirm from "./components/Confirm";

import ConfirmedScreen from "./components/ConfirmedScreen";
import SailType from "./components/SailType";
import BoatSize from "./components/BoatSize";
import BoatCabins from "./components/BoatCabins";

const Home = () => {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    week: "",
    category: "",
    sailType: "",
    boat: "",
    cabin: null,
    fullYacht: null,
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (input, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <div style={{ backgroundColor: "#F3F6F5", minHeight: "100vh" }}>
          <SailType
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div style={{ backgroundColor: "#F3F6F5", minHeight: "100vh" }}>
          <Booking
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div style={{ backgroundColor: "#F3F6F5", minHeight: "100vh" }}>
          <Crew
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 4:
      return (
        <div style={{ backgroundColor: "#F3F6F5", minHeight: "100vh" }}>
          <ConfirmedScreen
            values={formData}
            prevStep={prevStep}
            nextStep={nextStep}
            handleFormData={handleInputData}
          />
        </div>
      );
    default:
      return <div></div>;
  }
};

export default Home;
