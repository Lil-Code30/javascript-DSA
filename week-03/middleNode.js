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
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  middleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}
let myLinkedList = new LinkedList(40);
myLinkedList.push(15);
myLinkedList.push(65);
myLinkedList.push(36);
myLinkedList.push(52);
myLinkedList.push(76);
myLinkedList.push(99);
myLinkedList.push(100);

// [40,15,65,36,52,76]
// [36,52,76]
let middleNode = myLinkedList.middleNode();
console.log(middleNode);

/*
  
  
  - need to know the total number of node in the LL
  - condition if the len of the linked list is odd also for even
  
  - middle odd -> Math.ceil(len/2) - 1
  - middle even -> Math.ceil(len/2)
  
  
  */
