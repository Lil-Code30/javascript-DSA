# 📚 Semaine 5 – Notes d'apprentissage

## 🗓️ Date

Du [17/05/2025] au [18/05/2025]

---

## 🧠 Concepts appris

- 19. Remove Nth Node From End of List
- 2095. Delete the Middle Node of a Linked List
- Doubly Linked List Constructor
- Doubly Linked List Pop method
- Doubly Linked List Push method

---

## 💡 Points clés

- Continue **Find Kth Node From End** leetcode code from week 4 Du [10/05/2025] au [11/05/2025]
- **Delete Middle Node of Linked List**
  - To delete the middle node of a linked list, you can use the two-pointer technique. This involves using two pointers, slow_ptr and fast_ptr, where the fast pointer moves two nodes at a time and the slow pointer moves one node at a time. When the fast pointer reaches the end of the list, the slow pointer will be positioned at the middle node. You then adjust the next pointer of the node before the middle node to skip over the middle node, effectively removing it from the list.
- **A doubly linked list** is a type of data structure made up of a sequence of elements called **nodes**, where each node contain:

  1. **Data** - the value or payload of the node
  2. **Pointer to the next node** - a reference to the node that comes after it.
  3. **Pointer to previous node** - a reference to the node that comes before it.

  **Notes** : Each node connects both forward and backward, unlike a singly linked list which only has a forward connection.

  **Key Features**

  - **Bidirectional traversal** : You can move forward and backward through the list.
  - **Dynamic Size** : Nodes can be added or removed without reallocation.
  - **More memory usage** : Each nodes uses extra memory to store the additional pointer.

**Adding a new node a the end of the Doubly linked list**:

- Need to create the new node
- Consider that the linked list may be empty meaning `this.head` and `this.tail` both point to null
- If the linked list is not empty, consider the following;
  - tail.next will be pointing to the new node
  - the newNode.prev should be pointing back to the value of the old tail
  - then the new value of the tail will be pointing to the newNode

**Removing a node at the end of a double linked list**

- Need to consider three conditions
  1. If the DLL has no node
     - we return undefined
  2. If the DLL has only one node meaning that head and tail are both pointing to the node
     - we
  3. If the DLL has more that one node

## 📚 resources

- Leetcode : [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
- Leetcode : [2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

### 📝 Exemples
