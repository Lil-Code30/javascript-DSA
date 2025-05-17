# 📚 Semaine 4 – Notes d'apprentissage

## 🗓️ Date

Du [10/05/2025] au [11/05/2025]

---

## 🧠 Concepts appris

- Floyd’s Cycle Finding Algorithm
- 003 LL Has Loop ( Interview Question)
- 004 LL Find Kth Node From End : All cases work but doesn't work when n is equal to the length of the linked list
- Leetcode : 19. Remove Nth Node From End of List

---

## 💡 Points clés

- Floyd’s cycle finding algorithm or Hare-Tortoise algorithm is a pointer algorithm that uses only two pointers, moving through the sequence at different speeds. This algorithm is used to find a loop in a linked list. It uses two pointers one moving twice as fast as the other one. The faster one is called the fast pointer and the other one is called the slow pointer.
  - While traversing the linked list one of these things will occur-
    - **The Fast pointer may reach the end (NULL) which shows that there is no loop in the linked list.**
    - **The Fast pointer again catches the slow pointer at some time therefore a loop exists in the linked list.**
- **Floyd’s Cycle Finding Algorithm:**
  The idea is to start with the two pointers slow and fast, both starting at the head of the linked list.
  - **While traversing the List:** - slow pointer will move one step at a time. - fast pointer moves two step at a time. - If there’s a cycle, the fast pointer will eventually catch up with the slow pointer within the cycle because it’s moving faster. - If there’s no cycle, the fast pointer will reach the end of the list (i.e., it will become NULL).
    - **When the slow and fast pointers meet, a cycle or loop exists.**
- **Find Kth Node From End**
  To find the kth node from the end of a linked list, you can use the two-pointer technique. This method involves initializing two pointers, both starting at the head of the list. Move the first pointer k steps ahead. Then, move both pointers one step at a time until the first pointer reaches the end of the list. At this point, the second pointer will be at the kth node from the end.

  Here is a step-by-step explanation of the algorithm:

  - Initialize two pointers, slow and fast, both pointing to the head of the list.
  - Move the fast pointer k steps ahead.
  - If the fast pointer reaches null before moving k steps, return null as k is out of range.
  - Move both slow and fast pointers one step at a time until the fast pointer reaches the end of the list.
  - When the fast pointer reaches the end, the slow pointer will be at the kth node from the end.

- All cases work but doesn't work when n is equal to the length of the linked list
  - see the rest of the solution in `week-05/removeKthFromEnd.js`

## 📚 resources

- Leetcode : [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/);
- Leetcode : [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
- [Floyd’s Cycle Finding Algorithm](https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/#algorithm)
- [Floyd's cycle detection algorithm (Tortoise and hare) Video](https://youtu.be/PvrxZaH_eZ4?si=mcwZbXWDBXVMVxnW)
- [L8. Remove Nth Node from the end of the LinkedList | Multiple Approaches](https://youtu.be/3kMKYQ2wNIU?si=2Ry_QYk6Y53l0dv5)

### 📝 Exemples
