import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavbarComponent from "./components/NavbarComponent";
import React from "react";
import Home from "./components/Home";

function App() {
  // check at page load if a user is authenticated

  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
