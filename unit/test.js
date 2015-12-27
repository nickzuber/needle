
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

  // ##################
  // # Priority Queue #
  // ##################
  var Node = function(key, value){
    this.key = key;
    this.value = value;
  }

  var pq = new Needle.PriorityQueue(function(a, b){
    return a.key < b.key;
  });

  // insert
  try{
    pq.insert(new Node(3, "Level 3"));
    pq.insert(new Node(1, "Level 1"));
    pq.insert(new Node(2, "Level 2"));
    t.equal(pq.getMin().key, 1, "PriorityQueue.insert checking to see if inserted elements properly & if PriorityQueue.getMin works properly.");
  }catch(e){
    t.fail("PriorityQueue.insert / PriorityQueue.getMin has failed.\n" + e.message);
  }

  // removeMin
  try{
    pq.removeMin();
    t.equal(pq.getMin().key, 2, "PriorityQueue.removeMin checking to see if new min has been selected properly.");
  }catch(e){
    t.fail("PriorityQueue.removeMin has failed.\n" + e.message);
  }
  
  t.end();
});