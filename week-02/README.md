# 📚 Semaine 2 – Notes d'apprentissage

## 🗓️ Date

Du [26/04/2025] au [27/04/2025]

---

## 🧠 Concepts appris

- Linked List Pop
- Linked List Unshift
- Linked List Shift
- Linked list Get
- Linked List Set
- Linked List Insert
- Linked List Remove

---

## 💡 Points clés

- **Linked List Pop**

  - Remove the last node from the linked list
  - Return the value of the removed node
  - There are three conditions to consider:
    - The linked list is empty
    - There is only one node in the linked list
    - There is more than one node in the linked list

- **Linked List Unshift**
  - Add a new node to the beginning of the linked list
  - Return the linked list
  - There are two conditions to consider: - The linked list is empty - There is at least one node in the linked list
    **Note**: - The Unshift code is similar to the push code exccept that the new node is added to the beginning of the linked list
    -Unshift deals with the head pointer to add a new node while push deals with the tail pointer
- **Linked List Shift**
  - Remove the first node from the linked list
  - Return the value of the removed node
  - There are three conditions to consider:
    - The linked list is empty
    - There is only one node in the linked list
    - There is more than one node in the linked list
  - **Note**:
    - The shift code is similar to the pop code except that the removed node is the first node in the linked list
    - Shift deals with the head pointer to remove the first node while pop deals with the tail pointer
- **Linked List Get**
  - Get the value of a specific node in the linked list given its index
  - Return the value of the node
  - There a re two conditions to consider:
    - The linked list is empty
    - There is at least one node in the linked list
  - **Note**:
    - note that the value of the index must be greater than or equal to 0 and less than the length of the linked list
    - meaning that we need to add a condition that verifies that the index is in the range as mention above
  - **How does the get method work?**
    - we iterate through the linked list and we return the value of the node at the given index
    - we always start from the head of the linked list
    - meaning we have to create a temporary varaible to store the current node then we iterate though the linked list and return the value of the node at the given index
- **Linked List Set**
  - Set the value of a specific node in the linked list given its index
  - return the linked list
  - There are two conditions to consider:
    - The linked list is empty
    - There is at least one node in the linked list
  - **Note**:
    - same as get method, we iterate though the linked list and we set the value of the node at the given index
    - we can use the get method to get the node at the given index then we set the value of the node
- **Linked List Insert**
  - Insert a new node at a specific index in the linked list
  - Return the linked list
  - There are **four conditions** to consider:
    - The index is less than 0 or greater than the length of the linked list
      - The result is undefined
    - The index is equal to the length of the linked list
      - The new node is added to the end of the linked list meaning that we can use the push method to add the new node
    - The index is equal to 0
      - The new node is added to the beginnning of the linked list meaning that we can use the unshift method to add the new node
    - The index is greater than 0 and less than the length of the linked list
      - The new node is added at the position of the index
      - We need to get the node at the index and insert the new node before the current node
- **Linked List Remove**

  - Remove a specific node from the linked list given its index
  - Return the linked list
  - There are **four conditions** to consider:
    - The index is less than 0 or greater than the length of the linked list
      - The result is undefined
    - The index is equal to 0
      - The first node is removed meaning that we can use the shift method to remove the first node
    - The index is equal to the length of the linked list minus 1
      - The last node is removed meaning that we can use the pop method to remove the last node
    - The index is greater than 0 and less than the length of the linked list
      - The node at the index is removed
      - We need to get the node at the index and remove the node

- **How does the remove method works?**

  - The index of the node to be removed is passed as an argument to the remove method
  - we check if the index is less than 0 or greater than of the linked list then we return false
  - we check if the index is equal to 0 then we return the result of the shift method
  - we check if the index is equal to the length of the linked list minus 1 then we return the result of the pop method
  - we check if the index is greater than 0 and less than the length of the linked list then we get the node at the index and remove the node
    - we need to identify the node before the node to be removed\
    - we create a temporary variable to store the node.next of the node before the node to be removed
    - we store the previous node.next to the temporary variable ( node.next)
    - we set the node.next to null
    - we decrement the length of the linked list
    - we return the node that was removed

- **Linked List reverse**

  - Reverse the order of the nodes in the linked list
  - Return the reversed linked list
  - **How does the reverse method works?**
    - we first need to reverse the head and tail pointers
    - we the need to iterate through the linked list
    - when iterating, we need to keep track to the previous node, current node and next node
    - we need to store the next node in a temporary variable

- **Quick revision**
  - Removing a node at the end of the linked list is `O(n)` time complexity
  - Removing a node at the beginning of the linked list is `O(1)` time complexity
  - Finding a node in a linked list is `O(n)` time complexity

---

## 📚 ressouces

### 📝 Exemples

```js
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
```
