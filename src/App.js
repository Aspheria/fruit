import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FruitComponent from "./pages/component/FruitComponent/FruitComponent";
import Home from "./pages/component/FruitComponent/Home/Home";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<FruitComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
