
// # Needle object that contains all core data structures

const SinglyLinkedList = require('./lib/singlyLinkedList.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;

exports = module.exports = Needle;
exports.Needle = Needle;

// If attempting to run in browser, push Needle on global scope
if(typeof window !== 'undefined'){
  window.Needle = Needle;
}