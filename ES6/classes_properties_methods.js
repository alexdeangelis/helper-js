/* PROPERTIES */
/* There is a new way of using properties within a class */
// Properties are like variables attached to classes and objects
// ES6:
//
// constructor() {
//	this.myProperty = 'value';
// }

// ES7:
//
// With new JS you can assign a property directly inside the class, skipping the contructor function call
//
// myProperty = 'value';

/* METHODS*/
/* Also a new way of creating methods within a class */
// Methods are like functions attached to classes and objects

// ES6:
//
// myMethod() {
// ...
// }

// ES7:
//
// With new JS you can use arrow functions within a method
//
// myMethod = () => {
// ...
// }

// This is useful for using the 'this' keyword

class Human2 {
  // No need to call the constructor function
  gender2 = "maleo";
  printGender2 = () => {
    // Still need to use 'this'
    console.log(this.gender2);
  };
}

class Person2 extends Human2 {
  // No need to call the super function to extend
  // No need to call the construtor function
  name2 = "Alexo";
  printName2 = () => {
    console.log(this.name2);
  };
}
// You initiate the class & call the methods in the same way
// This needs Babel to run correctly
const person2 = new Person2();
person2.printName2();
person2.printGender2();
