import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);       //executes constructor of 'Component' so that it is properly initialized
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id:"dghgsr1", name: "tejesh", age: 24},
      {id:"gdgtdt2", name: "Madhu", age: 25},
      {id:"hcsssax3", name: "Syed", age: 25}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {  // do: update internal state when props change, very rarely used, don't: http requests 
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {    // do: http-requests,  don't: state change in synchronously causes rendering again and again and performance reduces.
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(person => personId === person.id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    persons[personIndex] = person;
    // this.setState( {
    //   persons: persons
    //  }

     this.setState((prevState, props) => {
        return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1
         }
     })
    // )
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
    console.log('[App.js render]')
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
              persons={this.state.persons} 
              clicked={this.deletePersonHandler} 
              changed={this.nameChangedHandler} />;
    }

    return (
        <Aux>
          <button onClick={() => {
            this.setState({showCockpit: false})}
            }>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
        title = {this.props.title} 
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length}  // Sent personsLength instead of persons as props.
        clicked={this.togglePersonsHandler}/> : null
      }
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'It works now'));
  }
}

export default withClass(App, classes.App);
