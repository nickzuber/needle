/**
 * Needle definition file and export libs.
 */

'use strict';

const SinglyLinkedList = require('./SinglyLinkedList');
const Queue = require('./Queue');
const Stack = require('./Stack');
const DoublyLinkedList = require('./DoublyLinkedList');
const BinaryHeap = require('./BinaryHeap');
const BinarySearchTree = require('./BinarySearchTree');
const Hashmap = require('./Hashmap');
const SortedArray = require('./SortedArray');
const RollingHash = require('./RollingHash');
const BitArray = require('./BitArray');
const KaryTree = require('./KaryTree');

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

// If attempting to run in browser, add Needle to the global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}
