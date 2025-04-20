# 📚 Semaine 1 – Notes d'apprentissage

## 🗓️ Date

Du [19/04/2025] au [20/04/2025]

---

## 🧠 Concepts appris

- Big O notation
- Classes & Pointers
- Linked Lists constructor
- Linked List Push

---

## 💡 Points clés

- **Big O (O) - Upper Bound (Worst Case)**
  - What it means: Big O (O) describes the worst-case scenario for an algorithm.
  - In simple terms: It tells you the slowest an algorithm can run in the worst
    circumstances
- **Useful Tips**
  - **Best Case, Average Case, Worst Case**
    - Consider all scenarios when analyzing.
  - **Drop Non-Dominant Terms**
    - In O(n2 + n), focus on O(n2) as it will dominate for large n.
  - **Drop Constants**
    - O(2n) simplifies to O(n).
  - **O(n2)** : loop within a loop
  - **O(n)** : proportional to the size of the data set
  - **O(log n)** : splits the data in each step (divide and conquer)
  - **O(1)** : constant time - doesn't depend on the size of the data set
- **Classes**

  - A class is a blueprint for creating objects.
  - Objects are instances of a class.

  ```javascript
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }

    sayHello() {
      console.log("Hello!");
    }
  }
  ```

- **Pointers**

  - A pointer is a variable that holds the memory address of another variable.
  - Pointers are used to access memory locations and manipulate data.

  ```javascript
  // pointer syntax with objects
  let user = {
    name: "Loko Ismael",
    age: 25,
    country: "Cameroon",
    isDeveloper: true,
  };

  let userPointer = user;
  console.log(userPointer); // { name: 'Loko Ismael', age: 25, country: 'Cameroon', isDeveloper: true }
  userPointer.name = "John Doe";
  console.log(user); // { name: 'John Doe', age: 25, country: 'Cameroon', isDeveloper: true }

  // pointer syntax with arrays
  let arr = [1, 2, 3, 4, 5];
  let arrPointer = arr;
  console.log(arrPointer); // [ 1, 2, 3, 4, 5 ]
  arrPointer.push(6);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
  ```

- **Linked Lists**

  - Linked list don't haves indexes.
  - arrays are in a contiguous places in memory while linked linked list can be all over the memory
  - The varaible a the beginning of the linked list is called the head.
  - The variable at the end of the linked list is called the tail.
  - Each items in the list points to the next item in the list.
  - The last item point to null.
  - The head points to the first item in the list.
  - The Tail points to the last item in the list.

---

## 📚 ressouces

- [Big O Cheatsheet](https://www.bigocheatsheet.com/)
- [Linked List](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)

## 🗒️ Notes

### Big O Basic Concepts:

- **O(1): Constant Time**
  - Doesn't depend on the size of the data set.
  - Example: Accessing an array element by its index.
- **O(log n): Logarithmic Time**
  - Splits the data in each step (divide and conquer).
  - Example: Binary search.
- **O(n): Linear Time**
  - Directly proporFonal to the data set size.
  - Example: Looping through an array.
- **O(n log n): Linearithmic Time**
  - Splits and sorts or searches data.
  - Example: Merge sort, quick sort.
- **O(n2): Polynomial Time**
  - Nested loops for each power of n.
  - Example: Bubble sort (O(n2)).

### Linked List and Arrays Big O notation:

| operation       | linked List | Arrays |
| --------------- | ----------- | ------ |
| push            | O(1)        | O(1)   |
| pop             | O(n)        | O(1)   |
| shift           | O(1)        | O(n)   |
| unshift         | O(1)        | O(n)   |
| insert          | O(n)        | O(n)   |
| delete          | O(n)        | O(n)   |
| Lookup by index | O(n)        | O(1)   |
| lookup by value | O(n)        | O(n)   |
