/*
 *
 * let & const are two different ways of creating variables
 *
 * const is for variables are assigned once and never change
 * let is for variable that can change
 *
 */

// Old way is to use var
var myName1 = 'Alex';
console.log(myName1);
myName1 = 'Alexander';
console.log(myName1);

// Using let lets you change the let value multiple times
let myName2 = 'Fred';
console.log(myName2);
myName2 = 'Freddy';
console.log(myName2);

// As const can only be assigned once, the second assignment will cause an error
const myName3 = 'Jeff';
console.log(myName3);
// This will cause an error
myName3 = 'Jeff??!!!';
console.log(myName3);