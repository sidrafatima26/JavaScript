//The main differnce between rest and spread operator is that rest operator puts rest of the user specified value into a JavaScript array while spread operator expands the iterables into individual elements.
//This is how rest operator works
function restOp(a, b, ...c){
  //"use strict";
 // console.log(typeof(c));
  console.log(a,b,c);
}
restOp("Custard Apple", "Papaya", "Melon", "Grapes", "Strawberry", "Mango");
//This is how spread operator works
function spreadOp(a, b, c){
  console.log(`${a} will ${b} ${c}` );
}
spreadOp(...["Blueberry", "Watermelon", "Fuji Apple"]);

//Things to note:
//1. rest operator will not work in strict mode
//2. The argumnts returned by the rest operator are array like objects not real arrays.

function spreadOp2(){
  let a = ["Apple", "Banana", "Coconut", "Durian", "Elderberry", "Fig", "Guava"];
  let b = ["Hello", ...a, "Bye"];
  console.log(b);
  console.log(typeof(b));
  console.log(typeof(a));
}
spreadOp2();

//Strict Mode inidcates that the code should be executed in strict mode. Strict mode makes it easier to write secure Javascript code. There are certain things you cannot do in strict mode like:
//1. Use an undeclared variable or object
//2. Use delete keyword
//3. Use octal values etc...

let a = [1,2,3,4,5];
function test(b, ...a){
  console.log(a);
}
test(6,7,8,9,10,11);
console.log(a);

var x ;
console.log(x); //Undefined
x=10;
console.log(x);//10

//Ternary operator is a coincise way of writing if else statement in a single line. It take 3 operands 1. condition 2. true value 3. false value separated by ? and :
console.log(x=10?"Same":"not Same");


//To arrange any array in ascending order use object.keys method in JS
let y = [9,4,6,7,8,10,64,1,2,-2,-5,3,1,4,5,7,100,300];
let z = Object.keys(y);
console.log(z);

//setTimeout with var and let
// function abc(){
//   for(let i=0; i<10; i++){
//     setTimeout( () =>{
//       console.log(i);
//     }, i*1000); 
//   }
// }
// abc();
// function abcd(){
//   for(var i=0; i<10; i++){
//     setTimeout( () =>{
//       console.log(i);
//     }, i*1000); 
//   }
// }
// abcd();


let arr = [10,20,30]
let txt = "";
for(let index of arr){
  txt+= index;
}
console.log(txt);

//reverse a string
const str = "random";
console.log(str.split("").sort().join(""));
console.log(str.split("").reverse().join(""));
str2 = "";
for(i=str.length-1; i>=0; i--)
  {
    str2 += str[i];
  }
console.log(str2);

//Fibonacci series
let num1 = 0
let num2 = 1;
let sum = 0;
for(let i=0;i<=10;i++){
  sum = num1+num2;
  num1 = num2;
  num2 = sum;
  console.log(sum);
}

//Why use React 1. React is flexible 2. React has a large community support 3. React is based on components 4. React uses virtual DOM 5. React is written in JSX

//Difference between state and props
//Props is a way to pass data or property from one component to the other. Props are Immutable. Props can not be modified. Props are read only
//State is the data available to use within a component. State is mutable. Sate can be modified. State is both read and write.

//Types of components:
//Functional Components: They are basically JS Functions. 
//Class Components: They are JS classes
