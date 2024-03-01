/*

Generators in JavaScript are special functions that can be paused and resumed, 
allowing for the creation of iterators in a simpler and more expressive way compared to traditional iterator patterns. 
They were introduced in ECMAScript 6 (ES6) and provide a powerful mechanism for defining iterable sequences of data.
Generators: Generators are special functions in JavaScript defined using the function* syntax. 
They enable the creation of iterators that can produce a sequence of values lazily. 
Generators can pause their execution using the yield keyword, allowing values to be produced one at a time.

*/

function* fibonacci(limit) {
  let prev = 0;
  let current = 1;

  while (current <= limit) {
    yield current;
    [prev, current] = [current, prev + current];
  }
}

// Create a generator instance
const fibGenerator = fibonacci(50);

// Iterate over the generated Fibonacci numbers
for (let number of fibGenerator) {
  console.log(number);
}
