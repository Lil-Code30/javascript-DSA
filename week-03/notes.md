# 📚 Semaine 3 – Notes d'apprentissage

## 🗓️ Date

Du [03/05/2025] au [04/05/2025]

---

## 🧠 Concepts appris

- middle node of a linked list
- Fast and slow pointer

---

## 💡 Points clés

- **Middle node of a linked list**
  - Return the middle node of a linked list
  - There can be two implementations in leetcode or in vs code
  - **Vs Vode Method**
    - I decided to use the get method to get the middle node
    - We need to consider if the length of the linked list is even or odd
    - Depending on the length of the linked list, thew head pointer should be pointing to the middle node
    - We also need to get the node before the middle node so that we can set the next pointer of the middle node to null
    - Since the tail is already pointing to the last node, we don't need to do anything with the tail pointer
    - then we retrun the new linked list
    - **Note**:
      - The length of the linked list at the end of the function is equal to the length of the linked list at the beginning of the function.
  - **Fast and slow pointer**
    - Return the middle node of a linked list -**How does the fast and slow pointer work?** - We need to create two pointers, one fast pointer and one slow pointer. - The fast pointer moves two nodes at a time while the slow pointer moves one node at a time - By the time the fast pointer reaches the end of the linked list, the slow pointer will be in the middle of the linked list - Then we return the slow pointer. - **Note**: - We need to identify the condition when the fast pointer reaches the end of the linked list.

---

## 📚 ressouces

- Leetcod: [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

### 📝 Exemples
