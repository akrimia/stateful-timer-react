import React from "react";
import ReactDOM from "react-dom";
import Timecont from "./timecont";
import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <Timecont />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
