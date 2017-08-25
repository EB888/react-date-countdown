import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadline(){
    this.setState({deadline: 'August 29, 2017'})
    // Never mutate or change state directly
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className='Clock-days'>Days</div>
          <div className='Clock-hours'>Hours</div>
          <div className='Clock-minutes'>Minutes</div>
          <div className='Clock-seconds'>Seconds</div>
        </div>
        <div>
          <input placeholder='new date'/>
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>

      </div>
    )
  }
}

export default App;
