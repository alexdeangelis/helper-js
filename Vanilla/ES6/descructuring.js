/* Destructuring */

// Easily extract single array elements or object properties & store them as variables

// Array destructuring:
[a, b] = ["Alexq", "Jeffe"];
// You assign the elements of the array variable, when you create the variable
console.log(a);
console.log(b);

// Also...
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num3);

// Object destructuring:
//{name} = {name: 'Alext', age: 28};
//console.log(name);
