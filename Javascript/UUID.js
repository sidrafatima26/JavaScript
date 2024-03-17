//npm install uuid


const { v4: uuidv4 } = require('uuid');

function generateUniqueID() {
  return uuidv4();
}

console.log(generateUniqueID());
