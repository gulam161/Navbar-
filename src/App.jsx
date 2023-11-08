import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";

function CommonContent({ title }) {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <h1> Developer Gulam {title}</h1>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonContent />} />
        <Route path="/about" element={<CommonContent title="About Page" />} />
        <Route
          path="/service"
          element={<CommonContent title="Service Page" />}
        />
        <Route
          path="/contact"
          element={<CommonContent title="Contact Page" />}
        />
      </Routes>
    </>
  );
}

export default App;
