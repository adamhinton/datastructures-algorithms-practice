// piece of data-val
// ref to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
}

// PUSH pseudocode:
// This fxn should accept a val
// make a new node using val passed to fxn
// if no head prop, set head and tail to new node
// otherwise, set next prop on tail to be new node and set tail to be the new node
// length ++
