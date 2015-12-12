
// # Unit tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('should run without errors', function(assert){
  var sll = new Needle.SinglyLinkedList();
  sll.insert("one");
  sll.insert("two");
  sll.insert("three");
  sll.remove("two");
  sll.removeNth(0);
  //sll.find();
  //sll.findNth();

  var result = sll.size;
  assert.equal(result, 0);
  assert.end();
});