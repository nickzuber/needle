/**
 * Hashmap
 * {buckets} Array, the container of all the entries in the hashmap
 * {current} Node, the node of the current entry in the hashmap
 * 
 * Time complexities (average)
 * +-------------------+
 * | put      |  O(1)  |
 * | get      |  O(1)  |
 * | delete   |  O(1)  |
 * | next     |  O(1)  |
 * | iterater |  O(1)  |
 * | size     |  O(1)  |
 * +-------------------+
 * 
 */

'use strict';

const DoublyLinkedList = require('./doublyLinkedList.js');

/** @private
 * Takes in an argument and creates a unique hash derived from the given
 * argument and its properties.
 * @param {*} the data to be converted to a key
 * @return {number} the unique key for the given data
 */
function hash(data){
  return (typeof data + "_" + JSON.stringify(data));
}

/** @private
 * Removes the element within the linked list that has the given key.
 * @param {*} the key to find
 * @return {void}
 */
function removeCustom(key){
  var indexToDelete = 0,
      curNode = list.head,
      hashedKey = hash(key),
      nodeFound = false;

  // Search for node to delete by comparing key hashes
  while(curNode !== null){
    if(hash(curNode.data.key) === hashedKey){
      nodeFound = true;
      break;
    }
    ++indexToDelete;
    curNode = curNode.next;
  }

  // If node was found, delete at that index
  if(nodeFound){
    list.removeNth(indexToDelete);
    return;
  }else{
    throw new Error("Unable to find a non null entry within the internal linked list. Please report this to https://github.com/nickzuber/needle/issues");
  }
}

/** @private
 * This linked list will cache our entries locally so we can
 * easily iterate through our entries.
 */
const list = new DoublyLinkedList();

/**
 * No argument constructor.
 * @param {void}
 * @return {void}
 */
const Hashmap = function(){
  this.buckets = {};
  this.current = undefined;
}

/**
 * Inserts an entry into the hashmap.
 * @param {*} the key for the entry
 * @param {*} the value for the entry
 * @return {void}
 */
Hashmap.prototype.put = function(key, value){
  if(typeof key === 'undefined' || typeof value === 'undefined'){
    throw new Error("Too few arguments in Hashmap.put");
  }

  var hashedKey = hash(key);

  // If item does not exist, add it to our linked list
  if(this.buckets[hashedKey] === undefined){
    var entry = {key: key, value: value};
    list.insertBack(entry);
  }

  // Also update hashmap entries
  this.buckets[hashedKey] = value;

  // Set current node to first inserted
  // (if current is undefined that means no node has attempted to
  // have been inserted yet, so we know this instance is the first)
  if(this.current === undefined){
    this.current = list.head;
  }
}

/**
 * Returns an entry based on a given key.
 * @param {*} the key of the entry
 * @return {* || false} the value to return
 *                      returns false if entry not found
 */
Hashmap.prototype.get = function(key){
  if(typeof key === 'undefined'){
    throw new Error("Too few arguments in Hashmap.get");
  }
  var hashedKey = hash(key);
  if(this.buckets[hashedKey] !== undefined){
    return this.buckets[hashedKey];
  }else{
    return false;
  }
}

/**
 * Deletes an entry based on a given key.
 * @param {*} the key of the entry
 * @return {boolean} returns true if the entry was found and deleted
 *                   returns false if the entry was not found
 */
Hashmap.prototype.delete = function(key){
  if(typeof key === 'undefined'){
    throw new Error("Too few arguments in Hashmap.delete");
  }
  var hashedKey = hash(key);
  if(this.buckets[hashedKey] !== undefined){
    delete this.buckets[hashedKey];
    removeCustom(key);
    return true;
  }else{
    return false;
  }
}

/**
 * Updates the current node to the next node after returning the current node.
 * @param {void}
 * @return {object} an object composed of a pair of keys and values
 */
Hashmap.prototype.next = function(){
  if(list.size <= 0){
    throw new Error("Cannot get next of an element when map is empty in Hashmap.next()");
  }
  this.current = this.current.next;
  return this.current.data;
}

/**
 * Resets the internal iterater to the first entry and returns it.
 * @param {void}
 * @return {object} an object composed of a pair of keys and values
 */
Hashmap.prototype.iterater = function(){
  if(list.size <= 0){
    throw new Error("Cannot get an iterater of a map when it's empty in Hashmap.iterater()");
  }
  this.current = list.head;
  return this.current.data;
}

/**
 * Returns the amount of unique entries within the hashmap.
 * @param {void}
 * @return {number} the amount of entries within the hashmap
 */
Hashmap.prototype.size = function(){
  return list.size;
}

module.exports = Hashmap;