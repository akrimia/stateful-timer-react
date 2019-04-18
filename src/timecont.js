import React from "react";
import ReactDOM from "react-dom";
import Convert from "./timerview";
import { Component } from "react";
import "./styles.css";

class Timecont extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      status: false
    };

    setInterval(() => {
      if (this.state.status) {
        this.setState({
          time: this.state.time + 1000
        });
      }
    }, 1000);
  }
  statusChange = () => {
    this.setState({
      status: !this.state.status
    });
  };
  statusreset = () => {
    this.setState({
      time: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Convert time={this.state.time} />

        <div class="btn">
          <button onClick={this.statusChange}>Start/stop</button>
          <button onClick={this.statusreset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Timecont;
