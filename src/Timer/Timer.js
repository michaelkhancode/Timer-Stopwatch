import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import "./Timer.css"

class App extends React.Component {
  render() {
    return (
      <div className="Timer">
        <div className="Timer-title">Timers Demo</div>
        <div className="StopwatchWrapper"><Stopwatch /></div>
      </div>
    );
  }
}
export default App;
