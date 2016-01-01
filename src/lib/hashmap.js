/**
 * Hashmap
 * {buckets} Array, the container of all the entries in the hashmap
 * {size} number, the number of entries in the hashmap
 * 
 * Time complexities (average)
 * +------------------+
 * | put     |  O(1)  |
 * | get     |  O(1)  |
 * | delete  |  O(1)  |
 * +------------------+
 * 
 */

'use strict';

const DoublyLinkedList = require('./doublyLinkedList.js');

/** @private
 * Takes in an argument and maps it to a key within the bucket.
 * @param {*} the data to be converted to a key
 * @return {number} the unique key for the given data
 */
function hash(data){
  var key = parseInt(data) % size;
  return key;
}

const Hashmap = function(){

}