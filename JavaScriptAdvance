//String Interpolation

let nam = "Sidra";
console.log(nam.length);
let sen = "Sidra is good at JavaScript";
let full = `${nam} is a React Developer ${sen}`;
console.log(full);

function country(name, capital, curr) {
  return `My  Favourite country is ${name}. The capital of ${name} is ${capital} and its currency is ${curr}`;
}
console.log(country("India", "New Delhi", "Rupees"));

//IMMUTABLE NATURE OF JAVASCRIPT STRINGS:
//JavaScript Strings are immutable since once a string is created it will receive a reference in the memory and its value will never change. This means that any operation on a string may give the new string without mutating the main string.
let b = "PineApple";
b[0] = "o"; // This is not possible because of the immutable nature of Javascript.
console.log(b);
let text = "Apple, Banana, Kiwi";
console.log(text);
console.log(text.slice(7, 13));
console.log(text.slice(8));
console.log(text.substr(7, 5));
console.log(full);
console.log(full.replace("React", "MERN"));
console.log(full);
let name2 = "Alvirahs";
console.log(name2.length);
var n = "Sidra";
console.log(n);
// var n = " Arslan";
// console.log(n);
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
}
let rs = "Please give me Rs. 10000";
console.log(rs.slice(19));
console.log(rs.includes("1000"));
console.log(rs.startsWith("Please"));
console.log(rs.endsWith(0));
//Arrays are mutable objects.
var arr = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "f", "f"];
console.log(...new Set(arr));
delete arr[0];
delete arr[4];
console.log(arr.pop());
console.log(arr.shift());
console.log(arr, arr.length);
console.log(arr.reverse());
let ar = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "f", "f"];
console.log(ar.splice(3, 5, "s", "i"));
console.log(ar);
let sliced = ar.slice(3, 5);
console.log(sliced);

//Sets.A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.A Set can hold any value of any data type.
const mySet = new Set();
console.log("This is my first set", mySet);
mySet.add("This");
mySet.add("is");
mySet.add("Sidra");
mySet.add(null);
mySet.add(undefined);
mySet.add(false);
console.log(mySet);
let mySet2 = new Set([1, 45, "this", { x: 4, y: 8 }]);
console.log("This is mySet2 ", mySet2);
mySet2.delete("this");
console.log(mySet2);
console.log(mySet2.has("this"));
for (let item of mySet2) {
  console.log(item);
}
mySet2.forEach((item) => {
  console.log(item);
});
let arr5 = Array.from(mySet2);
console.log(arr5);

//Symbols:
//Creates a new Symbol object. It is not a constructor in the traditional sense, because it can only be called as a function, instead of being constructed with new Symbol().
//Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding. Symbols are ignored in for-in loops. In JSON.stringify(), symbols are ignored. Generates a new primitive.
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 == symbol2);
let obj = {};
let k1 = Symbol("key1");
let k2 = Symbol("Key2");
obj[k1] = "Value1";
obj[k2] = "Value2";
obj["k3"] = "Value3";
console.log(obj);
console.log(JSON.stringify(obj)); //Ignores Sybols
for (let item in obj) {
  console.log(item, obj[item]);
}

//Destructuring in JS
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let f, g;
[f, g] = [11, 22];
console.log(f, g);
[f, g, h, i, j, ...k] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //all the elementsafter 6 are assigned to k as an array
console.log(f, g, h, i, j, k);
({ t, j, ...l } = { t: 23, j: 32, l: 4, x: 56, z: 87, o: 90 }); //Rest operator should be placed duting assignment
console.log(t, j, l);
//Array Destructring
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
[a, b, ...rest] = fruits;
console.log(a, b, rest);
let asd = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "a", "b", "c", "d"];
console.log(new Set(asd));
//Object destructuring
const city = {
  co: "Singapore",
  capital: "Singapor",
  currency: "Singapore Dollar",
  population: 5612300,
  start: function () {
    console.log("started");
  },
};
const { co, capital, currency, ...r } = city;
console.log(co, capital, currency, r);

//MAP METHOD. map is an array method that runs an operation on each element of the array and returnes a new array.
let ab = [10, 20, 30, 40, 50, 60, 70, 80];
let ab2 = ab.map((value) => {
  value = value + 1;
  console.log(value);
});

//FILTER METHOD. Filter method filters an arryay based on a condition. If an element satisfyies the condition it gets pushed int he new array. If it does not satisfy the condition it does not get pushed in the new array. Takes minimum 1 arguemnt i.e. Current value and maximum 3 args value, element and index.
let bd = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let bd2 = bd.filter((value) => {
  return value % 2 == 0;
});
console.log(bd2);

let gh = [2, 4, 6, 8, 10, 12, 1, 41, 5, 16, , 1, 20, 300];
let gh2 = gh.filter((value) => {
  return value > 10;
});
console.log(gh2);

//REDUCE METHOD. Reduce method reduces an array down to one value by applying an operation to each element of the array. It returnes a single value. Takes minimum 2 arguments. 1. Retured value in the previous iteration 2. Current item in the array.
let fj = [
  90, 45, 33, 66, 78, 94, 52, 31, 16, 42, 57, 98, 63, 25, 41, 55, 88, 47, 14,
  25, 35,
];
let fj2 = fj.reduce((value, item) => {
  return value - item;
});
console.log(fj2);

let yu = [
  90, 45, 33, 66, 78, 94, 52, 31, 16, 42, 57, 98, 63, 25, 41, 55, 88, 47, 14,
  25, 35,
];
let yu2 = yu.reduce(function (y, u) {
  return y + u;
});
console.log(yu2);

//VAR. Is globally scoped. The value of var can be  updated and redeclared. It is initialised as undefined by default and can be used withut initialisation.
var ao;
console.log(ao);
{
  var ao = "World";
}
console.log(ao);

//LET. Let is block scoped. Its value can be udated but not redeclared. It can be declared without initialisation
let we = "LET";
console.log(we);
{
  let we = "GET";
  console.log(we);
}
console.log(we);
//CONST is block scoped. Its value cant be changed or redeclared. It MUST be initialised during declaraion.
const er = "red";
//er= "pink";
//const er = "black";
{
  const er = "blue";
  console.log(er);
}
console.log(er);

const objec = {
  red: "RED",
  blue: "BLUE",
};
console.log(objec);
objec.green = "GREEN";
console.log(objec);

//HOISTING. IN JavaScript functions and variable declarations are brought to the top of their containing scope before execution.
//IN the case of VAR
console.log(dk); //undefined
var dk = "HOISTING in JS";
console.log(dk); //HOISTING IN JS
//HOISTING in the case of LET. the scope of let is block scoped. It can be re initialised but not re declared. Let variables can be declared without initilisation.
console.log(th);
th = "HOISTING WITH LET ";
console.log(th); //HOISTING WITH LET
var th;
glh();
function glh() {
  console.log("You are inside GH function");
}
//CLosures. Has same behaviour in let var and const.
const sum = function (a) {
  //anonymus function
  console.log("The sum is", a);
  const c = 7;
  return function (b) {
    console.log(a + b + c);
  };
};
const store = sum(5);
store(6);

//lexical scope is the ability of a function scope to access variables of its parent scope.
//Closures A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
const s = function (a, b, c) {
  return {
    getsum1: function getsum1() {
      console.log(a, b, c);
    },
    getsum2: function getsum2() {
      console.log(a, b);
    },
  };
};
const st = s(1, 2, 3);
st.getsum1();
st.getsum2();

//ENUMs. ENUM is a collection of constatnt
const GAME_STATE = Object.freeze({
  STARTED: "Game Started",
  PAUSED: "Game Paused",
  STOPPED: "Game Stopped",
});
console.log(GAME_STATE.STARTED);
console.log(GAME_STATE.PAUSED);
console.log(GAME_STATE.STOPPED);
GAME_STATE.RESUMED = "Game Resumed";
console.log(GAME_STATE);

(function dbConnect() {
  //named IIFE
  console.log("DATABASE connection has been established.");
})();

((i) => {
  console.log("The value of i is", i);
})(5);

function you() {
  let u = 10;
  return function y() {
    console.log(u + 10);
  };
}
let stl = you();
stl();

//JAVASCRIPT CALLBACKS.

function display(val) {
  console.log(val);
}
function epr(a, b, display) {
  display(a + b);
}
epr(5, 6, display);

const alr = [3, 5, 7];
alr.foo = "hello";
for (let i in alr) {
  console.log(i);
}
for (let i of alr) {
  console.log(i);
}

// let pm;
// for (pm = 0; pm < 3; pm++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }
let nine;
console.log(ten, nine);
var ten = 10;
nine = 9;

console.log("SETTIMEOUTFUNCTION")
console.log(1);
setTimeout(function(){
  console.log(2);
},1000);
setTimeout(function(){
  console.log(3);
},0);
console.log(4);

//JavaScript Strings Palindrome
var str = "AFIFA";

function palindrome(str){
  var rev = str.split("").reverse().join("");
  if(str == rev){
    console.log("This is a palindrome");
  }
  else{
    console.log("False");
  }
}
palindrome(str);

//React is a free and open-source front-end JavaScript library for building user interfaces based on components. 

//SHALLOW Copy: 
