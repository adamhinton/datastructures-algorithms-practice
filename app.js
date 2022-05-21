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
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {}
}

// SHIFT Pseudocode:
// If no nodes, ret undef
// store current head prop in var
// set head to be current head's next prop
// length--
// ret val of node removed

// PUSH pseudocode:
// This fxn should accept a val
// make a new node using val passed to fxn
// if no head prop, set head and tail to new node
// otherwise, set next prop on tail to be new node and set tail to be the new node
// length ++

// POP:
// Not so simple because we have to go back thru the whole list and find the previous item.
// The traversing bit is fairly simple, just loop thru.
// traverse(){
//   const current = this.head;
//   while(current){
//     console.log('current.val:', current.val);
//     current = curren.next
//   }
// };

// POP pseudocode:
// if no nodes return undef
// loop thru until reach tail
// set next prop of 2nd to last node to be null
// set tail to be 2nd from last node
// length --
// return val of node removed
// When there's only one item left in the list and you remove it, set tail and head to be null

// Shift:
// remove node from beg of LL
// just remove head, change head to next
