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
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies++;
    if (this.tardies >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    const sum = this.scores.reduce((total, current) => (total += current));
    return sum / this.scores.length;
  }
}
//mtd to make new objs must be called constructor
//class kw makes const, so cant redefine it. Watch out for syntax

// make new objects from classes:
// use new keyword

// let firstStudent = new Student("Colt", "Steele", 1996);
// let secondStudent = new Student("Blue", "steele");
let kitty = new Student("Kitty", "Kat", 1);

console.log("kitty.scores:", kitty.scores);

console.log("kitty.addScore(66):", kitty.addScore(55));
console.log("kitty.addScore(66):", kitty.addScore(57));

console.log("kitty.calculateAverage():", kitty.calculateAverage());
