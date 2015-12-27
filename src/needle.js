
// # Needle object that contains all core data structures

'use strict';

const SinglyLinkedList = require('./lib/singlyLinkedList.js');
const Queue = require('./lib/queue.js');
const DoublyLinkedList = require('./lib/doublyLinkedList.js');
const PriorityQueue = require('./lib/priorityQueue.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;
Needle.Queue = Queue;
Needle.DoublyLinkedList = DoublyLinkedList;
Needle.PriorityQueue = PriorityQueue;

exports = module.exports = Needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}