// In JavaScript, all objects interact by reference when setting them equal to each other.

// First, variable cars holds a value to an object. Later, we assign diesel with the same reference that car has to the object.

//When you change one object, you change all of them.


let cars = { FuelType :  'Diesel', Transmission : 'automatic' };

let bmw = cars;

console.log(bmw.FuelType);

cars.FuelType= 'Petrol'

console.log(bmw.FuelType);
