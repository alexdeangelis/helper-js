// A normal function looks like this:

/*
function myFunc() {
	... 
}
*/

// An arrow function looks like this:

/*
const myFunc = () => {
	...
}
*/

// A traditional function could be:

function printMyName(name) {
  console.log(name);
}
printMyName("My name is Alex");

// Using an arrow function this would look like:
// Using only one argument, you don't need parenthesis around the argument
const printMyName2 = (name) => {
  console.log(name);
};
printMyName2("My name is Alex again");

// If there are no arguments, you must use parenthesis in the empty space
const printMyName3 = () => {
  console.log("Alex Alex");
};
printMyName3();

// If there are more than one arguments, you must use parenthesis
const printMyName4 = (name, age) => {
  console.log("The name is " + name + ". The age is " + age + ".");
};
printMyName4("Alex", 23);

// Many functions just return something
// We can modify the body of the function to reflect this

// A standard function might be:
const multiply = (number) => {
  return number * 2;
};
console.log(multiply(5));

// If your function is just returning, you can remove the curly braces & the 'return' keyword:
const multiply2 = (number) => number * 2;
console.log(multiply2(7));
