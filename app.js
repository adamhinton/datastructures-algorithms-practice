// piece of data-val
// ref to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");

console.log("first:", first);

console.log("blah blah blah");
