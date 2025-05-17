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
  removeKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;

    let size = 0;
    let temp1 = this.head;

    // finding the total number of elements in the linked list
    while (temp1 !== null) {
      size++;
      temp1 = temp1.next;
    }

    // code to be run when k is equal to the length of the linked list
    if (k === size) {
      this.head = this.head.next;
      this.length = 0;
      return this;
    }

    // move fast pointer k step ahead
    for (let i = 1; i <= k; i++) {
      // If the fast pointer reaches null before moving k steps, return null as k is out of range.
      if (fast === null) {
        return null;
      }

      fast = fast.next;
    }

    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    //
    let temp = slow.next;
    slow.next = slow.next.next;
    temp = null;
    this.length--;

    return this;
  }
}

let myLinkedList = new LinkedList(20);
myLinkedList.push(30);
myLinkedList.push(40); // slow
// myLinkedList.push(50); // slow.next
// myLinkedList.push(60); // slow.next.next
// myLinkedList.push(70);
// myLinkedList.push(80);

// [20,30,40,50,60,70,80] k = 4 starting from the end
//           ^ 50
// output : [20,30,40,60,70,80]

// hint : maintain two pointer with one with a delay of n

console.log(myLinkedList.removeKthFromEnd(3));
