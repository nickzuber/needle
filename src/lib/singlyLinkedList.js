/**
 * Singly Linked List
 * {head} Node, the head of the linked list
 * {size} number, the number of nodes in the linked list
 * 
 * Time complexities (worst case)
 * +-----------------------+
 * | insertFront  |  O(1)  |
 * | insertNth    |  O(n)  |
 * | insertAfter  |  O(n)  |
 * | insertBack   |  O(n)  |
 * | remove       |  O(n)  |
 * | removeNth    |  O(n)  |
 * | find         |  O(n)  |
 * | findNth      |  O(n)  |
 * +-----------------------+
 * 
 */
 
'use strict';

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
}

/**
 * Create a node from given data and insert to front
 * of linked list.
 * @param {*} data for the new node
 * @return {void}
 */
SinglyLinkedList.prototype.insertFront = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.insertFront");
  }

  var nodeToAdd = new Node(data);
  
  // If the head has not been set, add this node as the head 
  if(this.head === null){
    this.head = nodeToAdd;
  }
  // If head is set, add node to front of the list
  else{
    var prevHead = this.head;
    this.head = nodeToAdd;
    this.head.next = prevHead;
  }
  ++this.size;
}

/**
 * Create a node from given data and insert in given location
 * of linked list.
 * @param {number} position for new node to be added
 * @param {*} data for the new node
 * @return {void}
 */
SinglyLinkedList.prototype.insertNth = function(index, data){
  if(typeof data === 'undefined' || typeof index === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.insertNth");
  }else if(typeof index !== 'number'){
    throw new TypeError("Invalid argument for SinglyLinkedList.insertNth");
  }
  // Check for bounds
  else if(index < 0 || index >= this.size){
    throw new Error("Index out of bounds on SinglyLinkedList.insertNth");
  }
  // If head is empty, we obviously won't find the targetNode
  if(this.head === null){
    return false;
  }

  // Check if inserting at head
  if(index === 0){
    this.insertFront(data);
    return;
  }

  // Configure finder nodes
  var nodeToAdd = new Node(data),
      curNode = this.head;

  for(var i=1; i<index; ++i){
    curNode = curNode.next;
  }

  var tempNode = curNode.next;
  curNode.next = nodeToAdd;
  nodeToAdd.next = tempNode;
  ++this.size;
}

/**
 * Create a node from given data and inserts after a given node.
 * @param {*} the data of the node which the new node is to be inserted after
 * @param {*} data for the new node
 * @return {boolean} returns if node is inserted or not
 */
SinglyLinkedList.prototype.insertAfter = function(targetData, data){
  if(typeof data === 'undefined' || typeof targetData === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.insertAfter");
  }
  // If head is empty, we obviously won't find the targetNode
  if(this.head === null){
    return false;
  }

  // Configure finder nodes
  var nodeToAdd = new Node(data),
      curNode = this.head,
      nodeFound = false; 

  while(curNode !== null){
    if(JSON.stringify(curNode.data) === JSON.stringify(targetData)){
      nodeFound = true;
      break;
    }
    curNode = curNode.next;
  }

  if(nodeFound){
    var tempNode = curNode.next;
    curNode.next = nodeToAdd;
    nodeToAdd.next = tempNode;
    ++this.size;
    return true;
  }else{
    return false;
  }
}

/**
 * Create a node from given data and insert to end
 * of linked list.
 * @param {*} data for the new node
 * @return {void}
 */
SinglyLinkedList.prototype.insertBack = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.insertBack");
  }

  var nodeToAdd = new Node(data);
  
  // If the head has not been set, add this node as the head 
  if(this.head === null){
    this.head = nodeToAdd;
  }
  // If head is set, add node to end of the list
  else{
    var curNode = this.head;
    // Find the node without a next element (will be the tail)
    while(curNode.next !== null){
      curNode = curNode.next;
    }
    curNode.next = nodeToAdd;
  }
  ++this.size;
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

  // Configure finder nodes
  var prevNode = null,
      curNode = this.head,
      nodeFound = false;

  // Check if deleting head
  if(JSON.stringify(curNode.data) === JSON.stringify(data)){
    this.head = curNode.next;
    curNode = null;
    --this.size;
    return true;
  }

  // Update nodes to account for head not being the node to delete
  prevNode = curNode;
  curNode = prevNode.next;

  while(curNode !== null){
    if(JSON.stringify(curNode.data) === JSON.stringify(data)){
      nodeFound = true;
      prevNode.next = curNode.next;
      curNode = null;
      --this.size;
      break;
    }
    prevNode = curNode;
    curNode = curNode.next;
  }

  return nodeFound;

}

/**
 * Remove a node based on the given position in the linked list
 * @param {number} index of node to remove
 * @return {void}
 */
SinglyLinkedList.prototype.removeNth = function(index){
  if(typeof index === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.removeNth");
  }else if(typeof index !== 'number'){
    throw new TypeError("Invalid argument for SinglyLinkedList.removeNth");
  }
  // Check for bounds
  else if(index < 0 || index >= this.size){
    throw new Error("Index out of bounds on SinglyLinkedList.removeNth");
  }/**
 * Remove a node based on its position in the linked list
 * @param {number} index of node to remove
 * @returm {void}
 */

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
 * Find a node by a given value
 * @param {*} data of node to find
 * @return {boolean || Node} returns node found and false if not found
 */
SinglyLinkedList.prototype.find = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for SinglyLinkedList.find");
  }
  else if(this.size <= 0){
    throw new Error("Attempted to find a node from an empty SinglyLinkedList");
  }
  else if(this.head === null && this.size > 0){
    throw new Error("Null head in an unemptied list. Please report this to https://github.com/nickzuber/needle/issues");
  }

  // Find index of node to delete
  var curNode = this.head,
      nodeFound = false;

  while(curNode !== null){
    if(JSON.stringify(curNode.data) === JSON.stringify(data)){
      nodeFound = true;
      break;
    }
    curNode = curNode.next;
  }

  if(nodeFound){
    return curNode;
  }else{
    return false;
  }
}

/**
 * Find a node based on its position in the linked list
 * @param {number} index of node to find
 * @returm {Node} the node at the given position
 */
SinglyLinkedList.prototype.findNth = function(index){
  if(typeof index === 'undefined'){
    throw new TypeError("Too few arguments for SinglyLinkedList.findNth");
  }else if(typeof index !== 'number'){
    throw new TypeError("Invalid argument for SinglyLinkedList.findNth");
  }
  // Check for bounds
  else if(index < 0 || index >= this.size){
    throw new Error("Index out of bounds; attempted to find a node from a SinglyLinkedList that does not exist");
  }
  else if(this.head === null && this.size > 0){
    throw new Error("Null head in an unemptied list. Please report this to https://github.com/nickzuber/needle/issues");
  }

  var curNode = this.head;

  for(var i=0; i<index; ++i){
    curNode = curNode.next;
  }

  return curNode;
}

module.exports = SinglyLinkedList;