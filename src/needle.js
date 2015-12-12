
// Main needle file that includes all of the data structures contained in a single Needle object

const LinkedList = require('./lib/linkedList.js');

const Needle = {};

Needle.LinkedList = LinkedList;

exports = module.exports = Needle;
exports.Needle = Needle;

// Push Needle on the global scope (mainly for testing)
window.Needle = Needle;