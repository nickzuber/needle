
// # Needle object that contains all core data structures

'use strict';

const SinglyLinkedList = require('./lib/singlyLinkedList.js');
const Queue = require('./lib/queue.js');
const Stack = require('./lib/stack.js');
const DoublyLinkedList = require('./lib/doublyLinkedList.js');
const BinaryHeap = require('./lib/binaryHeap.js');
const BinarySearchTree = require('./lib/binarySearchTree.js');
const Hashmap = require('./lib/hashmap.js');
const SortedArray = require('./lib/sortedArray.js');
const RollingHash = require('./lib/rollingHash.js');

const needle = {};

needle.SinglyLinkedList = SinglyLinkedList;
needle.Queue = Queue;
needle.Stack = Stack;
needle.DoublyLinkedList = DoublyLinkedList;
needle.BinaryHeap = BinaryHeap;
needle.BinarySearchTree = BinarySearchTree;
needle.Hashmap = Hashmap;
needle.SortedArray = SortedArray;
needle.RollingHash = RollingHash;

exports = module.exports = needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.needle = needle;
}