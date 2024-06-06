import React from "react";
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
