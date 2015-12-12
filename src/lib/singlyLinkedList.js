/**
 * Linked List
 * {head} Node, the head of the linked list
 * {size} int, the number of nodes in the linked list
 */

const Node = require('./unidirectional_node.js');

/**
 * Single argument constructor.
 * @param {*} [data] data for head node of linked list
 * @return {void}
 */
const SinglyLinkedList = function(data){
  this.head;
  this.size;
  if(typeof data !== 'undefined'){
    this.head = new Node(data);
    this.size = 1;
  }else{
    this.head = null;
    this.size = 0;
  }
};

/**
 * Create a node from given data and insert to end
 * of linked list.
 * @param {*} data for the new node
 * @return {void}
 */
SinglyLinkedList.prototype.insert = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.insert");
  }

  var nodeToAdd = new Node(data);
  
  // If the head has not been set, add this node as the head 
  if(this.head === null){
    this.head = nodeToAdd;
  }
  // If head is set, add node to end of the list
  else{
    var curNode = this.head;
    while(curNode.next !== null){
      curNode = curNode.next;
    }
    curNode.next = nodeToAdd;
    ++this.size;
  }
}

/**
 * Remove a node based on its given data
 * @param {*} data of node to remove
 * @return {boolean} true if node removal was successful
 *                   false if node not found
 */
SinglyLinkedList.prototype.remove = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.remove");
  }
  else if(this.size <= 0){
    throw new Error("Attempted to remove from an empty SinglyLinkedList");
  }
  else if(this.head === null && this.size > 0){
    throw new Error("Null head in an unemptied list. Please report this to https://github.com/nickzuber/needle/issues");
  }

  // Find index of node to delete
  var index = 0,
      curNode = this.head,
      nodeFound = false;

  while(curNode !== null){
    if(JSON.stringify(curNode.data) === JSON.stringify(data)){
      nodeFound = true;
      break;
    }
    ++index;
    curNode = curNode.next;
  }

  if(nodeFound){
    this.removeNth(index);
  }

  return nodeFound;

}

/**
 * Remove a node based on its position in the linked list
 * @param {int} index of node to remove
 * @returm {void}
 */
SinglyLinkedList.prototype.removeNth = function(index){
  if(typeof index !== 'number'){
    throw new Error("Invalid argument for SinglyLinkedList.removeNth");
  }
  // Check for bounds
  else if(index < 0 || index >= this.size){
    throw new Error("Index out of bounds; attempted to remove a node from a SinglyLinkedList that does not exist");
  }

  var prevNode = null;
  var curNode = this.head;
  
  // Check if deleting head
  if(index === 0){
    this.head = curNode.next;
    curNode = null;
    --this.size;
    return;
  }

  prevNode = curNode;
  curNode = curNode.next;

  for(var i=1; i<index; ++i){
    prevNode = curNode;
    curNode = curNode.next;
  }

  prevNode.next = curNode.next;
  curNode = null;
  --this.size;
  return;

}

/**
 * Find a node by a given value.
 */
SinglyLinkedList.prototype.find = function(data){

}

/**
 * Find a node at a given index.
 */
SinglyLinkedList.prototype.findNth = function(index){

}

module.exports = SinglyLinkedList;