import React from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard";
import Navbar from "./components/Navbar";
import Allinput from "./components/Allinput";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Allinput />
      <KeyBoard />
    </div>
  );
}

export default App;
