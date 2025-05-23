// WRITE NODE CLASS HERE //
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  // WRITE DLL CONSTRUCTOR HERE //
  /*
  
                head
                |
(null)prev <- [newNode] -> next (null)
                |
                tail
  */
  constructor(value) {
    let newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    this.next = null;
    this.prev = null;
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
}

function test() {
  let myDLL = new DoublyLinkedList(7);

  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  console.log("\nDoubly Linked List:");
  myDLL.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 7
    Tail: 7
    Length: 1

    Doubly Linked List:
    7

*/
