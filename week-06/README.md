# 📚 Semaine 6 – Notes d'apprentissage

## 🗓️ Date

Du [14/06/2025] au [15/06/2025]

---

## 🧠 Concepts appris

- Recap of Doubly Linked List ( how to create a node and a DLL constructor)
- DLL unshift
- DLL shift
- DLL insert

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

- **DLL Get** : Get a node at a particular index

  - To get the node at a particular index, we have to loop through the DLL
    - First initialize a temp variable to be equal to the head of the DLL ( temp = this.head) and also an index (i) variable to zero
    - while temp.next is not equal to null (meaning that we have not yet reach the end of the DLL) we change the valu of temp to be equal to the next node (temp = tem.next) also increment the index
    - Then we verify if the i is equal to the index we are looking (i = index)
      - If i equal to the index, we return the value of temp
      - Else, we continue looping through the DLL
  - verification. If the index we are trying to get the value is equal to 0, we just return the head of the DLL since the head is at index 0
  - **NB** : Note that we can also get the value by looping through the DLL starting at the end of the DLL

-**DLL insert** -

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
