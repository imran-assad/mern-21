let fruits = ["apple", "banana", "apple", "orange", "banana"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 2, banana: 2, orange: 1 }
console.log(count);

let numbers = [3, 34, 65, 4, 6, 7, 76, 54, 43, 22];
let min = numbers.reduce((acc, num) => (num < acc ? num : acc), numbers[0]);
console.log("Minimum:", min); // Output: Minimum: 3
