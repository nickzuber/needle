
// # Needle object that contains all core data structures

const SinglyLinkedList = require('./lib/singlyLinkedList.js');
const Queue = require('./lib/queue.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;
Needle.Queue = Queue;

exports = module.exports = Needle;
exports.Needle = Needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}