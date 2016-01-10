/**
 * Sorted Array
 * {elements} Array, holds all of the sorted elements
 * 
 * Time complexities (average)
 * +------------------------+
 * | push     |  O(log(n))  |
 * | delete   |  O(n)       |
 * | get      |  O(log(n))  |
 * | size     |  O(1)       |
 * +------------------------+
 * 
 */

'use strict';

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
 * TODO: make this a default
 * Compares two elements and returns if they're equal or not.
 * @param {*} first element to compare
 * @param {*} second element to compare
 * @return {boolean} returns true if left hand element is equal to the right hand element
 */
function equal(a, b){
  var comparable_A = a,
      comparable_B = b;
  if(typeof a === 'object'){
    comparable_A = JSON.stringify(a);
  }
  if(typeof b === 'object'){
    comparable_B = JSON.stringify(b);
  }
  return (comparable_A === comparable_B);
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
    throw new TypeError("Compare must be a function in SortedArray");
  }
  if((typeof a === 'undefined' && typeof b !== 'undefined') || (typeof a !== 'undefined' && typeof b === 'undefined')){
    return false;
  }else if(typeof a !== 'undefined' && typeof b !== 'undefined'){
    return callback(a, b);
  }else{
    throw new TypeError("Comparing two undefined elements in SortedArray. Please report this to https://github.com/nickzuber/needle/issues");
  }
}

/**
 * Single argument constructor.
 * @param {function} [compare] function that compares the elements in the array
 *                             this is only needed if the elements have some
 *                             custom way to determine their order
 * @return {void}
 */
const SortedArray = function(compare){
  this.elements = [];
  this.compare = defaultCompare;
  if(typeof compare === 'function'){
    this.compare = compare;
  }
}

/**
 * Adds an element into the array in its sorted position.
 * @param {*} the element to be added
 * @return {void}
 */
SortedArray.prototype.push = function(data){
  if(typeof data === 'undefined'){
    throw new Error('Too few arguments in SortedArray.push');
  }

  // Check array size
  if(this.elements.length === 0){
    this.elements.push(data);
    return;
  }

  // Check if the element we're inserting should be inserted
  // at the front of the list. This is important because the
  // algorithm that searches for the index to add in our list
  // will not attempt to insert any element in the front. (it's
  // a flaw in the algorithm that I couldn't figure out a good
  // way to fix. 4head)
  if(safeCompare(data, this.elements[0], this.compare)){
    this.elements.splice(0, 0, data);
  }

  // Keep track of the max and min index values
  var min = 0,
      max = this.elements.length,
      mid = Math.floor(min + (max - min) / 2);

  var errorControl = 0;

  while(Math.abs(max-min) > 1 && !equal(data, this.elements[mid])){
    // Get middle index from max and min
    mid = Math.floor(min + (max - min) / 2);

    // Compare elements and traverse array accordingly
    if(safeCompare(this.elements[mid], data, this.compare)){
      min = mid;
    }else{
      max = mid;
    }
    // ERROR CONTROL WHILE TESTING
    ++errorControl;
    if(errorControl>100){
      throw new Error('stack overflow: ' + min + ', ' + max + ' | ' + mid);
    }
  }

  // Check if we need to insert the element before or after the element
  // in the array it targeted
  if(safeCompare(data, this.elements[mid], this.compare)){
    this.elements.splice(mid, 0, data);
  }else{
    this.elements.splice(mid+1, 0, data);
  }
}

/**
 * Returns the amount of elements in the sorted array.
 * @param {void}
 * @return {number} the amount of elements in the sorted array
 */
SortedArray.prototype.size = function(){
  return this.elements.size();
}

module.exports = SortedArray;