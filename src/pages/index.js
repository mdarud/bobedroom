import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Code from "./projects/Code";
import Design from "./projects/Design";
import Music from "./projects/Music";

const NotFound = () => (
  <div>
    <h1>No match</h1>
  </div>
);

var Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/design" element={<Design />} />
        <Route path="/music" element={<Music />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Pages;
