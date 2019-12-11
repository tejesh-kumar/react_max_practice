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

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
      {name: newName, age: 24},
      {name: "Madhu", age: 26}
      ]
     }
    )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
      {name: event.target.value, age: 24},
      {name: "Madhu", age: 26}
      ]
     }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, from react App</h1>
        <p>This is working</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("tejesh kumar!!")}>Switch name</button>
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, "tejesh!")}
        changed={this.nameChangedHandler}>My hobby: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works now'));
  }
}

export default App;
