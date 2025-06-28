import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Router>
    <div className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="z-10">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
     
    </div>
  </Router>
  );
}

export default App;
