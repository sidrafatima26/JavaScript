//Polyfill of map

//arr.map((item, index, arr) => )
Array.prototype.myMap = function (cb){
  var arr = []
  for(let i=0; i< this.length; i++)
    arr.push(cb(this[i], i, this))
  return arr;
}

const numbers = [1, 2, 3, 4, 5];

let multiplyby2  = numbers.myMap( item => item*2 )
console.log(multiplyby2)



// Polyfill for Array.prototype.map
/*The code checks if the Array.prototype.map method already exists. If it doesn't, it proceeds to define it.

Inside the Array.prototype.map function, it first checks if this is null or not defined. If it is, it throws a TypeError.

It then checks if the provided callback parameter is a function. If it's not, it throws a TypeError.

It creates a new array (mappedArray) to store the results of applying the callback function to each element of the original array.*/
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this);
    const length = array.length >>> 0;
    const mappedArray = new Array(length);

    for (let i = 0; i < length; i++) {
      if (i in array) {
        mappedArray[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    return mappedArray;
  };
}
