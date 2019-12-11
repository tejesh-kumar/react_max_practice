import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "tejesh", age: 24},
      {name: "Madhu", age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person name = {person.name} age = {person.age} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, from react App</h1>
        <p>This is working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works now'));
  }
}

export default App;
