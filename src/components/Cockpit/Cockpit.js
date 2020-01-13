import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null); // We can pass an initial value here as parameters as it not only supports creating refs to dom Elements.
    //toggleBtnRef.current.click();  // we get error here as toggleBtnRef is not assigned to button before returning the jsx but we are trying to click the button

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();  // useEffect() runs after return() of jsx for 1st time.
        return () => {
            console.log('[Cockpit.js] cleanup Work in useEffect');
        };
    }, []);   // [props.persons, b, c] the array contains all variables, to which useEffect() executes if they change, 
  // [] empty array if we want to execute useEffect() on page load once. Equivalent of componentDidMount() only.


    //  useEffect()       Different events or functions in different useEffect() calls.
    useEffect(() => {   
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup Work in 2nd useEffect');   // this useEffect() is useful to cancel some operation whenever the component is re-rendered.
        };
    })

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {  // Received personsLength instead of persons as props.
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>       
    );
};

export default React.memo(cockpit);
// The above export is an alternative to shouldComponentUpdate() in functional components which renders the component
// "cockpit" if it's props changes. Basically, it keeps a previous snapshot and compares to whether to re-render the component or not.