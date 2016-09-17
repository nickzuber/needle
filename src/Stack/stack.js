/**
 * Stack
 * {top} Node, the first element in the stack
 * {size} number, the number of nodes in the stack
 * 
 * Asymptotic time complexities
 * +----------------+
 * | peek  |  O(1)  |
 * | push  |  O(1)  |
 * | pop   |  O(1)  |
 * +----------------+
 * 
 */

'use strict';

const Node = require('../__Nodes__/unidirectional_node.js');

/**
 * Single argument constructor.
 * @param {*} [data] data for top node of stack
 * @return {void}
 */
const Stack = function(data){
  this.top;
  this.size;
  if(typeof data !== 'undefined'){
    this.top = new Node(data);
    this.size = 1;
  }else{
    this.top = null;
    this.size = 0;
  }
}

/**
 * Returns the top of the stack.
 * @param {void}
 * @return {Node} the top of the stack
 */
Stack.prototype.peek = function(){
  return this.top;
}

/**
 * Creates a node with the given data and adds that node to the top of the stack
 * @param {*} data for head node of linked list
 * @return {void}
 */
Stack.prototype.push = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments in Stack.push");
  }

  // Create new node
  var newNode = new Node(data);
  
  // Push new node onto top
  var prevTop = this.top;
  this.top = newNode;
  this.top.next = prevTop;
  ++this.size;
}

/**
 * Removes the node at the top of the stack.
 * @param {void}
 * @return {Node} the Node that is being deleted
 */
Stack.prototype.pop = function(){
  if(this.size === 0){
    throw new Error("Attempted to remove from empty stack in Stack.pop");
  }
  // Remove from the top
  var newTop = this.top.next;
  var oldTop = this.top;
  this.top = newTop;
  --this.size;
  return oldTop;
}

module.exports = Stack;