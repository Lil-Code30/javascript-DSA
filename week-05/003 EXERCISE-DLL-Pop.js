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

  /// WRITE POP METHOD HERE ///

  pop() {
    if (!this.head) {
      return undefined;
    } else if (!this.head.next) {
      /*

                head
                |
        null <- [4] -> null
                |
                tail

        */
      let temp = this.head;
      this.head = null;
      this.tail = null;

      this.length--;
      return temp;
    } else {
      /*
                Head
                |
        null <- [4] <-> [50] -> null
                        |
                        Tail

        new linked list  after the pop()

                 Head
                |
        null <- [4] -> null
                |
                Tail
        */

      let temp = this.tail;
      this.tail = this.tail.prev;

      this.length--;
      return temp;
    }
  }
}

function test() {
  let myDLL = new DoublyLinkedList(1);
  myDLL.push(2);

  // (2) Items in LL - Returns 2 Node
  if (myDLL.length !== 0) {
    console.log(myDLL.pop().value);
  } else {
    console.log("null");
  }

  // (1) Item in LL - Returns 1 Node
  if (myDLL.length !== 0) {
    console.log(myDLL.pop().value);
  } else {
    console.log("null");
  }

  // (0) Items in LL - Returns null
  if (myDLL.length !== 0) {
    console.log(myDLL.pop().value);
  } else {
    console.log("null");
  }
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
