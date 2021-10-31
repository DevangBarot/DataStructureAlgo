//Binary Search tree
class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree{
  constructor() {
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          } 
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookUp(){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left
      } else if( value > currentNode.value){
        currentNode = currentNode.right
      } else if(currentNode.value === value){
        return currentNode;
      }
    }
    return false;
  }

  remove(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode) {
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right
      } else if(currentNode.value === value){
        //we have a match , get to work;

        //option no right child
          if(currentNode.right === null){
            if(parentNode === null){
              this.root = currentNode.left;
            } else {
              // if parent > current value, make current left child  a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              }
            }
          }
        //right child which which dosen't have a left child


        //Right child that has a left child



      }
    }
  }
}

const myTree = new BinarySearchTree();
myTree.insert(9)
// JSON.stringfy(myTree)