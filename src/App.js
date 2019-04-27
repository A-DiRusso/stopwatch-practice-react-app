import React from 'react';
import './App.css';
import ElapsedTime from './ElapsedTime';
import Start from './Start';
import Stop from './Stop';
import Reset from './Reset';
import ClockSecondHand from './ClockSecondHand';
import ClockMinuteHand from './ClockMinuteHand';
import ClockHourHand from './ClockHourHand';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    const secDeg = 90;
    const styles = {
      transform: `rotate(${secDeg}deg)`
    };

    return (
      <div className="App">
        <header>
          <div className="clock">
            <div className="clockback">
              <ClockHourHand hours={this.state.hours} />
              <ClockMinuteHand minutes={this.state.minutes} />
              <ClockSecondHand seconds={this.state.seconds} />
            </div>
          </div>
        </header>
        <header className="App-header">
          <ElapsedTime sessionElapsedTime={this.state.sessionElapsedTime} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
          <Start handler={this._startButton} />
          <Stop handler={this._stopButton} />
          <Reset handler={this._resetButton} />
        </header>
      </div>
    );
  }
  _startButton = () => {
    this.setState({
      startTime: this.state.totalElapsedTime,
      sessionElapsedTime: 0,
      stopWatchOn: true,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }
  _stopButton = () => {
    this.setState({
      startTime: 0,
      stopWatchOn: false
    })
  }
  _resetButton = () => {
    this.setState({
      startTime: 0,
      sessionElapsedTime: 0,
      stopWatchOn: false,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }
}


export default App;
