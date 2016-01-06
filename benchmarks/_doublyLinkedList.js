
// # Doubly Linked List tests

'use strict';

var Needle = require('../src/needle.js');
var start, end, time, iterations, i;

var list = new Needle.DoublyLinkedList();

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

console.warn("DoublyLinkedList.insertFront() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");




/** @benchmark
 * insertBack
 */

// Reset list
list = new Needle.DoublyLinkedList();
start = new Date().getTime();

for(i=0; i<iterations; ++i){
  list.insertBack("item: " + i);
}

end = new Date().getTime();
time = end - start;

console.warn("DoublyLinkedList.insertBack() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * insertNth
 */

// Reset list
list = new Needle.DoublyLinkedList();
start = new Date().getTime();

var index = 0;

for(i=0; i<iterations; ++i){
  list.insertNth(index, "item: " + i);
  index = parseInt(list.size/2);
}

end = new Date().getTime();
time = end - start;

console.warn("DoublyLinkedList.insertNth() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * remove
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  try{
    list.remove("item: " + i);
  }catch(e){
    console.log("error at item: " + i);
    console.log(list);
  }
}

end = new Date().getTime();
time = end - start;

console.warn("DoublyLinkedList.remove() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * insertAfter
 */

// Reset list
list = new Needle.DoublyLinkedList("item: 0");
start = new Date().getTime();

for(i=1; i<iterations; ++i){
  list.insertAfter("item: "+ (i-1), "item: " + i);
}

end = new Date().getTime();
time = end - start;

console.warn("DoublyLinkedList.insertAfter() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * find
 * We find the center element once. This will actually be slightly slower
 * than findNth because we have to take into account the variable comparisons.
 */

start = new Date().getTime();

list.find("item: " + (iterations/2));

end = new Date().getTime();
time = end - start;

console.warn("DoublyLinkedList.find() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * findNth
 * We find the center element once.
 */

start = new Date().getTime();

list.findNth(iterations/2);

end = new Date().getTime();
time = end - start;

console.warn("DoublyLinkedList.findNth() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



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

console.warn("DoublyLinkedList.removeNth() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");





