import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import "./Timer.css"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Timer extends React.Component  {

  render() {
    return (
      <div className="Timer">
        <Paper elevation={5} square style={{width:"250px"}}>
            <Typography align="center" variant="h5" component="h3">
              <Stopwatch />
            </Typography>
        </Paper>
      </div>
    );
  }
}

export default Timer;