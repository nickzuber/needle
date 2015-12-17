
// # Unit tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('should run without errors', function(t){

  // # Singly Linked List
  var sll = new Needle.SinglyLinkedList();

  // insertFront
  try{
    sll.insertFront("d1");
  }catch(e){
    t.fail("SinglyLinkedList.insertFront has failed.\n" + e.message);
  }

  // insertAfter
  try{
    console.log(sll);
    var success = sll.insertAfter("d1", "d2");
    console.log(sll);
    t.equal(success, true, "SinglyLinkedList.insertAfter attempt to insert a valid node.");
  }catch(e){
    t.fail("SinglyLinkedList.insertAfter has failed.\n" + e.message);
  }

  // insertNth
  try{
    sll.insertNth(0, "d0.5");
    t.equal(success, true, "SinglyLinkedList.insertNth attempt.");
  }catch(e){
    t.fail("SinglyLinkedList.insertAfter has failed.\n" + e.message);
  }

  // insertBack
  try{
    sll.insertBack("d2");
  }catch(e){
    t.fail("SinglyLinkedList.insertBack has failed.\n" + e.message);
  }

  // find
  try{
    success = sll.find("d1"); // => Node (not false)
    t.notEqual(success, false, "SinglyLinkedList.find attempt to find a valid node.");
    success = sll.find("doesntExist"); // => false
    t.equal(success, false, "SinglyLinkedList.find attempt to find an invalid node.");
  }catch(e){
    t.fail("SinglyLinkedList.find has failed.\n" + e.message);
  }

  // findNth
  try{
    sll.findNth(1);
  }catch(e){
    t.fail("SinglyLinkedList.findNth has failed.\n" + e.message);
  }
  
  // remove
  try{
    success = sll.remove("d1"); // => true
    t.equal(success, true, "SinglyLinkedList.remove attempt to remove a valid node.");
    success = sll.remove("doesntExist"); // => false
    t.equal(success, false, "SinglyLinkedList.remove attempt to remove an invalid node.");
  }catch(e){
    t.fail("SinglyLinkedList.remove has failed.\n" + e.message);
  }

  // removeNth
  try{
    sll.removeNth(1);
  }catch(e){
    t.fail("SinglyLinkedList.removeNth has failed.\n" + e.message);
  }
  
  t.end();
});