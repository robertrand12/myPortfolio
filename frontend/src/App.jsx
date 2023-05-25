import "./App.css";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import MyWorks from "./pages/MyWorks";
import Contact from "./pages/Contact";
import Home from "./pages/Homes";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/myworks" element={<MyWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
