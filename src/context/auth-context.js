import React from 'react'

// context is a globally available javascript object(we decide where it is available). It is an object(number, string, etc) which can be passed between different components without using props.
const authContext = React.createContext({ 
    authenticated: false, 
    login: () => {} });  // login is an empty anonymous function. We are adding this because if we initialize the default value. 

export default authContext;