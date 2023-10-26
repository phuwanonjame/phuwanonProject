import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bar from "./component/bar";
import Home from "./component/home";
import Footer from "./component/footer";
import "./component/component.css"
import Shop from "./component/shop";
import Footwear from "./component/footwear";



function App() {
  return (
    <Router>
      <div className="container">
        <Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Footwear" element={<Footwear />} />


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
