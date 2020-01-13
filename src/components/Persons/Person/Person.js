import React, { Component, Fragment } from 'react'; 

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';

// const person = (props) => {
//     console.log('[person.js] rendering...');
//         return (
//             <div className = {classes.Person}>
//                 <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
//                 <p>{props.children}</p>
//                 <input type="text" onChange={props.changed} value={props.name} />
//             </div> 
//         );
// }


class Person extends Component {
    static getDerivedStateFromProps (state, props) {
        console.log('[getDerivedStateFromProps]', state);
        return state;
    }

    render() {
        console.log('[person.js] rendering...');
        return (
            // <div className = {classes.Person}>
            // <Aux> 
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
            // </Aux> // these aux tag does not create another jsx element but gives provision to return adjacent jsx elements.
            // </div> 
        );
    }  
}

export default Person;