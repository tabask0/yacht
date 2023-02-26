/* eslint-disable react/style-prop-object */
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./Home";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/GY/booking" element={<Home />} />
        <Route path="/GY/booking/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
