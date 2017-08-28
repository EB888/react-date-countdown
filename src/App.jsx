import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline(){
    // this.setState({deadline: 'August 29, 2017'})
    // Never mutate or change state directly
    // console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline className="Deadline-input">
          <FormControl
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>

      </div>
    )
  }
}

export default App;
