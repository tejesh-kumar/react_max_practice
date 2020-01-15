import React, { Component, Fragment } from 'react'; 
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

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
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef(); //can be used from react v16.3 onwards and is a modern approach.
    }

    static contextType = AuthContext;  // React v16.6, it allows react to connect class based components to the context behind the scene.

    static getDerivedStateFromProps (state, props) {
        console.log('[getDerivedStateFromProps]', state);
        return state;
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();  // current is required to access current reference to input field.
        console.log(this.context.authenticated); // static contextType allows to use context outside jsx return.
    }

    render() {
        console.log('[person.js] rendering...');
        return (
            // <div className = {classes.Person}>
            // <Fragment>
            <Aux> 
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Autheticated!</p> : <p>Please login to continue</p>}
                </AuthContext.Consumer> */}
                    {this.context.authenticated ? <p>Autheticated!</p> : <p>Please login to continue</p>}
                <p onClick = {this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" 
                // ref={(inputEl) => {this.inputElement = inputEl}} 
                ref={this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux> // these aux tag does not create another jsx element but gives provision to return adjacent jsx elements. */}
             // </Fragment>
            // </div> 
        );
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);