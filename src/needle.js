
// Main needle file that includes all of the data structures contained in a single Needle object

const SinglyLinkedList = require('./lib/singlyLinkedList.js');

const Needle = {};

Needle.SinglyLinkedList = SinglyLinkedList;

exports = module.exports = Needle;
exports.Needle = Needle;