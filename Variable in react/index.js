import React from "react";
import ReactDOM from 'react-dom';
const name = "vaibhav"
const age = 22;
// how we can variable in jsx
// we can also use expression in curly bracket

ReactDOM.render(<h1>Hello I'm {name} my age is {age}</h1>, document.getElementById("root"));

//we also use template literal here

//ReactDOM.render(<h1>{`Hello I'm ${name} my age is ${age}`}</h1>, document.getElementById("root"));
