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
first.next.next = new Node("there");
