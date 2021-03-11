import React from "react";
import "./style.css";
import TestFunctionalComp from "./TestFunctionalComp.js"
import TestClassComp from "./TestClassComp.js"

export default function App() {
  return (
    <div>
      <h1>Hello Every one!</h1>

      <h2>Class component</h2>
      <TestClassComp />
      <h2>Functional component</h2>
      <TestFunctionalComp />
    </div>
  );
}
