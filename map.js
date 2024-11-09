let numbers = [2, 4, 6, 78, 9];

let updatedNumbers = numbers.map((el, index) => {
  console.log(`${index} and ${el * 2}`);
  return el * 2;
});

console.log(updatedNumbers);

let fruits = ["apple", "mango", "coconut"];

fruits.map((fruit) => {
  console.log(fruit); // Logs each fruit to the console
  // Creates an <li> element with the fruit name
});
