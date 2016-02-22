/**
 * Doubly Linked List
 * {head} Node, the head of the linked list
 * {tail} Node, the end of the linked list
 * {size} number, the number of nodes in the linked list
 * 
 * Asymptotic time complexities
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

const Node = require('./bidirectional_node.js');

/**
 * Single argument constructor.
 * @param {*} [data] data for head node of linked list
 * @return {void}
 */
const DoublyLinkedList = function(data){
  this.head;
  this.tail;
  this.size;
  if(typeof data !== 'undefined'){
    this.head = new Node(data);
    this.tail = this.head;
    this.size = 1;
  }else{
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

/**
 * Create a node from given data and insert to front
 * of linked list.
 * @param {*} data for the new node
 * @return {void}
 */
DoublyLinkedList.prototype.insertFront = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.insertFront");
  }

  var nodeToAdd = new Node(data);
  
  // If the head has not been set, add this node as the head 
  if(this.head === null && this.tail === null){
    this.head = nodeToAdd;
    this.tail = this.head;
  }
  // If head and tail are set, add node to front of the list
  else if(this.head !== null && this.tail !== null){
    var prevHead = this.head;
    prevHead.prev = nodeToAdd;
    this.head = nodeToAdd;
    this.head.next = prevHead;
    this.head.prev = null;
  }
  // If head and tail are not in sync, throw error
  else{
    throw new Error("Unsynced head and tail in an Doubly Linked List. Please report this to https://github.com/nickzuber/needle/issues");
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
DoublyLinkedList.prototype.insertNth = function(index, data){
  if(typeof data === 'undefined' || typeof index === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.insertNth");
  }else if(typeof index !== 'number'){
    throw new TypeError("Invalid argument for DoublyLinkedList.insertNth");
  }
  // Check for bounds (and if inserting at index 0 we want to allow)
  else if(index < 0 || index >= this.size && index !== 0){
    throw new Error("Index out of bounds on DoublyLinkedList.insertNth");
  }
  
  // Check if inserting at head
  if(index === 0){
    this.insertFront(data);
    return;
  }
  
  // If head is empty, we obviously won't find the targetNode
  if(this.head === null){
    return false;
  }

  // Check if inserting at tail
  if(index === this.size-1){
    this.insertBack(data);
    return;
  }

  // Configure finder nodes
  // We can assume we are not inserting at head
  var nodeToAdd = new Node(data),
      curNode = this.head;

  for(var i=1; i<index; ++i){
    curNode = curNode.next;
  }

  var tempNode = curNode.next;
  curNode.next = nodeToAdd;
  tempNode.prev = nodeToAdd;
  nodeToAdd.prev = curNode;
  nodeToAdd.next = tempNode;
  ++this.size;
}

/**
 * Create a node from given data and inserts after a given node.
 * of linked list.
 * @param {*} the data of the node which the new node is to be inserted after
 * @param {*} data for the new node
 * @return {boolean} returns if node is inserted or not
 */
DoublyLinkedList.prototype.insertAfter = function(targetData, data){
  if(typeof data === 'undefined' || typeof targetData === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.insertAfter");
  }
  // If head is empty, we obviously won't find the targetNode
  if(this.head === null){
    return false;
  }

  // Configure finder nodes
  var nodeToAdd = new Node(data),
      curNode = this.head,
      nodeFound = false,
      _curNodedata,
      _targetData;

  // JSON.stringify is very expensive - only perform if necessary
  if(typeof targetData === 'object'){
    _targetData = JSON.stringify(targetData);
  }else{
    _targetData = targetData;
  }
  if(typeof curNode.data === 'object'){
    _curNodedata = JSON.stringify(curNode.data);
  }else{
    _curNodedata = curNode.data;
  }

  // Check if inserting after tail
  if(JSON.stringify(this.tail.data) === JSON.stringify(targetData)){
    this.insertBack(data);
    return true;
  }

  while(curNode !== null){
    // JSON.stringify is very expensive - only perform if necessary
    if(typeof curNode.data === 'object'){
      _curNodedata = JSON.stringify(curNode.data);
    }else{
      _curNodedata = curNode.data;
    }
    if(_curNodedata === _targetData){
      nodeFound = true;
      break;
    }
    curNode = curNode.next;
  }

  if(nodeFound){
    var tempNode = curNode.next;
    curNode.next = nodeToAdd;
    tempNode.prev = nodeToAdd;
    nodeToAdd.prev = curNode;
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
DoublyLinkedList.prototype.insertBack = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.insert");
  }

  var nodeToAdd = new Node(data);
  
  // If the head has not been set, add this node as the head 
  if(this.head === null){
    this.head = nodeToAdd;
    this.tail = this.head;
  }
  // If head is set, add node to end of the list
  else{
    nodeToAdd.next = null;
    nodeToAdd.prev = this.tail;
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
  }
  ++this.size;
}

/**
 * Remove a node based on its given data
 * @param {*} data of node to remove
 * @return {boolean} true if node removal was successful
 *                   false if node not found
 */
DoublyLinkedList.prototype.remove = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.remove");
  }
  else if(this.size <= 0){
    throw new Error("Attempted to remove from an empty DoublyLinkedList");
  }
  else if(this.size === 1){
    this.head = null;
    this.tail = null;
    this.size = 0;
    return;
  }
  else if(this.head === null && this.size > 0){
    throw new Error("Null head in an unemptied list. Please report this to https://github.com/nickzuber/needle/issues");
  }

  // Configure finder nodes
  var curNode = this.head,
      nodeFound = false,
      _curNodedata,
      _data;

  // JSON.stringify is very expensive - only perform if necessary
  if(typeof data === 'object'){
    _data = JSON.stringify(data);
  }else{
    _data = data;
  }
  if(typeof curNode.data === 'object'){
    _curNodedata = JSON.stringify(curNode.data);
  }else{
    _curNodedata = curNode.data;
  }

  // Check if deleting head
  if(JSON.stringify(this.head.data) === JSON.stringify(data)){
    this.head = curNode.next;
    this.head.prev = null;
    curNode = null;
    --this.size;
    return true;
  }

  // Check if deleting tail
  if(JSON.stringify(this.tail.data) === JSON.stringify(data)){
    curNode = this.tail;
    this.tail = curNode.prev;
    this.tail.next = null;
    curNode = null;
    --this.size;
    return true;
  }

  // Update nodes to account for head not being the node to delete
  curNode = curNode.next;

  while(curNode !== null){
    if(typeof curNode.data === 'object'){
      _curNodedata = JSON.stringify(curNode.data);
    }else{
      _curNodedata = curNode.data;
    }
    if(_curNodedata === _data){
      nodeFound = true;
      var prevNode = curNode.prev;
      prevNode.next = curNode.next;
      curNode.next.prev = prevNode;
      curNode = null;
      --this.size;
      break;
    }
    curNode = curNode.next;
  }

  return nodeFound;

}

/**
 * Remove a node based on the given position in the linked list
 * @param {number} index of node to remove
 * @return {void}
 */
DoublyLinkedList.prototype.removeNth = function(index){
  if(typeof index === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.removeNth");
  }
  else if(typeof index !== 'number'){
    throw new TypeError("Invalid argument for DoublyLinkedList.removeNth");
  }
  // Check for bounds
  else if(index < 0 || index >= this.size){
    throw new Error("Index out of bounds on DoublyLinkedList.removeNth: " + index);
  }
  else if(this.size === 1){
    this.head = null;
    this.tail = null;
    this.size = 0;
    return;
  }

  var curNode = this.head;
  
  // Check if deleting head
  if(index === 0){
    this.head = curNode.next;
    this.head.prev = null;
    curNode = null;
    --this.size;
    return;
  }

  // Check if deleting tail
  if(index === this.size-1){
    curNode = this.tail;
    this.tail = curNode.prev;
    this.tail.next = null;
    curNode = null;
    --this.size;
    return true;
  }

  curNode = curNode.next;

  for(var i=1; i<index; ++i){
    curNode = curNode.next;
  }

  var prevNode = curNode.prev;
  prevNode.next = curNode.next;
  curNode.next.prev = prevNode;
  curNode = null;
  --this.size;
  return;

}

/**
 * Find a node by a given value
 * @param {*} data of node to find
 * @return {boolean || Node} returns node found and false if not found
 */
DoublyLinkedList.prototype.find = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for DoublyLinkedList.find");
  }
  else if(this.size <= 0){
    throw new Error("Attempted to find a node from an empty DoublyLinkedList");
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
DoublyLinkedList.prototype.findNth = function(index){
  if(typeof index === 'undefined'){
    throw new TypeError("Too few arguments for DoublyLinkedList.findNth");
  }else if(typeof index !== 'number'){
    throw new TypeError("Invalid argument for DoublyLinkedList.findNth");
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

module.exports = DoublyLinkedList;