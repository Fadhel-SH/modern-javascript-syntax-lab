// Exercise 1: Applying Array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const doubledNums = nums.map(num => num * 2);

console.log(doubledNums); // [26, 174, 4, 178, 24, 8, 180, 126]

// Exercise 2: Array destructuring
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Use destructuring to pull out the first and second values and place them into variables.
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping); // 'Pineapple'
console.log(secondTopping); // 'Olives'

// Exercise 3: Destructuring objects
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Use destructuring to create variables `make` and `model` that will hold the respective values.
  const { make, model } = car;
  
  console.log(make); // 'Audi'
  console.log(model); // 'q5'

  // Exercise 4: Applying the spread operator on arrays
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Duplicate the array using the spread operator and assign it to `controversialPizzaToppings`.
const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings); // ['Pineapple', 'Olives', 'Anchovies']
