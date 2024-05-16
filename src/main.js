import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import App from "./App";
import FormComponent from "./component/form";

export default function Main() {
  return (
    <Router>
      <div className="navbar" style={{
        display:'flex',
        gap:'20px'
      }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<FormComponent />} />
      </Routes>
    </Router>
  );
}
