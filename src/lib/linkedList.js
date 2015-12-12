/**
 * Linked List
 * {head} Node, the head of the linked list
 * {size} int, the number of nodes in the linked list
 */

const Node = require('./lib/unidirectional_node.js');

/**
 * Single argument constructor.
 * @param {*} [data] data for head node of linked list
 * @return {void}
 */
const LinkedList = function(data){
  this.data;
  this.size;
  if(typeof data !== 'undefined' && data){
    this.head = new Node(data);
    this.size = 1;
  }else{
    this.data = undefined;
    this.size = 0;
  }
};

module.exports = LinkedList;