import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Nav_bar";
import Home from "./Components/Home_menu";
import About from "./Components/About_menu";
import Contact from "./Components/Contact_menu";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
