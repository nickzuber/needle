
// # Binary Search Tree tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('Binary Search Tree should run without errors', function(t){
  
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
    success = bst.search(99); // => false
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