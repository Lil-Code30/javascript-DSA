# 📚 Semaine 4 – Notes d'apprentissage

## 🗓️ Date

Du [10/05/2025] au [11/05/2025]

---

## 🧠 Concepts appris

- Floyd’s Cycle Finding Algorithm
- 003 LL Has Loop ( Interview Question)

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

## 📚 resources

- Leetcode : [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/);
- [Floyd’s Cycle Finding Algorithm](https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/#algorithm)
- [Floyd's cycle detection algorithm (Tortoise and hare) Video](https://youtu.be/PvrxZaH_eZ4?si=mcwZbXWDBXVMVxnW)

### 📝 Exemples
