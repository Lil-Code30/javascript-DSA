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
    this.next = this.head;
    this.length = 1;
  }
}

let newList = new LinkedList(4);
console.log(newList);
