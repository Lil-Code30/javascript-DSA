// node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Linked list push method
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
}

let newList = new LinkedList(4);
newList.push(5);
newList.push(6);
newList.push(7);
console.log(newList);

//printing the head in the linked list
console.log(newList.head);

// printing the value of the head in the linked list
console.log(newList.head.value);
