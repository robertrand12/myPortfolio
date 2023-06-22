import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import MyWorks from "./pages/MyWorks";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import SiteDetails from "./pages/SiteDetails";
import Infos from "./components/Infos";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <main>
      <Navbar />
      {window.innerWidth >= 768 ? <Infos /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-works/:id" element={<SiteDetails />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
