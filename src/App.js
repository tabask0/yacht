/* eslint-disable react/style-prop-object */
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/GY/test" element={<Home />} />
        <Route path="/GY/test/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
