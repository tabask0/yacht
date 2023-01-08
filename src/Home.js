import React from "react";
import "./index.css";
import { useState } from "react";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Crew from "./components/Crew";
import Confirm from "./components/Confirm";
import CheckoutForm from "./components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Outlet, Link } from "react-router-dom";
import ConfirmedScreen from "./components/ConfirmedScreen";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

const Home = () => {
  const [step, setstep] = useState(1);
  const options = {
    clientSecret: `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
  };

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
          <Link to="/GY/test">
            <Booking
              nextStep={nextStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Link>
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
          <Confirm
            values={formData}
            prevStep={prevStep}
            nextStep={nextStep}
            handleFormData={handleInputData}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <ConfirmedScreen values={formData} />
        </div>
      );

    default:
      return <div></div>;
  }
};

export default Home;
