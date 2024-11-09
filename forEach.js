let items = ["apple", "mango", "cherry", "Imran"];

function print(item) {
  console.log(item);
}

items.forEach((el) => print(el));

let numbers = [2, 3, 4, 5];

let sum = 0;
function output(item) {
  console.log(item);
}

numbers.forEach((el, index) => {
  sum += el;
  output(`${el} and ${index}`);
});

console.log("total sum", sum);

numbers.forEach((number) =>
  console.log(`the square of ${number} is ${number * number}`)
);
