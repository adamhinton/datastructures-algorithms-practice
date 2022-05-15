// we'll take advantae of es2015 classes for this. BUilding our own DS.

// What's a class?
// blueprint for creating objects with pre-def props and methods

// objs:
// understand classes
// understand how js impl idea of classes
// use es2015 to imp DS

// ex:
// singly/doubly linked lists

// why learn this?
// we'll learn to implement ds as classes

// how to:

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
//mtd to make new objs must be called constructor
//class kw makes const, so cant redefine it. Watch out for syntax

// make new objects from classes:
// use new keyword

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "steele");
