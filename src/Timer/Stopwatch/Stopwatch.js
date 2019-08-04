import React from "react";

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false, //if the stopwatch is off or on
            timerStart: 0,  //starting point of timer in ms
            timerTime: 0    //the current time value of stopwatch
        };
    }

    startTimer = () => {                                        //start the timer
        const { timerTime } = this.state
        this.setState({                                         
            timerOn:true,                                      //flagged to true, as timer has been started
            timerStart: Date.now() - this.state.timerTime,     //if started fresh, subtracting from Date.now() makes no difference, if pausesd, and restarted new baseline is calculated
            timerTime                                          //start the timer at the specified starting point
        })

        this.timer = setInterval( () => {                      //every 10 milliseconds update the timer time
            this.setState({
                timerTime: Date.now() - this.state.timerStart  //difference in starting time and current time gives elapsed time
            });
        }, 10)
    }

    stopTimer = () => {
        this.setState({ timerOn: false });                      //timer is off
        clearInterval(this.timer);                              //stop counting
      };

      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
      };



    render() {
        const { timerTime } = this.state;
        let hours = (
            "0" + 
            Math.floor(timerTime / 3600000) // total time in hours 
            ).slice(-2)                     // only take the last 2 numbers
        let minutes = (
            "0" +
            (
                Math.floor(timerTime / 60000) // total time in minutes
                % 60                          // divide the hours, take the remaining minutes
            )).slice(-2);                     // only take the last 2 numbers
        // same idea for below, we get hours, minutes, seconds, centiseconds, to 2 points percision
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);

        return (
        <div className="Stopwatch">
            <div className="Stopwatch-header">Stopwatch</div>
            <div className="Stopwatch-Display">
                {hours} : {minutes} : {seconds} : {centiseconds}
            </div>
            
            {/* below conditionally renders buttons based on the stopwatches state */}
            {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button onClick={this.startTimer}>Start</button>
            )}
            {this.state.timerOn === true && (
                <button onClick={this.stopTimer}>Stop</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.startTimer}>Resume</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.resetTimer}>Reset</button>
            )}
        </div>
        );
    }
}
export default Stopwatch;