class Node {
    constructor(value){
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
 
	/// WRITE POP METHOD HERE ///
    /*
    
    newTail    
    head            tail          
    |               |
    4 -> 3 -> 2 -> 1
    |
    current    
    
    notes: condition when head and tail a pointing to the same node, we need to set the head and tail to null
    this means that the linked list is now empty
    
    
    */
	pop(){
        if (!this.head){
            return undefined;
        }

        let current = this.head;
        let newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }
     
 }
 

 function test() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);

    // (2) Items in LL - Returns 2 Node
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    // (1) Item in LL - Returns 1 Node
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    // (0) Items in LL - Returns null
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
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