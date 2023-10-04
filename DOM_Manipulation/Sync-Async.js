//This is an example of synchronous code
function sync() {
  console.log("First Sync code");
}
sync();
console.log("Second Synchronous code");

//This is an example of Asynchronous code
setTimeout(function() {
  console.log("You are inside setTimeout method");
}, 1000);
function sync() {
  console.log("First Synchronous code");
}
sync();
console.log("Second Synchronous code");

//In JavaScript, if you want to execute anything parallely in the background.syntax : let <variable name> = new Promise(function(resolve, reject){})
let P1 = new Promise(function(resolve, reject) {
  console.log('I am inside the callback function of promise P1.');
  resolve(1998);
})
console.log('First');

//Asynchronous Promise with then method. If you want to perform a task after the completion of Promise resolve use then method
let P2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("I am inside Async Promise P2")
  }, 1000);
  resolve(2023);
});
P2.then((value) => { console.log(value) });
console.log('Asynchronous Promise');

//Reject method and catch method.If you want to resolve the error after the completion of Promise reject use catch method.
let P3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("I am inside Async Promise");
  }, 1000);
  reject(new Error('You are inside reject a promise'))
});
P3.catch((error) => { console.log("Received an error") });
console.log('Asynchronous Promise Reject');

/*If there are 3 tasks that are needed to be completed. T1, T2 and T3.
As soon the task T1 finishes completion, T2 should start and whne T2 finishes T3 should start. 
You want all three of the tasks to run in the background so obviously T1, T2 and T3 will be promises.
How will you know when task T1 gets completed? For this we use then method. Inside then method call the next promise ie T2.
When T2 promise gets completed its then method runs and starts T3. 
Hence, if you want to perfrom some action after a promise has been completed use then method.*/
let T1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("SetTimeOut 1 of T1 started");
  }, 1000);
  resolve(true);
})

let output = T1.then(() => {
  let T2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("setTimeout of T2 started");
    }, 1000);
    resolve("T2 resolved");
  })
  return T2;
})
output.then((value) => console.log(value));


/*In a scenario where there are 50 tasks that you want to run parallely, youll have to use 50 promises and each promise afetr getting finished will start the next one.
Hence you will have to use 49 then methods. This is a tedious approach. 
To solve this problem efficiently we use Async-await.
Async Await is a special synatx used to work with promises. You can make any function Async. Async function always returns a promise. */

async function makeAsync() { //Async method always returns a promise
  console.log("To make any function an Async Function just add async keyword at the beginning.");
  return (7); //In the console when you type makeAsync() it will show that this method is a actually a promise which is in the fulfilled state and returning the value 7. 
}
makeAsync();

//These two promises are running parallely
async function weather() {
  let MM = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The weather of Maharashta is cloudy and rainy");
    }, 1000);
  });
  let HM = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The weather of Hyderabad is Hot and Humid");
    }, 1000);
  });

  let MaharashtraMausam = MM;
  let HyderabadMausam = HM;
  return [MaharashtraMausam, HyderabadMausam]
}

/*Fetch API fetches the resource from the network and returns a promise that gets fulfilled once the response is availble. The output of fetch API is always a Promise. Whenever you are retrieving data (get call) through Fetch API you write the below code.
Whenever you are using Fetch API you have to send the URL and options. Options is the object which contains ket=y value pairs of your secret key.
Sometimes you have to send a key for authentication like your login credentials, username etc. This becomes your secret key through which you can access your particular API.
So, along with the URL some other data is also sent from your end to the server for you to get access to the API. To do this you have to use Request Header
*/
/*async function utility() {
let content = await fetch(" API Link ");//We are calling the API right now. Fetch API returns a promise.
let output = await content.json();
console.log(output);
}
utility();*/

//Closures: Var has global scope and let has block scope. Block scope means the lifespan of a variable is only limited to the curly braces it is between 
// closure = function + data
function init() {
  let name = "SidraFatima"; //let gets destroyed after this fucntion as let has block scope
  function displayName() {
    console.log(name);
  }
  return displayName();
}
let F1 = init();
F1();
