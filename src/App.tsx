import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import Login from "./Components/Login";
import Footer from "../src/nav_footer/Footer_bar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
