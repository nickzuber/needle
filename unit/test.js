
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
    q.enqueue("d2");
    q.enqueue("d3");
    t.equal(q.front.data, "d1", "Queue.enqueue checking to see if order is kept.");
  }catch(e){
    t.fail("Queue.enqueue has failed.\n" + e.message);
  }

  // dequeue
  try{
    q.dequeue();
    t.equal(q.front.data, "d2", "Queue.enqueue checking to see if order is kept.");
  }catch(e){
    t.fail("Queue.enqueue has failed.\n" + e.message);
  }

  // #########
  // # Stack #
  // #########
  var s = new Needle.Stack();

  // push / peek
  try{
    s.push("d1");
    s.push("d2");
    s.push("d3");
    t.equal(s.peek().data, "d3", "Stack.push checking to see if order is kept & if Stack.peek is returning the top.");
  }catch(e){
    t.fail("Stack.push / Stack.peek has failed.\n" + e.message);
  }

  // pop
  try{
    var v = s.pop();
    t.equal(v.data, "d3", "Stack.pop checking to see if previous top was returned.");
    t.equal(s.peek().data, "d2", "Stack.peek checking to see if correct the top is returned.");
  }catch(e){
    t.fail("Stack.pop has failed.\n" + e.message);
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

  // ###############
  // # Binary Heap #
  // ###############
  var Node = function(key, value){
    this.key = key;
    this.value = value;
  }

  var bh = new Needle.BinaryHeap(function(a, b){
    return a.key < b.key;
  });

  // insert / peek
  try{
    bh.insert(new Node(3, "Level 3"));
    bh.insert(new Node(1, "Level 1"));
    bh.insert(new Node(2, "Level 2"));
    t.equal(bh.peek().key, 1, "BinaryHeap.insert checking to see if inserted elements properly & if BinaryHeap.peek works properly.");
  }catch(e){
    t.fail("BinaryHeap.insert / BinaryHeap.peek has failed.\n" + e.message);
  }

  // size (also tests insert)
  try{
    var newBh = new Needle.BinaryHeap();

    // add 100 elements
    for(var i=0; i<100; ++i){
      var rand = Math.floor(Math.random() * 100) + 1;
      newBh.insert(rand);
    }
    t.equal(newBh.size(), 100, "BinaryHeap.size checking to see if correct number of elements were inserted.");
  }catch(e){
    t.fail("BinaryHeap.size / BinaryHeap.insert has failed.\n" + e.message);
  }

  // delete
  try{
    bh.delete();
    t.equal(bh.peek().key, 2, "BinaryHeap.delete checking to see if new min has been selected properly.");
  }catch(e){
    t.fail("BinaryHeap.delete has failed.\n" + e.message);
  }

  // ######################
  // # Binary Search Tree #
  // ######################

  var bst = new Needle.BinarySearchTree();

  // insert
  try{
    bst.insert(4);
    bst.insert(3);
    bst.insert(1);
    bst.insert(8);
    bst.insert(5);
    bst.insert(4);
    bst.insert(9);
  }catch(e){
    t.fail("BinarySearchTree.insert has failed.\n" + e.message);
  }

  // search
  try{
    success = bst.search(99); // -> false
    t.equal(success, false, "BinarySearchTree.search attempt to find an invalid node.");
    success = bst.search(4); // => Node (not false)
    t.notEqual(success, false, "BinarySearchTree.search attempt to find a valid node.");
  }catch(e){
    t.fail("BinarySearchTree.search has failed.\n" + e.message);
  }

  // checking the order
  try{
    // Store bst into arr[] in order (lowest to highest)
    // and see if tree properly sorted these elements
    var arr = [];
    function inorderTraverse(node){
      if(node === null){
        return;
      }
      inorderTraverse(node.left);
      arr.push(node.data);
      inorderTraverse(node.right);
    }
    inorderTraverse(bst.root);

    // Check for ascending order
    var prev = arr[0];
    for(var i=1; i<arr.length; ++i){
      if(prev <= arr[i]){
        prev = arr[i];
      }else{
        t.fail("BinarySearchTree has failed to correctly sort the elements in the tree.");
      }
    }
  }catch(e){
    t.fail("BinarySearchTree has failed.\n" + e.message);
  }
  
  t.end();
});