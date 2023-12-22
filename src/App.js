import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Classes from "./components/pages/Classes";
import Products from "./components/pages/Products";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Use 'element' instead of 'component' */}
          <Route path="/Classes" element={<Classes />}></Route>{" "}
          <Route path="/Products" element={<Products />}></Route>{" "}
          <Route path="/AboutUs" element={<AboutUs />}></Route>{" "}
          <Route path="/SignUp" element={<SignUp />}></Route>{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
