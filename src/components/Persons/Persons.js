import React from 'react';
import Person from './Person/Person'

// props contains array of persons which we wnat to convert to array of jsx elements.
const persons = (props) => {
    return props.persons.map((person, index) => <Person name={person.name} 
    age= {person.age} 
    click = {() => props.clicked(index)}
    changed = {(event) => props.changed(event, person.id)} 
    key = {person.id} />);
}

export default persons;