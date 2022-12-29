import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Aboutus from "./pages/Aboutus";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
