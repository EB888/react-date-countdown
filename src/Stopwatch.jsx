import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: undefined,
      newSeconds: 0,
      endDisplay: ''
    }
  }

  componentWillMount() {
    // this.countdown(this.state.seconds);
  }

  componentDidMount() {
    setInterval(() => this.countdown(this.state.seconds), 1000);
  }

  countdown(seconds) {
    if (seconds > 0) {
      const secondsMinusOne = seconds - 1;
      this.setState({seconds: secondsMinusOne});
    } else if (seconds <= 0 ) {
      this.setState({endDisplay: 'TIMES UP! DING! DING! DING!'})
    }
  }

  changeTimer() {
    this.setState({endDisplay: ''});
    this.setState({seconds: this.state.newSeconds});
  }

  render() {
    return(
      <div>
        <div>
          <p>Enter # of seconds to start timer!</p>
          <div>Seconds Until Doomsday: {this.state.seconds}</div>
          <div>{this.state.endDisplay}</div>
        </div>
        <Form inline>
          <FormControl
            placeholder='new stopwatch time'
            onChange={event => this.setState({newSeconds: event.target.value})}
          />
          <Button onClick={() => this.changeTimer()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Stopwatch;
