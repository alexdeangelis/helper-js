const number = 1;
// The above is a primitive type
// This means that it can be included in another variable e.g.
const num2 = number;
console.log(num2);

// Numbers, strings & booleans are primitive types
// When assigning a variable with these values into another variable, it will copy the value

// Objects & arrays are reference types
const firstPerson = {
  name: "Alex",
};
const secondPerson = firstPerson;

firstPerson.name = "Jeff!";

console.log(secondPerson);

// When assigning a variable an object or array in a second variable, it doesn't copy the value.
// It actually stores the object or array in memory
// In the original variable a pointer is created in memory, which is then copied into the new variable

// secondPerson is console loggin Jeff!, because secondPerson still points to firstPerson

// To actually copy a variable with an object or array in an imutable way, use the spread operator
const thirdPerson = {
  name: "Alex",
};
const fourthPerson = {
  ...thirdPerson,
};
thirdPerson.name = "Greg";
// It doesn't matter that we changed the name value of thirdPerson to 'Greg'
// As fourthPerson was created from thirdPerson before the name value was changed
console.log(fourthPerson);
