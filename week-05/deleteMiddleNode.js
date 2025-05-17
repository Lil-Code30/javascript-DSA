class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // WRITE LL CONSTRUCTOR HERE //
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  deleteMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    let temp = this.head; // or temp = null

    // condition for one node ;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return this;
    }

    while (fast !== null && fast.next !== null) {
      temp = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    // let temp1 = slow;
    temp.next = slow.next;
    // temp1 = null;
    this.length--;

    return this;
  }
}

let myLinkedList = new LinkedList(20);
myLinkedList.push(30);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.push(60);
myLinkedList.push(70);
myLinkedList.push(80);

// [20,30,40,50,60,70,80]
//           ^ 50
// output : [20,30,40,60,70,80]

console.log(myLinkedList.deleteMiddleNode());

console.log("***************************************");
let myLinkedList1 = new LinkedList(3);
myLinkedList1.push(4);
myLinkedList1.push(7);
myLinkedList1.push(1);
myLinkedList1.push(6);
myLinkedList1.push(6);

console.log(myLinkedList1.deleteMiddleNode()); // [3,4,7,6,6]

console.log("***************************************");
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);

console.log(myLinkedList2.deleteMiddleNode()); // [1,2,4]

console.log("***************************************");
let myLinkedList3 = new LinkedList(1);
myLinkedList3.push(2);

console.log(myLinkedList3.deleteMiddleNode()); // [1]

console.log("***************************************");

let myLinkedList4 = new LinkedList(1);

console.log(myLinkedList4.deleteMiddleNode()); // []
