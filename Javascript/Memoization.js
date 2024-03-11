//Memoisation/cacheing
function factorial(n){
  if(n == 0 || n == 1 )
    return 1
  else
    return n * factorial(n-1)
}

function memoise(){
  const cache = {}
  return function(n){
    if( n in cache){
      return cache[n]
    }
    else{
      const result = factorial(n)
      cache[n] = result
      return result
    }
  }
}

const memoised = memoise();
console.time("five")
console.log(memoised(5))
console.timeEnd("five")
console.time("five1")
console.log(memoised(5))
console.timeEnd("five1")
console.time("Three")
console.log(memoised(3))
console.timeEnd("Three")
console.time("Three2")
console.log(memoised(3))
console.timeEnd("Three2")












// Define a function to calculate the factorial of a number
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: calculate factorial(n-1) and multiply by n
    return n * factorial(n - 1);
  }
}

// Define a memoization function to cache results of factorial function calls
function memoize(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      // If result not in cache, calculate and cache result
      cache[key] = func.apply(this, args);
    }
    return cache[key];
  };
}

// Memoize the factorial function
const memoizedFactorial = memoize(factorial);

// Test memoized factorial function
console.log(memoizedFactorial(5)); // Output: 120 (calculated)
console.log(memoizedFactorial(5)); // Output: 120 (cached)
console.log(memoizedFactorial(6)); // Output: 720 (calculated)
console.log(memoizedFactorial(6)); // Output: 720 (cached)
