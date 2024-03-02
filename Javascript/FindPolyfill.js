// Polyfill for Array.prototype.find
if (!Array.prototype.find) {
  Array.prototype.find = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this);
    const length = array.length >>> 0;

    for (let i = 0; i < length; i++) {
      if (i in array) {
        const element = array[i];
        if (callback.call(thisArg, element, i, array)) {
          return element;
        }
      }
    }

    return undefined;
  };
}
