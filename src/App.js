/* eslint-disable react/style-prop-object */
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Payment from "./components/Payment";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/GY/test" element={<Home />} />
        <Route path="/GY/test/contact" element={<Contact />} />
        <Route path="/GY/test/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
