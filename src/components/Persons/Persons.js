// import React, { Component } from 'react';
import React, { PureComponent } from 'react';  // PureComponent includes shouldComponentUpdate which checks for all prop changes automatically.
import Person from './Person/Person';

// props contains array of persons which we wnat to convert to array of jsx elements.
// const persons = (props) => {
//     console.log('[Persons.js] rendering...');
//     return props.persons.map((person, index) => <Person name={person.name} 
//     age= {person.age} 
//     click = {() => props.clicked(index)}
//     changed = {(event) => props.changed(event, person.id)} 
//     key = {person.id} />);
// }

// export default persons;

class Persons extends PureComponent {
    // static getDerivedStateFromProps (state, props) {
    //     console.log('Persons.js [getDerivedStateFromProps]', state);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Persons.js [shouldComponentUpdate]');
    //     if(nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('Persons.js [getSnapshotBeforeUpdate]');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('Persons.js [componentDidUpdate]');
        console.log(snapshot);
    }

    componentWillUnmount() {  // To remove some event Listeners of removed DOM elements or functions to be executed just before modifying Dom
        console.log('Persons.js [componentWillUnmount]');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => <Person name = {person.name} 
        age = {person.age} 
        click = {() => this.props.clicked(index)}
        changed = {(event) => this.props.changed(event, person.id)}
        key = {person.id} />);
    }   
}

export default Persons;