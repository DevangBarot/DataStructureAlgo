//Implementing Stack with LinkedList Ex : 1
// class Node{
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack{
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek(){
//     return this.top;
//   }

//   push(value){
//     const newNode = new Node(value);
//     if(this.length === 0){
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer
//     }
//     this.length++;
//     return this;
//   }

//   pop(){
//     if(!this.top){
//       return null;
//     }
//     if(this.top === this.bottom){
//       this.bottom = null;
//     }
//     // const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
// }

// const myStack = new Stack();
// myStack.push('Google')
// myStack.push('Udemy')
// myStack.push('Discord')
// myStack.peek()
// myStack.pop();
// myStack.pop();
// myStack.pop();

//google
//Udemy
//Discord

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
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(20000,999)
myLinkedList.printList()
console.log(myLinkedList)
