# JavaScript
Contains all [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), ModernJS and DOM Manipulation projects.

### Table of Contents
- Callback Functions
- Closures
- Debouncing
- HOF
- IIFE
- ES6 Features

Callback Function:

A callback function is a function passed as an argument to another function, which is then invoked inside the outer function. It allows asynchronous operations, event handling, and modularization of code.

Closures:

Closures are functions that "close over" variables from their outer (enclosing) scope, preserving access to those variables even after the outer function has finished executing. They provide a way to create private variables and maintain state.

Debouncing:

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making them more efficient. In JavaScript, it is often applied to functions that respond to events (like scrolling or resizing). Debouncing prevents the function from being called too frequently, optimizing performance by delaying its execution until after a specific time interval has passed since the last invocation.

Higher-Order Functions:

Higher-Order Functions (HOFs) are functions that take other functions as arguments or return functions as results.
HOFs allow passing functions as parameters, enabling dynamic behavior and code flexibility.
HOFs can return functions, creating closures and encapsulating state within the returned functions.
map, filter, and reduce are common higher-order functions in JavaScript.

Immediately Invoked Function Expressions (IIFE):

IIFE is a JavaScript design pattern where a function is defined and executed immediately after its creation.
IIFE provides a way to create a private scope for variables, avoiding polluting the global namespace.
Often used to encapsulate code, create private variables, and prevent variable hoisting issues.

ES6 Features:

Arrow Functions:
A concise syntax for writing functions, especially useful for short, anonymous functions.
Destructuring Assignment:
Extract values from arrays or objects and assign them to variables in a more concise way.
Template Literals:
A more expressive way to concatenate strings using backticks (`).
Let and Const:
let and const provide block-scoped variable declarations, reducing the reliance on var.
Spread and Rest Operators:
Spread (...) spreads elements of an iterable (e.g., an array), while the rest parameter collects them.
Default Parameters:
Specify default values for function parameters, simplifying function calls.
Object Destructuring:
Extract values from objects and assign them to variables using a concise syntax.
Classes:
Introduces a more familiar syntax for creating objects and inheritance in JavaScript.
Promises:
Provides a cleaner and more robust way to handle asynchronous operations compared to callbacks.
Async/Await:
Simplifies asynchronous code by allowing the use of async functions and await expressions.
