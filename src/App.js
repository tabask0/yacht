/* eslint-disable react/style-prop-object */
import "./index.css";
import Navigation from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/GY/test/" element={<Booking />} />
        <Route path="/GY/test/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
