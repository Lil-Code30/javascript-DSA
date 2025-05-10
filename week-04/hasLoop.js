/*
003 LL Has Loop ( Interview Question)

Instructions
Write a method called hasLoop that is part of the linked list class.
The method should be able to detect if there is a cycle or loop present in the linked list.
You are required to use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the loop.
This algorithm uses two pointers: a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a loop in the linked list, the two pointers will eventually meet at some point. If there is no loop, the fast pointer will reach the end of the list.

The method should follow these guidelines:



Create two pointers, slow and fast, both initially pointing to the head of the linked list.

Traverse the list with the slow pointer moving one step at a time, while the fast pointer moves two steps at a time.

If there is a loop in the list, the fast pointer will eventually meet the slow pointer. If this occurs, the method should return true.

If the fast pointer reaches the end of the list or encounters a null value, it means there is no loop in the list. In this case, the method should return false.



Output:

Return true if the linked list has a loop.

Return false if the linked list does not have a loop.



Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.



*/

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

  /*// function to create a cycle linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // Point to itself
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.next = this.head; // Point to head to make it circular
    }
  }*/

  // function to detect if a linked list contain cycle loop
  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    // this.head.next --> fast.next bcs fast === this.head
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        return true;
      }
    }

    return false;
  }
}

// creating a linked list that doesn't has a loop
let myLinkedList = new LinkedList(20);
myLinkedList.push(30);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.push(60);
myLinkedList.push(70);
myLinkedList.push(80);
myLinkedList.push(60);
myLinkedList.push(70);
myLinkedList.push(80);

/*
// creating a linked list that has a cycle loop
let myCycleLinkedList = new LinkedList(5);
myCycleLinkedList.append(10);
myCycleLinkedList.append(15);
myCycleLinkedList.append(20);
myCycleLinkedList.append(25);
myCycleLinkedList.append(30);
myCycleLinkedList.append(25);
*/

console.log("This Linked list contain a cycle loop:", myLinkedList.hasLoop());
