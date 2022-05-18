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
}

// // this is what we want eventually
// const list = new SinglyLinkedList();
// list.push("Hello");
// list.push("Goobye");
