# 📚 Semaine 6 – Notes d'apprentissage

## 🗓️ Date

Du [14/06/2025] au [15/06/2025]

---

## 🧠 Concepts appris

- Recap of Doubly Linked List ( how to create a node and a DLL constructor)
- DLL unshift
- DLL shift

---

## 💡 Points clés

- **DLL unshift** : adding a node at the beginning of DLL

  - Two conditions to follow:
    - head and tail a both pointing to null (meaning the DLL is empty). To add the node at the beginning, head and tail will both point to the new node
    - If the DLL is not empty, newNode.next will be pointing to the head and Head.prev will now point to the newNode

- **DLL shift** : Removing the first node of DLL

  - Three conditions to follow:
    1. when the DLL is empty
       - If the DLL is empty meaning there is no node to be removed, then we need to return null
    2. when there is only one node in DLL
       - If there is only one node then both Head and Tail will be pointing to null
    3. When there is more than one element
       - If there is more than one element, the head will be pointing to head.next then head.prev will now point to null

- **Real-world situations where a Doubly Linked List (DLL)**

| Application          | Why DLL Fits Well                       |
| -------------------- | --------------------------------------- |
| Browser history      | Move back and forward efficiently       |
| Undo/redo            | Traverse backward or forward in actions |
| Music/video playlist | Easy navigation & modification          |
| Train system         | Flexible connection/removal of coaches  |
| Navigation route     | Bidirectional route management          |

## 📚 resources

-

### 📝 Exemples
