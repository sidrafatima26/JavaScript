//Print [[name,Replit], [type, 'editor']]

let object = {
  name: 'Replit',
  type: 'editor'
}
console.log(Object.entries(object))

//Make Object.entries() yourself
/* let key = Object.keys(object): This line gets all the keys of the object and stores them in an array called key.

let arr = key.map( key => { ... } ): This line uses the map method on the key array to iterate over each key. For each key, it creates a new array containing the key and its corresponding value from the object.

key (parameter of the arrow function): Represents each key in the key array.
const value = object[key]: Retrieves the value corresponding to the current key from the object.
return [key, value]: Returns an array containing the current key and its value.
console.log(arr): Finally, it logs the arr array to the console, which now contains an array of key-value pairs from the object. */


let key = Object.keys(object)
let arr = key.map( key => {
  const value = object[key]
  return [key, value]
} )
console.log (arr)
