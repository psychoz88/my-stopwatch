import React, { Component } from "react";

import Stopwatch from "../main";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="timers">
          <Stopwatch />
        </div>
      </div>
    );
  }
}
