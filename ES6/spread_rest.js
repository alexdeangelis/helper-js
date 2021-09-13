/* Spread & Rest Operators*/

// The operator is '...'
// Calling it 'spread' or 'rest' depends on where we use it

// Spread is used to split up array or object properties
// e.g.
const oldArray = [3, 4, 5];
const newArray = [...oldArray, 1, 2];
// Where oldArray is an array of numbers that you're adding to newArray, along with 1 & 2

// or
const oldObject = { oldProp: 4 };
const newObject = { ...oldObject, newProp: 5 };
// Where oldObject is an object with one property & you're adding it to newObject, along with another property

// Rest is used to merge a list of function arguments into an array
// It is used in a function argument e.g.
function sortArgs(...args) {
  return args.sort();
}

// Or

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
