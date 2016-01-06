
// # Singly Linked List tests

'use strict';

var Needle = require('../src/needle.js');
var start, end, time, iterations, i;

var list = new Needle.SinglyLinkedList();

// Determine the amount of times to execute each function for speed testing
iterations = 30000;



/** @benchmark
 * insertFront
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  list.insertFront("item: " + i);
}

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.insertFront() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");




/** @benchmark
 * insertBack
 */

// Reset list
list = new Needle.SinglyLinkedList();
start = new Date().getTime();

for(i=0; i<iterations; ++i){
  list.insertBack("item: " + i);
}

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.insertBack() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * insertNth
 * We are constantly inserting into the middle of the list.
 * This should run roughly in half the time as insertBack.
 */

// Reset list
list = new Needle.SinglyLinkedList();
start = new Date().getTime();

var index = 0;

for(i=0; i<iterations; ++i){
  list.insertNth(index, "item: " + i);
  index = parseInt(list.size/2);
}

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.insertNth() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * remove
 * We are able to remove elements by name since we know what we've inserted.
 * This should run roughly the same time as insertBack because we have to compare
 * each element do the target data.
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  list.remove("item: " + i);
}

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.remove() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * insertAfter
 * We are constanly inserting at the end of the list. This should take 
 * roughly double the same time as insertBack because of the variable comparing
 * involved for each insertion.
 */

// Reset list
list = new Needle.SinglyLinkedList("item: 0");
start = new Date().getTime();

for(i=1; i<iterations; ++i){
  list.insertAfter("item: "+ (i-1), "item: " + i);
}

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.insertAfter() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * find
 * We find the center element once. This will actually be slightly slower
 * than findNth because we have to take into account the variable comparisons.
 */

start = new Date().getTime();

list.find("item: " + (iterations/2));

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.find() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * findNth
 * We find the center element once.
 */

start = new Date().getTime();

list.findNth(iterations/2);

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.findNth() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * removeNth
 * This should run roughly the same time as insertNth since we're removing from the
 * center of the list each iteration.
 */

start = new Date().getTime();

var size = list.size;

for(i=0; i<size; ++i){
  list.removeNth(Math.floor(list.size/2));
}

end = new Date().getTime();
time = end - start;

console.warn("SinglyLinkedList.removeNth() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");






