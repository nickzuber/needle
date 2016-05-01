/** 
 * Binary Search Tree
 * {root} Node, the root of the tree
 * {compare} function, compares two elements to each other to determine the ordering of the heap
 *                     defaults to basic (a < b) => true
 * 
 * Asymptotic time complexities
 * +------------------------------+
 * | hasRight         | O(1)      |
 * | hasLeft          | O(1)      |
 * | isLeaf           | O(1)      |
 * | emptySubtree     | O(n)      |
 * | emptyTree        | O(n)      |
 * | heightSubtree    | O(n)      |
 * | numNodesSubtree  | O(1)      |
 * | numLeavesSubtree | O(1)      |
 * | insert           | O(n)      |
 * | search           | O(n)      |
 * +------------------------------+
 * 
 * TODO: let user set a custom `equal` function
 * 
 */

 'use strict';

const Node = require('./bidirectional_tree_node.js');

/** @private @default
 * Compares two elements and returns.
 * @param {number} first index to compare
 * @param {number} second index to compare
 * @return {boolean} returns true if left hand element is less than right hand element
 */
function defaultCompare(a, b){
  return (a < b);
}

/** @private
 * Acts as the wrapper for the compare function. Checks to make sure the elements
 * being compared are done so correctly by returning false if an element is undefined.
 * @param {number} first index to compare
 * @param {number} second index to compare
 * @param {function} the actual compare function
 * @return {boolean} returns true if left hand element is less than right hand element
 */
function safeCompare(a, b, callback){
  if(typeof callback !== 'function'){
    throw new TypeError("Compare must be a function in BinarySearchTree");
  }
  if((typeof a === 'undefined' && typeof b !== 'undefined') || (typeof a !== 'undefined' && typeof b === 'undefined')){
    return false;
  }else if(typeof a !== 'undefined' && typeof b !== 'undefined'){
    return callback(a, b);
  }else{
    throw new TypeError("Comparing two undefined elements in BinarySearchTree. Please report this to https://github.com/nickzuber/needle/issues");
  }
}

/**
 * Single argument constructor.
 * @param {function} [compare] function that compares the elements in the heap
 *                             this is only needed if the elements have some
 *                             custom way to determine their order
 * @return {void}
 */
const BinarySearchTree = function(compare){
  this.root = null;
  this.compare = defaultCompare;
  if(typeof compare === 'function'){
    this.compare = compare;
  }
}

/**
 * Checks if the given node has a right branch.
 * @param {Node} the node being checked
 * @return {boolean} returns true if node has right branch
 */
BinarySearchTree.prototype.hasRight = function(node){
  return (node.right !== null);
}

/**
 * Checks if the given node has a left branch.
 * @param {Node} the node being checked
 * @return {boolean} returns true if node has left branch
 */
BinarySearchTree.prototype.hasLeft = function(node){
  return (node.left !== null);
}

/**
 * Checks if the given node is a leaf.
 * @param {Node} the node being checked
 * @return {boolean} returns true if node is a leaf
 */
BinarySearchTree.prototype.isLeaf = function(node){
  return ((node.left === null) && (node.right === null));
}

/**
 * Empties the subtree of the given node.
 * @param {Node} the root of the subtree being emptied
 * @return {void}
 */
BinarySearchTree.prototype.emptySubtree = function(node){
  if(node === null){
    return;
  }
  this.emptySubtree(node.left);
  node.left = null;
  this.emptySubtree(node.right);
  node.right = null;
  node = null;
}

/**
 * Empties the entire tree.
 * @param {void}
 * @return {void}
 */
BinarySearchTree.prototype.emptyTree = function(){
  if(this.root === null){
    throw new Error("Attempted to empty a nulled tree in BinarySearchTree.emptyTree");
  }
  this.emptySubtree(this.root);
  this.root = null;
}

/**
 * Find the height of a subtree.
 * @param {Node} the root of the subtree
 * @return {number} the height of the subtree
 */
BinarySearchTree.prototype.heightSubtree = function(node){
  if(node === null){
    return 0;
  }
  return (1 + Math.max(this.heightSubtree(node.left), this.heightSubtree(node.right)));
}

/**
 * Find the number of nodes in a subtree.
 * @param {Node} the root of the subtree
 * @return {number} the number of nodes in the subtree
 */
BinarySearchTree.prototype.numNodesSubtree = function(node){
  if(node === null){
    return 0;
  }
  return (1 + (this.numNodesSubtree(node.left) + this.numNodesSubtree(node.right)));
}

/**
 * Find the number of leaves in a subtree.
 * @param {Node} the root of the subtree
 * @return {number} the number of leaves in the subtree
 */
BinarySearchTree.prototype.numLeavesSubtree = function(node){
  if(node === null){
    return 0;
  }else if(node.left === null && node.right === null){
    return 1;
  }
  return (this.numLeavesSubtree(node.left) + this.numLeavesSubtree(node.right));
}

/**
 * Insert a node into the tree.
 * @param {*} the data of the node being added
 * @param {Node} [node] the node where to begin the insertion. This should be left blank when called
 *                      because the function default to inserting at the root.
 * @return {void}
 */
BinarySearchTree.prototype.insert = function(data, node){
  if(node === null){
    throw new Error("Attemped to insert node in a nulled location in BinarySearchTree.insert");
  }

  // If root is null, set the root
  if(this.root === null){
    this.root = new Node(data);
    return;
  }

  // If node isn't defined, default to the root
  if(typeof node === 'undefined'){
    node = this.root;
  }

  if(safeCompare(data, node.data, this.compare)){
    // If left node is empty, insert there
    if(!this.hasLeft(node)){
      node.left = new Node(data);
    }else{
      this.insert(data, node.left);
    }
  }else{
    // If right node is empty, insert there
    if(!this.hasRight(node)){
      node.right = new Node(data);
    }else{
      this.insert(data, node.right);
    }
  }
}

/**
 * Search for a node in the tree.
 * @param {*} the data of the node being searched for
 * @param {Node} [node] the node where to begin the insertion. This should be left blank when called
 *                      because the function default to inserting at the root.
 * @return {Node || false} returns the node if found, and false if not found
 */
BinarySearchTree.prototype.search = function(data, node){
  if(node === null){
    return false;
  }

  // If node isn't defined, default to the root
  if(typeof node === 'undefined'){
    node = this.root;
  }

  // Check if current node is the one we're looking for
  if(JSON.stringify(data) ===  JSON.stringify(node.data)){
    return node;
  }

  // If not, traverse in respective direction
  if(safeCompare(data, node.data, this.compare)){
    return this.search(data, node.left);
  }else{
    return this.search(data, node.right);
  }
}

module.exports = BinarySearchTree;