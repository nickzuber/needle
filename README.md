# [Needle.js](https://github.com/nickzuber/needle) 
[![Build Status](https://travis-ci.org/nickzuber/needle.svg?branch=master)](https://travis-ci.org/nickzuber/needle) [![GitHub version](https://badge.fury.io/gh/nickzuber%2Fneedle.svg)](https://badge.fury.io/gh/nickzuber%2Fneedle)

Needle is a standalone extensive data structure library in JavaScript.

## Installation 

Installing Needle on the client side is simple. Just download the [minified file of the latest version](https://github.com/nickzuber/needle/blob/master/bin/needle-1.0.0.min.js) and include it in your webpage:
```html
<!-- The complete Needle library -->
<script src="path/to/needle-1.0.0.min.js"></script>
```

If you'd like to install Needle on the server side using [npm](https://www.npmjs.com), it's as easy as:
```
npm install node-needle --save
```

**Note:** *Be warned that Needle is still under development, therefore the use any unofficially released files may result in unexpected behavior if bugs in the code subsist.*

## Usage

When you have Needle installed, you can use it on the client like so:
```javascript
// Needle gets pushed onto the global scope under the alias "Needle"
// You create instances of data structures which derive from the Needle object
var rh = new Needle.RollingHash(256);
```

Or you can use it on the server in Node like so:
```javascript
var Needle = require('node-needle');
```


## API Reference

Needle has a variety of different data structures at its disposal. Here is a reference to all of the currently available data structures that Needle supports. Some data structures have not been added yet and they will appear unavailable.

*If you feel that there should be additional data structures added to this library, [send me a message and let me know your ideas.](mailto:zuber.nicholas@gmail.com)*

**Note:** In the API, `*` refers to any type. This is commonly used when specifying the type of data; since all types of data are supported when inserting custom data into a data structure.

---

#### Arrays
 - Bit Array
 - Bitmap
 - Hashed Array Tree
 - [Sorted Array](#sortedarray)

#### Lists
 - [Doubly Linked List](#doublylinkedlist)
 - [Singly Linked List](#singlylinkedlist)
 - [Queue](#queue)
 - [Stack](#stack)

#### Heaps
 - [Binary Heap](#binaryheap)
 - Binomial Heap
 - Soft Heap

#### Binary Trees
 - [Binary Search Tree](#bst)
 - AVL Tree
 - B Tree
 - B+ Tree
 - Red-Black Tree

#### Trees
 - Trie
 - Radix Tree
 - B Trie

#### Multiway Trees
 - Ternary Tree
 - K-ary Tree
 - And-Or Tree

#### Hashes
 - [Hashmap](#hashmap)
 - Concurrent Hash Trie
 - [Rolling Hash](#rollinghash)

#### Graphs
 - Adjacency Matrix
 - Directed Graph
 - Multigraph

---

### <a href="#bst" name="bst">Needle.BinarySearchTree()</a>
**root** - *Node* - The root node of the binary tree.<br />
**compare** - *function* - Compares two elements to each other to determine the ordering of the heap.<br />

**Note:** The default `compare` function is defined as
```javascript
function defaultCompare(a, b){
  return (a < b);
}
```
 
 - **(constructor)**([< *function* >compare]) - *object* - Creates a Binary Search Tree and if a function is passed in, it overrides the default compare function with the function defined by `compare`.
 - **hasRight**(< *Node* >node) - *boolean* - Returns true if the given `Node` has a right component.
 - **hasLeft**(< *Node* >node) - *boolean* - Returns true if the given `Node` has a left component.
 - **isLeaf**(< *Node* >node) - *boolean* - Returns true if the given `Node` is a leaf.
 - **emptySubtree**(< *Node* >node) - *void* - Empties the subtree of the given `Node`.
 - **emptyTree**() - *void* - Empties the entire tree.
 - **heightSubtree**(< *Node* >node) - *number* - Returns the height of the subtree derived from `Node`.
 - **numNodesSubtree**(< *Node* >node) - *number* - Returns the number of nodes of the subtree derived from `Node`.
 - **numLeavesSubtree**(< *Node* >node) - *number* - Returns the number of leaves of the subtree derived from `Node`.
 - **insert**(< * >data [, < *Node* >node]) - *void* - Inserts a node into the binary search tree given by `data`. The `Node` argument will determine which subtree to attempt to insert the node at. Inserting at the root subtree is selected by default if this parameter is left blank (recommended).
 - **search**(< * >data [, < *Node* >node]) - *Node || false* - Searched for the node given by `data` in the binary search tree. The `Node` argument will determine which subtree to attempt to search for the node. Searching at the root subtree is selected by default if this parameter is left blank (recommended).

### <a href="#binaryheap" name="binaryheap">Needle.BinaryHeap()</a>
**heap** - *Array* - The array based heap acting as a binary heap.<br />
**compare** - *function* - Compares two elements to each other to determine the ordering of the heap.<br />

**Note:** The default `compare` function is defined as
```javascript
function defaultCompare(a, b){
  return (a < b);
}
```
 
 - **(constructor)**([< *function* >compare]) - *object* - Creates a Binary Heap and if a function is passed in, it overrides the default compare function with the function defined by `compare`.
 - **peek**() - *element* - Returns the root or top element of the heap.
 - **size**() - *number* - Returns the amount of elements stored in the heap.
 - **insert**(< * >data) - *void* - Inserts the element given by `data` into the heap and adjusts the heap accordingly.
 - **delete**() - *void* - Removes the root or top element from the heap and adjusts the heap accordingly.

### <a href="#doublylinkedlist" name="doublylinkedlist">Needle.DoublyLinkedList()</a>
**head** - *Node* - The first node in the linked list.<br />
**tail** - *Node* - The last node in the linked list.<br />
**size** - *number* - The number of nodes in the linked list.<br />

 - **(constructor)**([< * >data]) - *object* - Creates a Doubly Linked List and inserts a node at the head of the newly created list if `data` is given.
 - **insertFront**(< * >data) - *void* - Create a node from `data` and inserts at the front of the list.
 - **insertNth**(< *number* >index, < * >data) - *boolean* - Create a node from `data` and insert in the location of the linked list specified by `index`.
 - **insertAfter**(< * >targetData, < * >data) - *boolean* - Create a node from `data` and insert after the node which has the data specified by `targetData` and returns `true` if the element was successfully added to the linked list.
 - **insertBack**(< * >data) - *void* - Create a node from `data` and inserts at the back of the list.
 - **remove**(< * >data) - *boolean* - Removes the element specified by `data` and returns `true` if the element was successfully found and removed from the linked list.
 - **removeNth**(< *number* >index) - *void* - Removes the element in the location of the linked list specified by `index`.
 - **find**(< * >data) - *Node || false* - Finds the element specified by `data` and returns that `Node` if the element was successfully found but returns `false` if the node was not found.
 - **findNth**(< *number* >index) - *Node* - Finds the element in the location of the linked list specified by `index` and returns that `Node`.


### <a href="#hashmap" name="hashmap">Needle.Hashmap()</a>
**buckets** - *Array* - The container of all the entries in the hashmap.<br />
**current** - *Node* - The node of the current entry in the hashmap.<br />
 
 - **(constructor)**() - *object* - Creates and instatiates a Hashmap object.
 - **put**(< * >key, < * >value) - *void* - Inserts an entry into the hashmap, which maps the given `key` to its respective `value`.
 - **get**(< * >key) - *value* - Returns the value that is paired with the given `key`.
 - **delete**(< * >key) - *boolean* - Deletes the entry that is associated with the given `key`, returns `true` if deletion was successful and `false` if the entry was not found.
 - **iterator**() - *key* - Resets the internal iterator `Node` to the first entry and returns the unhashed key.
 - **next**() - *key* - Iterates to the next `Node` and returns an the unhashed key.
 - **size**() - *number* - Returns the amount of unique entries within the hashmap.


### <a href="#singlylinkedlist" name="singlylinkedlist">Needle.SinglyLinkedList()</a>
**head** - *Node* - The first node in the linked list.<br />
**size** - *number* - The number of nodes in the linked list.<br />

 - **(constructor)**([< * >data]) - *object* - Creates a Singly Linked List and inserts a node at the head of the newly created list if `data` is given.
 - **insertFront**(< * >data) - *void* - Create a node from `data` and inserts at the front of the list.
 - **insertNth**(< *number* >index, < * >data) - *boolean* - Create a node from `data` and insert in the location of the linked list specified by `index`.
 - **insertAfter**(< * >targetData, < * >data) - *boolean* - Create a node from `data` and insert after the node which has the data specified by `targetData` and returns `true` if the element was successfully added to the linked list.
 - **insertBack**(< * >data) - *void* - Create a node from `data` and inserts at the back of the list.
 - **remove**(< * >data) - *boolean* - Removes the element specified by `data` and returns `true` if the element was successfully found and removed from the linked list.
 - **removeNth**(< *number* >index) - *void* - Removes the element in the location of the linked list specified by `index`.
 - **find**(< * >data) - *Node || false* - Finds the element specified by `data` and returns that `Node` if the element was successfully found but returns `false` if the node was not found.
 - **findNth**(< *number* >index) - *Node* - Finds the element in the location of the linked list specified by `index` and returns that `Node`.

### <a href="#stack" name="stack">Needle.Stack()</a>
**top** - *Node* - The top node in the stack.<br />
**size** - *number* - The number of nodes in the stack.<br />
 
 - **(constructor)**([< * >data]) - *object* - Creates a Stack and if data is passed given, the top element of the queue, defined by `data`, is created and inserted.
 - **peek**() - *Node* - Returns the top `Node` of the stack.
 - **push**(< * >data) - *void* - Adds and element, defined by `data`, to the top of the stack.
 - **pop**() - *Node* - Removes the top element of the stack and returns the `Node` that was previously the top, and just deleted.


### <a href="#queue" name="queue">Needle.Queue()</a>
**front** - *Node* - The first node in the queue.<br />
**back** - *Node* - The last node in the queue.<br />
**size** - *number* - The number of nodes in the queue.<br />
 
 - **(constructor)**([< * >data]) - *object* - Creates a Queue and if data is passed given, the first element of the queue, defined by `data`, is created and inserted.
 - **enqueue**(< * >data) - *void* - Adds and element, defined by `data`, to the queue.
 - **dequeue**() - *void* - Removes the first element of the queue.


## Examples

Here are an assortment of examples using various data structures provided by Needle. If you wish there to be examples of a data structure in particular, [feel free to let me know what you have in mind](mailto:zuber.nicholas@gmail.com).

```javascript
// Priority Queue implementation using a binary heap

var Level = function(key, value){
  this.key = key;
  this.value = value;
}

var priorityQueue = new Needle.BinaryHeap(function(a, b){
  return a.key < b.key;
});

priorityQueue.insert(new Level(3, "Level 3"));
priorityQueue.insert(new Level(1, "Level 1"));
priorityQueue.insert(new Level(2, "Level 2"));

priorityQueue.peek(); // => {1, "Level 1"}
priorityQueue.size(); // => 3

priorityQueue.delete();

priorityQueue.peek(); // => {2, "Level 2"}
priorityQueue.size(); // => 2

```

```javascript
// Iterating through a Hashmap

var map = new Needle.Hashmap();

map.put(1, "Level 1");
map.put("2", "Level 2");
map.put({key: "three"}, "Level 3");

// Insertion order is kept, despite key value
for(var it = map.iterator(); it !== null; it = map.next()){
  console.log(it); // 1 -> "2" -> {key: "three"}
  console.log(map.get(it)); // "Level 1" -> "Level 2" -> "Level 3"
}

```

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2015 Nick Zuber
