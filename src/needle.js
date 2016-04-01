/**
 * Native Needle definition file for Node and browser.
 * All of the data structures are bound to the Needle object and shipped.
 */

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
const BitArray = require('./lib/bitArray.js');
const KaryTree = require('./lib/karyTree.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;
Needle.Queue = Queue;
Needle.Stack = Stack;
Needle.DoublyLinkedList = DoublyLinkedList;
Needle.BinaryHeap = BinaryHeap;
Needle.BinarySearchTree = BinarySearchTree;
Needle.Hashmap = Hashmap;
Needle.SortedArray = SortedArray;
Needle.RollingHash = RollingHash;
Needle.BitArray = BitArray;
Needle.KaryTree = KaryTree;

exports = module.exports = Needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}