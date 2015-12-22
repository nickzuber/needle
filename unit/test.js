
// # Unit tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('should run without errors', function(t){

  // ######################
  // # Singly Linked List #
  // ######################
  var sll = new Needle.SinglyLinkedList();

  // insertFront
  try{
    sll.insertFront("d1");
  }catch(e){
    t.fail("SinglyLinkedList.insertFront has failed.\n" + e.message);
  }

  // insertAfter
  try{
    var success = sll.insertAfter("d1", "d2");
    t.equal(success, true, "SinglyLinkedList.insertAfter attempt to insert a valid node.");
  }catch(e){
    t.fail("SinglyLinkedList.insertAfter has failed.\n" + e.message);
  }

  // insertNth
  try{
    sll.insertNth(0, "d0.5");
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


  // #########
  // # Queue #
  // #########
  var q = new Needle.Queue();

  // enqueue
  try{
    q.enqueue("d1");
  }catch(e){
    t.fail("Queue.enqueue has failed.\n" + e.message);
  }

  // dequeue
  try{
    q.dequeue();
  }catch(e){
    t.fail("Queue.enqueue has failed.\n" + e.message);
  }

  // ######################
  // # Doubly Linked List #
  // ######################
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