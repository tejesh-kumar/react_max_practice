import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
    }, [props.persons]);   // [a, b, c] the array contains all variables, to which useEffect() executes if they change, 
  // [] empty array if we want to execute useEffect() on page load once. Equivalent of componentDidMount() only.


    //  useEffect()       Different events or functions in different useEffect() calls.

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>       
    );
};

export default cockpit;