import React from 'react';
import './App.css';
import ElapsedTime from './ElapsedTime';
import Start from './Start';
import Stop from './Stop';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ElapsedTime sessionElapsedTime={this.state.sessionElapsedTime} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
          <Start handler={this._startButton} />
          <Stop handler={this._stopButton} />
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
}


export default App;
