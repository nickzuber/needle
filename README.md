# [Needle.js](https://github.com/nickzuber/needle) 
[![Build Status](https://travis-ci.org/nickzuber/needle.svg?branch=master)](https://travis-ci.org/nickzuber/needle) [![GitHub version](https://badge.fury.io/gh/nickzuber%2Fneedle.svg)](https://badge.fury.io/gh/nickzuber%2Fneedle)

Needle is a standalone extensive data structure library in JavaScript.

## Installation 

*pending*

## API Reference

Needle has a variety of different data structures at its disposal. Here is a reference to all of the currently available data structures that Needle supports. Some data structures have not been added yet and they will appear unavailable.

*If you feel that there should be additional data structures added to this library, [send me a message and let me know your ideas.](mailto:zuber.nicholas@gmail.com)*

**Note:** In the API, `*` refers to any type. This is commonly used when specifying the type of data; since all types of data are supported when inserting custom data into a data structure.

---

#### Arrays
 - Bit Array
 - Bitmap
 - Hashed Array Tree
 - Sorted Array

#### Lists
 - [Doubly Linked List](#doublylinkedlist)
 - [Singly Linked List](#singlylinkedlist)
 - [Queue](#queue)
 - Stack

#### Heaps
 - [Binary Heap](#binaryheap)
 - Binomial Heap
 - Soft Heap

#### Binary Trees
 - Binary Search Tree
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
 - Hash list
 - Hash table
 - Hashmap

#### Graphs
 - Adjacency Matrix
 - Directed Graph
 - Multigraph

---

### <a href="#singlylinkedlist" name="singlylinkedlist">Needle.SinglyLinkedList()</a>
**head** - *Node* - The first Node in the linked list.<br />
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

### <a href="#doublylinkedlist" name="doublylinkedlist">Needle.DoublyLinkedList()</a>
**head** - *Node* - The first Node in the linked list.<br />
**tail** - *Node* - The last Node in the linked list.<br />
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
 - **insert**(< * >data) - *void* - Inserts the element given by `data` into the heap and adjusts the heap accordingly.
 - **delete**() - *void* - Removes the root or top element from the heap and adjusts the heap accordingly.

## Examples

*pending*

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2015 Nick Zuber
