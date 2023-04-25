import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        
        | Developed by{" "}
        <span>
          Sameer Shaik
        </span>{" "}
        | For Alcovex Product Studio |
       
      </div>
    </React.Fragment>
  );
}

export default App;
