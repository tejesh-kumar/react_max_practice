import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "tejesh", age: 24},
      {name: "Madhu", age: 25}
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
      {name: "tejesh kumar", age: 24},
      {name: "Madhu", age: 26}
      ]
     }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, from react App</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}>My hobby: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works now'));
  }
}

export default App;
