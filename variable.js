//variables in javascript
/*
var
*block scope
*cannot be updated or redeclared within same scope
*must be initialized during declaration
*/
const a = "outer case";
console.log(a);
{
  const a = "inner case";
  console.log(a);
}
console.log(a);

/*
let
*block scope
*can be updated but not redeclared within the same scope
*/

let b = "outer scope";
{
  let b = "inner scope";
  b = "inner scope with some change";
  console.log(b);
}
console.log(b);

/*
var
* 
*can be updated and redeclared
*/
var x = 10;
console.log(x);
var x = 20;
console.log(x);
var x;
x = 30;
x = 40;
console.log(x);
