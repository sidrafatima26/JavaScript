//A promise an object that represents the ventual completuion or eventual failure of an Asynchronous Operation.
//Producing code is a code that can take some time.
//Consuming code is a code that waits for a result.
//A promise is an object that links Producing code and Consuming code.
//At any point of time a promise can be in one of the 3 states:
//1. Pending : When a promise object is pending, the result is undefined
//2. Fulfilled : When a promise object is fulfilled, it returnes a value
//3. Rejected : When a promise object is rejected, it returnes an error object

let promise = new Promise(function (resolve, reject){
    const a =10
    const b =10
  if(a===b)
    resolve();
  else
    reject()
})

promise.then(function () {console.log("Fulfilled")}).catch(function(){console.log("Rejected")})
                          
const promise1 = new Promise( function(resolve, reject){
  const x=40;
  const y=40;
  if(x==y)
    resolve();
  else
    reject();
} ) 

promise1.then( function(){console.log("Fulfilled")}).catch(function(){ console.log("Error")})
