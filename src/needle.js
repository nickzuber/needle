
// Main needle file that includes all of the data structures contained in a single Needle object

const Node = require('./lib/node.js');
const LinkedList = require('./lib/linkedList.js');

const Needle = {};

Needle.Node = Node;
Needle.LinkedList = LinkedList;

module.exports = Needle;