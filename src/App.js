import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/sara-touaiti-0350841b4/"
            target="blank"
          >
            Sara Touaiti
          </a>{" "}
          and is open-sourced on{" "}
          <a href="https://github.com/SarahTouaiti" target="blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
