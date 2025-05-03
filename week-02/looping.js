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
  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    let initialValue = this.get(index);
    initialValue.value = value;
  }

  middleNode() {
    let middleIndex = 0;

    if (this.length % 2 === 0) {
      middleIndex = Math.ceil(this.length / 2);
    } else {
      middleIndex = Math.ceil(this.length / 2) - 1;
    }

    let temp = this.get(middleIndex);
    let pre = this.get(middleIndex - 1);
    this.head = temp;
    pre.next = null;

    // for(let i = middleIndex; i < this.length; i++){

    //     /*🛑🛑 remaining the implementation to display the middle nodes*/
    // }
    /*
            [1,2,3,4,5] length = 5
            middleIndex = 2
            for(let i = 2; i < 5; i++ )
        */
    return this;
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
