/*
 * Classes are a core feature of next gen JavaScript
 * Classes are blueprints for objects
 *
 */

// Here is a sample class

class samplePerson {
  name = "Max"; // Property. This is a variable attached to a class
  call = () => {
    // Method. This is a function attached to a class
    //...
  };
}

// This is how you use a class
const mySamplePerson = new samplePerson(); // Initiate the class into a constant variable
mySamplePerson.call(); // This is how you call the method within the class
console.log(mySamplePerson.name); //  This is how call the property within the class

// Classes are a converient way of creating constructor functions

// A class can inherit from another class

class Human {
  constructor() {
    this.gender = "Male";
  }
  printGender() {
    console.log(this.gender);
  }
}

// The extends keyword allows this class to use the methods & properties from another class
class Person extends Human {
  constructor() {
    // You have to add constructor() to add a property to the class. Constructor is a default function method you can add to any class to which will be executed whenever the class initially called
    super(); // You have to call this within constructor, if you're extending a class
    this.name = "Alex";
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printGender();
