import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"dghgsr1", name: "tejesh", age: 24},
      {id:"gdgtdt2", name: "Madhu", age: 25},
      {id:"hcsssax3", name: "Syed", age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(person => personId === person.id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState( {
      persons: persons
     }
    )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //slice() copies the array to persons(const)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              name = {person.name} 
              age = {person.age} 
              click = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.nameChangedHandler(event, person.id)}
              key = {person.id} />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: "black"
      };
    }

    const classes = [];
      if(this.state.persons.length <= 2) {
        classes.push('red');
      }
      if(this.state.persons.length <= 1) {
        classes.push('bold');
      }

    return (
      <div className="App">
        <h1>Hi, from react App</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works now'));
  }
}

export default Radium(App);
