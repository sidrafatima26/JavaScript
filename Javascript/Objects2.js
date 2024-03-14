//How to retrieve value of a string key in an object
//We can use square brakets
let obj1 = { a: 1, b: 2, "this is the key": "this is the value" };
console.log(obj1["this is the key"]);
//Similarly we can delete this also
delete obj1["this is the key"];
console.log(obj1);

//How to add dynamic key and value as a variable in an object
//simply wrap the key inside of square brackets
const property = "firstName";
const value = "Sidra";
let obj2 = {
  [property]: value,
};
console.log(obj2);

//Looping through an object
let obj3 = { a: 1, b: 2, c: 3, d: 4, e: { f: 5, g: 6 } };
for (key in obj3) {
  console.log(key, obj3[key]);
}

//if you add the same key with different value inside the same object then the last key value pair occurance will get picked and only taht will be displayed. All the others will be replced BUT it will be in the same position of the first occurance
let obj4 = {
  a: "one",
  b: "two",
  c: "three",
  a: "zero",
};
console.log(obj4);

//Multiply only the integers in an object by 5

let obj5 = { a: 1, b: 2, c: 3, d: true, e: undefined, f: null, g: 4, h: 5 };
for (key in obj5) {
  if (typeof obj5[key] == "number") console.log(obj5[key] * 5);
}
console.log(obj5);

//Filling empty object with other objects
//In JavaScript, object keys are converted to strings. When you use an object as a key, it gets converted to its string representation.
//So, obj6[obj7] and obj6[obj8] are actually equivalent to obj6["[object Object]"]. Both obj7 and obj8 get converted to the string "[object Object]" because they are being used as keys. Therefore, both assignments are referring to the same property in obj6.
//So, when you log obj6 to the console, you'll see { '[object Object]': 234 }, because the second assignment overwrites the first one.
let obj6 = {};
let obj7 = { a: 1 };
let obj8 = { b: 2 };
obj6[obj7] = 123;
obj6[obj8] = 234;
console.log(obj6);

//Conver an object into a string and then again an object
//JSON.stringify converts an object into a string
let obj9 = { a: 1, b: 2, c: 3 };
let str1 = JSON.stringify(obj9);
console.log(str1);
let obj10 = JSON.parse(str1);
console.log(obj10);

//How are JSON.stringify and JSON.parse useful?
//JSON.stringify() and JSON.parse() are commonly used in the context of local storage to store and retrieve complex data structures such as objects and arrays.
//If you assign an object directly into localStorage.setItem it will convert the object into string forcefully which will result in [Object, object] and will display that as value
//localStorage.setItem('test', str1)

//Destructurig a string. Spread operator is used to spread the
console.log([..."Sidra"]);

//Destructuring an object inside another
const obj11 = {
  a: 1,
  b: 2,
  c: 3,
  d: true,
  e: undefined,
  f: null,
  g: "I am g",
  h: true,
};
const obj12 = { name: "lynja", ...obj11, class: "very old" };
console.log(obj12);

//Stringifying onl a specific part of an object just add the object you want to stringify and the keys wrapped inside square brakets and '' sepated by comma
//when JSON.stringify() encounters undefined as a property value within an object being stringified, it does not include that property in the resulting JSON string. Instead, it simply omits it.
//This behavior is due to the fact that undefined is not a valid JSON value. According to the JSON specification, valid JSON values include strings, numbers, booleans, arrays, objects, and null, but not undefined. Therefore, when JSON.stringify() encounters undefined, it treats it as if the property does not exist.
const obj13 = {
  a: 1,
  b: 2,
  c: 3,
  d: true,
  level: 13,
  e: undefined,
  f: null,
  g: "I am g",
  h: true,
};
const data = JSON.stringify(obj13, ["a", "c", "level", "e", "f"]);
console.log(data);

//Destructuring in objects
let student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  gender: "male",
  grade: "A",
  courses: ["Math", "Science", "History"],
  address: { street: "123 Main Street", city: "Anytown", country: "USA" },
  contact: { email: "john.doe@example.com", phone: "+917979562899" },
};
//This syntax { age } = student is shorthand for extracting the age property from the student object and assigning its value to a variable named age. This is the shorthand way.
//This is same as writing let age = student.age;
let { age } = student;
console.log(age);

//If you want to destructure a property of obejct with a differt name then just write colon and the variable name you want to give
let {firstName : myName} = student
console.log(myName)

//How to destructure in a nested obejct? Just add colon after the key of the object and then write the key inside curly braces
let { contact: {phone}} = student
console.log(phone)

//In the fruits function, the spread operator (...args) is used to collect all additional arguments passed to the function after the List and Fav parameters. These additional arguments are then concatenated with the List and Fav parameters into a new array using array spread syntax [List, ...args, Fav].
function fruits(List, Fav, ...args){
  console.log( [List, ...args, Fav] )
}
fruits(["Durian", "Dragonfruit"], "Passionfruit", "Mangosteen", "Rambutan", "Lychee", "Jackfruit", "Starfruit")
