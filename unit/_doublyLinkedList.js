
// # Doubly Linked List tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('Doubly Linked List should run without errors', function(t){
  
  var dll = new Needle.DoublyLinkedList();

  // insertFront
  try{
    dll.insertFront("d1");
  }catch(e){
    t.fail("DoublyLinkedList.insertFront has failed.\n" + e.message);
  }

  // insertAfter
  try{
    var success = dll.insertAfter("d1", "d2");
    t.equal(success, true, "DoublyLinkedList.insertAfter attempt to insert a valid node.");
  }catch(e){
    t.fail("DoublyLinkedList.insertAfter has failed.\n" + e.message);
  }

  // insertNth
  try{
    dll.insertNth(0, "d0.5");
  }catch(e){
    t.fail("DoublyLinkedList.insertAfter has failed.\n" + e.message);
  }

  // insertBack
  try{
    dll.insertBack("d2");
  }catch(e){
    t.fail("DoublyLinkedList.insertBack has failed.\n" + e.message);
  }

  // find
  try{
    success = dll.find("d1"); // => Node (not false)
    t.notEqual(success, false, "DoublyLinkedList.find attempt to find a valid node.");
    success = dll.find("doesntExist"); // => false
    t.equal(success, false, "DoublyLinkedList.find attempt to find an invalid node.");
  }catch(e){
    t.fail("DoublyLinkedList.find has failed.\n" + e.message);
  }

  // findNth
  try{
    dll.findNth(1);
  }catch(e){
    t.fail("DoublyLinkedList.findNth has failed.\n" + e.message);
  }
  
  // remove
  try{
    success = dll.remove("d1"); // => true
    t.equal(success, true, "DoublyLinkedList.remove attempt to remove a valid node.");
    success = dll.remove("doesntExist"); // => false
    t.equal(success, false, "DoublyLinkedList.remove attempt to remove an invalid node.");
  }catch(e){
    t.fail("DoublyLinkedList.remove has failed.\n" + e.message);
  }

  // removeNth
  try{
    dll.removeNth(1);
  }catch(e){
    t.fail("DoublyLinkedList.removeNth has failed.\n" + e.message);
  }
  
  t.end();
});