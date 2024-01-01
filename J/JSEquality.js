// Loose Equality and Strict equality in JS
console.log(0.1 + 0.2 == 0.3);
console.log("true" == true);
console.log("1" == 1);
console.log(undefined === null);
console.log(NaN === NaN);

//Object.keys returnes the keys of an object in ascending order
let x = { b: 1, c: 2 };
let y = Object.keys(x);
console.log(y.length);

let a = { 40: "fourty", 30: "thirty", 20: "twenty" };
console.log(a);
let b = Object.keys(a); // Returnes in ascending order
console.log(b);

//A common use of JSON.parse is to get data from the Web API. Usually the API returnes the value as a string. JSON.parse converts the string returned form a webserver into JavaScript object
let c = ' { "b" : 1, "c" : 2 } ';
let d = JSON.parse(c);
console.log(d);
console.log(typeof d);

//Boolean function returnes true or false
let e = [];
console.log(Boolean(e));

//Empty
let f = () => {
  console.log(this);
};
f();
console.log(typeof f);

//arguments[] takes tha index of the parameters of a function and returns its value
function g(a, b) {
  console.log(arguments[0]);
}
g(3);

let h = "b";
let i = "a";
console.log(h + i + +i + i);

//+ makes it a number
let j = true + true;
console.log(j);

//Returns octal representation of the number 25
console.log("Two zeros before a number in cosole.log gives the Octal value of that number", 0015);

//Async Await and the use of try catch
function l() {
  let strng = "You are inside the try block of async function k";
  return strng;
}
async function k() {
  try {
    let response = await l();
    console.log(response);
  } catch (error) {
    console.log("An error occured");
  }
}
k();

//Object.freeze() Shallow Freeze - Eg: When you are working with configuration  object that should not be changed, modified, added to or deleted from during runtime.
const m = Object.freeze({
  a: 1,
  b: 2,
  c: 3,
});
console.log(m);
m.a = 4;
console.log(m.a);//You cannot change or update the value of a property in object.freeze
m.d = 4;
console.log(m.d); //This returnes undefined because you cannot add any new property to object.freeze
delete m.a;
console.log(m.a); //You cannot delete inside object.freeze

//Object.freeze() Deep Freeze - To enable deep freeze in a constant obejct that has key value pairs inside its key value pairs nested together you need a helper function that recursively freezes the object and each of its nested object. 
const n = Object.freeze({
  a: 1,
  b:2,
  c: 3,
  d: 4,
  e: { f: 5, g:6},
  h: 7,
});
console.log(n);
n.c = 30; //This will be ignored
console.log(n.c);
n.e.f = 50; //This will be executed and changed.
console.log(n.e.f)

//Object.seal() - Eg: Object.seal is used when you need to modify the existing data like in forms if you want to modify form field data but you dont want to delete or add any data.
const o = Object.seal({
  a:1,
  b:2,
  c:3,
  d:4,
})
o.e = 5; //Addition of new key value pairs will be ignored
console.log(o.e);
delete o.a; //Deletion of existing key value pairs in Object.seal() will be ignored
o.a = 10; 
console.log(o.a); //  This will work because you can update the existing values in Object.seal()
console.log(o.a);

//JavaScript PROMISES
let promise = new Promise( function( resolve, reject ){
  console.log("You are inside a Promise");
  //resolve(2000);
  //reject(0);
} )
console.log("You are outside a Promise");

let promise1 = new Promise( function(resolve, reject){
  setTimeout( () => {
    console.log("You are inside the setTimeout function of promise1");
  }, 1000 );
  resolve(true);
  //reject(true);
} )
promise1.then( () =>
  {
    console.log("If a promise resolves or gets fulfilled you add an action after it. This is a callback function that takes upto two argument. then() is mainly used for promise chaining ");
  });

promise1.catch( (e) => {
  console.log("An error has occured.", e);
})

//ASYNC Function and Promises SIMILARITY
//Async function makes a promise easier to write. Async function returnes a promise. Await function waits for the promise to be fulfilled.
async function p(){
  return "You are inside async function p that returnes a promise";
}
p().then( ()=>{console.log("The promise has been fulfilled/resolved")} )
p().catch( () => {console.log("An Error has occured. The promise has been rejected")} )
function p1(){
  return Promise.resolve("You are inside function p1 that returnes a resolved promise");
}
