//Temporal Dead Zone is the time period during the execution of a javascript code in which variables declared with let and const exist but are not accessible and cannot be assined any value.
//During this phase, acccesing or using the variable will give reference error.

// console.log(a);
// let a = 10;

// console.log(b);
// const b = 10;

//The temporal Dead ZOne ends and the varible becomes accessible when the variable is declared and assigned.
let c = 100;
console.log(c);

//Why does temporal dead zone exist?????
//Temporal Dead Zone ensures that variables are used only hwne they have been declared and initialised further ensuring clean code practices and reducing the likelihood of accessing a variable in an undefined or undeclaed state hance preventing bugs.

//Does TDZ apply to var?
//No, TDZ does not apply to var variables. They are hoised to the top of their scope and can be accessed even before declaration

var d;
console.log(d);
d = 10;
var d = 30;
console.log(d);
