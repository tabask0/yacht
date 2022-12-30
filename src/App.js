/* eslint-disable react/style-prop-object */
import "./index.css";
import { useState } from "react";
import Navigation from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Crew from "./components/Crew";
import SailItem from "./components/SailItem";
import Confirm from "./components/Confirm";

function App() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    week: "",
    crew: "",
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
        <div>
          <Booking
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <Crew
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <Confirm values={formData} />
        </div>
      );
    default:
      return <div></div>;
  }
}

export default App;
