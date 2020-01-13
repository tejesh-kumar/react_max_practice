import React from 'react'

// 1st method to create HOC
// This method is useful when changing html, adding styling (like adding classes), etc.
// const withClass = props => (
//     <div className = {props.classes}>
//         {props.children}
//     </div>
// );

// 2nd method to create HOC
// This method is useful when we are trying to add logic(js code) behind the scenes for eg
// (i) Handling errors.
// (ii) Sending some analytics data.
const withClass = (WrappedComponent, className) => {    //Starts with caps letter as it is a reference to other component
    return props => (
        <div className = {className}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClass;