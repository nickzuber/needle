
// # Needle object that contains all core data structures

const SinglyLinkedList = require('./lib/singlyLinkedList.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;

exports = module.exports = Needle;
exports.Needle = Needle;

// temporary for client side testing
//window.Needle = Needle;