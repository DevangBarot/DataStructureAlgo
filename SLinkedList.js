class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value) {
    this.head = {
      value: value,
      next:null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value){
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index,value){
    if(index >= this.length){
      return this.append(value);
    }
    const newNode = new Node(value);
    
  }

  reverse(){
    if(!this.head.next){
      return this.head;
    }
    let firstItem = this.head;
    this.tail = this.firstItem;
    let secItem = this.firstItem.next;
    while(secItem) {
      const temp = secItem.next;
      secItem.next = firstItem;
      firstItem = secItem;
      secItem = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(20000,999)
myLinkedList.printList()
console.log(myLinkedList)

//Implementing Linked List
//10--->5---->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: { 
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }