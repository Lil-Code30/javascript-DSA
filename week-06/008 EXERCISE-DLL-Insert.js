class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  /// WRITE INSERT METHOD HERE ///
  insert(index, value) {
    // looping through the DLL, which condition needs to be verify??????
    /*
      ??? : what to do? 
     we need to locate the node before the insertion point - meaning if i want to insert a node a index 3 (n), i need to locate 
     a pointer on the node at index 2 (n - 1 )

     - note for every loop, the value of pre changes to the next value
     */

    //  insert at the beginning of the DLL
    let pre = this.head;

    if (index === 0) {
      const newNode = new Node(value);
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      return;
    }

    for (let k = 0; k < index - 1; k++) {
      //  - note for every loop, the value of pre changes to the next value
      pre = pre.next;
    }

    // get the value after the insertion point
    let aft = pre.next;

    // get the .prev of the aft node (meaning the pointer before the insertion point)
    // here is pre

    //  create a newNode with data = value
    const newNode = new Node(value);
    newNode.next = aft;
    aft = newNode;
    pre.next = newNode;
    newNode.prev = pre;
  }
}

function test() {
  let myDLL = new DoublyLinkedList(1);
  myDLL.push(3);

  console.log("DLL before insert():");
  myDLL.printList();

  myDLL.insert(1, 2);

  console.log("\nDLL after insert(2) in middle:");
  myDLL.printList();

  myDLL.insert(0, 0);

  console.log("\nDLL after insert(0) at beginning:");
  myDLL.printList();

  myDLL.insert(4, 4);

  console.log("\nDLL after insert(4) at end:");
  myDLL.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    DLL before insert():
    1
    3

    DLL after insert(2) in middle:
    1
    2
    3

    DLL after insert(0) at beginning:
    0
    1
    2
    3

    DLL after insert(4) at end:
    0
    1
    2
    3
    4

*/
