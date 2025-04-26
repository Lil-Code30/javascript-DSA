# 📚 Semaine X – Notes d'apprentissage

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
    - There are two conditions to consider:
        - The linked list is empty
        - There is at least one node in the linked list
    **Note**: 
        - The Unshift code is similar to the push code exccept that the new node is added to the beginning of the linked list
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



