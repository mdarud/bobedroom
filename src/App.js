import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedCursor from "./components/cursor";
import Pages from "./pages";
import React from "react";

function App() {
  return (
    <div>
      <AnimatedCursor />
      <Pages />
    </div>
  );
}

export default App;
