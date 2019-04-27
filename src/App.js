import React from 'react';
import './App.css';
import ElapsedTime from './ElapsedTime';

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
        </header>
      </div>
    );
  }
}


export default App;
