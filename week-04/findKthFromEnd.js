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
  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;

    // move fast pointer k step ahead
    for (let i = 1; i <= k; i++) {
      // If the fast pointer reaches null before moving k steps, return null as k is out of range.
      if (fast === null) {
        return null;
      }

      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}

let myLinkedList = new LinkedList(20);
myLinkedList.push(30);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.push(60);
myLinkedList.push(70);
myLinkedList.push(80);

// [20,30,40,50,60,70,80] k = 4 starting from the end
//           ^ 50
// initially slow = 20 & fast = 50
// hint : maintain two pointer with one with a delay of n

console.log(myLinkedList.findKthFromEnd(4)); // output: 50
console.log(myLinkedList);
