//JS First Program

console.log("Var Let Const")
var a = 45 // Globally scoped, Can be updated and reclared within its scope, Can be left uninitialised during declaration, Can be initialised with undefined 
var b = "sidra"
var c = null
var d = undefined
const author = "Sidra Fatima"//Block Scoped, Can not be updated or redeclared, Can not be initialised as undefined, Necessary to initialise at declaration
{
  let b = "Fatima"//Block Scoped, Can be updated but not redeclared, not initialised as unde, Not necessary to initialise at declaration
  console.log(b)
}
console.log(b)
console.log(author)
//N N S S B B U : Null Number String Symbol Boolean BigInt Undefined

let t = null
let u = 4575
let v = "String"
let w = Symbol("I am a symbol Primitive Datatype of JavaScript")
let x = true
let y = BigInt(45)
let z //Since the type of z is let it is automatically assigned undefined value
console.log(t, u, v, w, x, y, z)
console.log(typeof z)

//Non-Primitive DataType. Objects in JS. You can make key value pairs usin objects in JS
const Glory = {
  "Moon": true,
  "Dong": 45,
  "Eun": undefined,
  "Park": false,
  "Yeon": null,
  "Jin": BigInt(75),
  "Jeon": "JaeJun"
}
console.log(Glory["Moon"])

//Practice Set
let string = "SidraFatima"
let number = 100
console.log(string + number) //Adding a string and a number will concatenate the two
console.log(typeof string)
const constant = "Ha Do hyun"
console.log(constant)

const xyz = {
  name: "Son Meyong Oh",
  "isPrincipal": false,
  "StuNum": 6787,
}
console.log(xyz["StuNum"])
xyz["Friend"] = "Lee Sa ra"
console.log(xyz["Friend"])
name = "Ha Ye Sol"
console.log(name)

const dict = {
  "accept": "reject",
  "initial": "final",
  "genuine": "fake"
}
console.log(dict)

for (let i = 0; i < 50; i++) {
  console.log(i + 10)
}
let obj = {
  harry: 100,
  ron: 90,
  hermyoni: 80,
  loona: 70,
  snape: 60,
  dumbledoor: 50
}
for (let a in obj) {
  console.log("Marks of children", obj[a])
}
//Math 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(1.2434));
console.log(Math.max(5, 8, 1, 9, 12));
console.log(Math.min(5, 8, 91, 9, 12));
console.log(Math.abs(-267));
console.log(Math.abs(848));

//String is Primitive DataType
let lastName = "Fatima";
console.log(lastName);
//There are 2 types of strings in JavaScript Primitive and object
console.log(typeof lastName);// This will be a string
let firstName = new String("Sidra");//This will be an object type. In this case we have used a string constructor functionto make this string an object
console.log(typeof firstName);
//You can convert a string type into a object type by using dot notation
console.log(lastName.length);
console.log(lastName[0]);
console.log(lastName.includes('ati'));
console.log(lastName.startsWith('Fa'));
console.log(lastName.endsWith('ma'));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.trim());//Removes all spaces
console.log(lastName.replace('Fat', 'Afi'));
let message = "I am going to master JavaScript";
let words = message.split(' ');
console.log(words);
console.log(message.replace('I am', 'Sidra is'));

//Template Literal, Template Strings, String Templates, Back-Tics Syntax
let sen = `Subject: Regarding Offer Letter
Hi All,
Hope you are doing well.
As requested, my expected base salary is 100,000 pounds non-negotiable. 
Thank you again for your offer. I look forward to   speaking with you further soon.
Regards
Sidra Fatima`;
console.log(sen);

//Date
let date = new Date();
let date2 = new Date('June, 26, 1998, 4:00')
console.log(date2);
let date3 = new Date(1998, 26, 05)

//Arrays
let numbers = [1, 3, 5, 7];
console.log(numbers)
numbers.push(9); //for adding an element at the end
console.log(numbers)
numbers.unshift(10); //for adding an element at the beginning
console.log(numbers);
numbers.splice(2, 0, 45, 75, 85, 95);//For adding elements in the middle. add elements from the second index, delete no element, and add 4 new elements 
console.log(numbers);
console.log(numbers.indexOf(75));//Finding index of an element
//Searching in an array
if (numbers.indexOf(85) != -1)//To find if a number is present in an array in JS
  console.log("present")
console.log(numbers.includes(85));
console.log(numbers.indexOf(5, 2));//The answer is -1 which means that 5 was not found after index 2
//Deletin elements in an array
console.log(numbers.pop())
console.log(numbers)
console.log(numbers.shift())
console.log(numbers)
console.log(numbers.splice(2, 1))
console.log(numbers)
//Emptying an array
// numbers=[];
// console.log(numbers)
//splice will delete the numbers starting from the first argument and ending to the last argument
console.log(numbers.splice(0, number.length))
console.log(numbers)

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 14, 51, 36, 67, 53];
let integers2 = integers;//Here address is copied because this is an object
//integers = [];//Now this is pointing to an empty array
console.log(integers);//Here we find that integers is an empty array but integer2 still holds the same values because the address is copied as this is a reference and it still points to the same address where integers array is stored. We just changed the referece address of integer to point to an empty array.
console.log(integers2);
//We use splice or integers.length=0 to delete an array as pointing the array to an empty array is not appriciated because the array still exists.
//integers.length=0;
console.log(integers);
//You can also use a while loop for the same
while (integers != 0) {
  integers.pop();
}
console.log(integers);
//On references
let courses = [
  { no: 1, nm: "Kim" },
  { no: 2, nm: "Park" },
  { no: 3, nm: "Min" },
  { no: 4, nm: "Jeon" },
  { no: 5, nm: "Jung" }
]
console.log(courses);
//This code gives a value of -1 but this element is still present in courses. This is because previously in the case of we were talking about primitive datatypes in which values are compared. In this case we are talking about objects. Diffent objects are stored in different addresses. So both of them are not same as both of them are not referencing to the same object. The
console.log(courses.indexOf({ no: 1, nm: "Kim" }));

//CallBack Functions in JavaScript. A CallBack Function is a Function passed as an argument of another function which is then invoked inside the outer function to perform some routine or action.

// let course = courses.find(function (course) {
//  return course.nm=='Jeon'; })
// console.log(course);

//Another way of writing the same is:-
// This means in the list courses, find a course in which the name of the course is Kim
let course = courses.find(course => course.nm == 'Kim');
console.log(course);

//Combining and slicing arrays (On primitives)
let arr1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1234];
let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let combined = arr1.concat(arr2);//Concatenating two arrays. 
console.log(combined);
let sliced = combined.slice(9, 14);
console.log(sliced);//This will store the selected index elements from combined into sliced
console.log(combined);
let slc = arr1.slice(5);//This will slice every element after index 5 and store it in slc
console.log(slc)
let com = [...arr1, ...arr2, 'b', true, false];// The 3 dots are called spread operator
console.log(com);
let another = [...combined]; // You can create a copy using spread operator

//Iterating an array
let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1234];
for (let value of arr3)
  console.log(value);
//We are using callback function
arr3.forEach(function(value) {
  console.log(value)
})
//Same thing with arrow function
arr3.forEach(value => console.log(value));

//Joining array
const joined = arr3.join(',');
console.log(joined);
//split method will create an array of parts
let msg = 'This is my first message';
let parts = message.split(' ');
console.log(parts);
//joining with an underscore
let jon = parts.join('_');
console.log(jon);

//Sorting an array
let short = [56, 67, 4, 345, 6, 12, 46, 14, 22, 86, -1]
//The sort method does not always gives the correct answer in case of integers because it first convers the integer into a string and then sorts it by comparing the sequences of UTF16 code units values. 
console.log(short.sort());
console.log(short.reverse());
//By defalut sort method sorts elements alphabetically. For it to sort numerically we need to use a predicate function
var numArray = [140000, 104, 99];
console.log(numArray.sort(function(a, b) {
  return a - b;
}));

//Filter will create a new array with elements that pass the condition/test provided by a function.
let whole = [140, 104, 14, 41, -1, 0, -98];
let filtered = whole.filter(function(value) {
  return value >= 0;
})
console.log(filtered);

//map mapps each element of an array to something else
let mapp = [1, 2, 3, 4, 5]
let mappdata = mapp.map(function(value) {
  console.log("studentName" + value)
});
console.log(mappdata);
let twelve = [45, 7, -6, 65, 43, -23, 71, 6, -65, -40, -1, 0]

//This is how it's arraow function will be written:
//let mappdata = mapp.map(value => console.log("studentName" + value));

//Mapping with objects
let arr4 = [34, 92, -4, 63, 46, -9, 83, -5, 21, -8, 43, 6]
let value1 = arr4.filter(value => console.log(value >= 0));
let itms = value1.map(function(value) {
  return { value: num };
})
console.log(itms);

