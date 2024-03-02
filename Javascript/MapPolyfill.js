// Polyfill for Array.prototype.map
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
