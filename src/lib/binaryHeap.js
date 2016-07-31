/**
 * Binary Heap
 * {heap} Array, the array based heap acting as a binary heap
 * {size} number, the amount of elements inside of the binary heap
 * {compare} function, compares two elements to each other to determine the ordering of the heap
 *                     defaults to basic (a < b) => true
 * 
 * Asymptotic time complexities
 * +-------------------------+
 * | peek      |  O(1)       |
 * | size      |  O(1)       |
 * | insert    |  O(log(n))  |
 * | delete    |  O(log(n))  |
 * | heapify   |  O(nlog(n)) |
 * +-------------------------+
 * 
 * TODO: let user set a custom `equal` function
 * @TODO dude redo this.. too messy 
 */
 
'use strict';

/** @private
 * Swaps two elements in an array.
 * @param {number} first index to swap
 * @param {number} second index to swap
 * @return {void}
 */
Array.prototype.swap = function(a, b){
  var temp = this[a];
  this[a] = this[b];
  this[b] = temp;
  return this;
}

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
    throw new TypeError("Compare must be a function in BinaryHeap");
  }
  if((typeof a === 'undefined' && typeof b !== 'undefined') || (typeof a !== 'undefined' && typeof b === 'undefined')){
    return false;
  }else if(typeof a !== 'undefined' && typeof b !== 'undefined'){
    return callback(a, b);
  }else{
    throw new TypeError("Comparing two undefined elements in BinaryHeap. Please report this to https://github.com/nickzuber/needle/issues");
  }
}

/**
 * Single argument constructor.
 * @param {function} [compare] function that compares the elements in the heap
 *                             this is only needed if the elements have some
 *                             custom way to determine their order
 * @return {void}
 */
const BinaryHeap = function(compare){
  // Initialize heap with nulled first element
  // because we aren't using first element (index 0).
  // This is because of indexing reasons when finding 
  // parent and children elements of the heap.
  this.heap = [null];
  this.compare = defaultCompare;
  if(typeof compare === 'function'){
    this.compare = compare;
  }
}

/**
 * Returns the min node of the heap.
 * @param {void}
 * @return {*} the minimum element of the binary heap
 */
BinaryHeap.prototype.peek = function(){
  return this.heap[1];
};

/**
 * Returns the size of the heap.
 * @param {void}
 * @return {number} the size of the binary heap
 */
BinaryHeap.prototype.size = function(){
  return this.heap.length - 1;
};

/**
 * Inserts a Node into the heap.
 * @param {*} the data for the element that is to be inserted into the heap
 * @return {void}
 */
BinaryHeap.prototype.insert = function(data){
  if(typeof data === 'undefined'){
    throw new Error("Too few arguments for BinaryHeap.insert");
  }
  // Insert element to the end of the heap 
  this.heap.push(data);

  // If the heap only consists of the root, it's already in order so exit
  if(this.heap.length <= 2){
    return;
  }

  // Start looking at the last element
  // (the one just inserted)
  var i = this.heap.length - 1;

  // Check element against parent
  // Math.floor(i/2) will return the index of the parent element
  // Loop through until we reach the root, since the root will not
  // have any parents
  while(i > 1){
    if(safeCompare(this.heap[i], this.heap[Math.floor(i/2)], this.compare)){
      this.heap.swap(i, Math.floor(i/2));
    }
    // Look at parent and continue
    i = Math.floor(i/2);
  }
};

/**
 * Removes the min in the heap and reorders heap with new min.
 * @param {number} if specified, removes that node
 * @return {void}
 */
BinaryHeap.prototype.delete = function(i){
  // Add +1 to index to account for the fact we hold index 0 hostage
  // internally, so the elements are really +1 index higher
  if(typeof i === 'number'){
    ++i;
  }else{
    i = 1;
  }

  if(typeof i !== 'number'){
    throw new TypeError("Expected a number as argument in BinaryHeap.delete");
  }else if(i < 0 || i >= this.heap.length){
    throw new Error('Index out of bounds in BinaryHeap.delete');
  }else if(this.heap.length <= 1){
    throw new Error("Attempted to remove min element from an empty heap in BinaryHeap.delete");
  }
  // If only one element left before deletion, remove last element and exit
  if(this.heap.length === 2){
    this.heap.pop();
    return;
  }

  // Swap min with last element, and delete last element
  this.heap[i] = this.heap.pop();

  // If there's one element left in the heap
  if(this.heap.length === 2){
    // Do nothing because the only element left in the heap
    // is obviously the min element - the heap is already sorted
  }
  // If there's two elements left in the heap
  // (the root and one of its children)
  else if(this.heap.length === 3){
    // Start at root
    var i = 1;
    // Compare child to parent and swap if needed
    if(safeCompare(this.heap[i*2], this.heap[i], this.compare)){
      this.heap.swap(i, i*2);
    }
  }
  // When the heap has at least the root and 2 children
  else{
    // Makes sure we don't hit an infinate loop somehow
    // This can be caused by some error in the compare function
    // The default compare function *shouldn't* create an infinate loop in any situation,
    // therefore if this error is thrown it is *most likely* an error with a user given
    // custom compare function. This error should be reported either way for inspection.
    // This function runs in O(log(n)), therefore capping out the amount of times this
    // function can iterate at 1000 *should* be way more than enough for any non-error
    // removal operations.
		var errorControl = 0;

		// Case 1: Newly positioned element is greater than its parent

		// Case 2: Newly positioned element is less than its parent

		// Case 3: Newly positioned element is equal to its parent

    // Fix the order of the list to find new min
    // Look at root and compare to its children and swap with minimum
    // Recurse down the tree doing this until we can't swap anymore
    var i = 1;
    while(safeCompare(this.heap[i*2], this.heap[i], this.compare) || safeCompare(this.heap[i*2+1], this.heap[i], this.compare)){

      var localMinIndex;
      // Get min of children
      if(!safeCompare(this.heap[i*2], this.heap[i*2+1], this.compare) && typeof this.heap[i*2+1] !== 'undefined'){
        localMinIndex = i*2+1;
      }else{
        localMinIndex = i*2;
      }

      this.heap.swap(i, localMinIndex);
      i = localMinIndex;

      ++errorControl;
      if(errorControl > 1000){
        throw new Error("Timeout error in BinaryHeap.delete. Please report this to https://github.com/nickzuber/needle/issues");
      }
    }
  }
};


/**
 * Actually does the heapify-ing.
 * @param {number} the index of the current parent node
 * @return {void}
 */
BinaryHeap.prototype._heapify = function(i){
  var left = i*2,
      right = left+1,
      cur = i,
      inBounds = this.heap.length;

  if(left < this.heap.length && safeCompare(this.heap[left], this.heap[cur], this.compare)){
    cur = left;
  }
  if(right < this.heap.length && safeCompare(this.heap[right], this.heap[cur], this.compare)){
    cur = right;
  }
  if(cur != i){
    this.heap.swap(i, cur);
    this._heapify(cur);
  }


  // Check if current node is a leaf
  if(!(typeof this.heap[i*2] === 'undefined' && typeof this.heap[i*2+1] === 'undefined')){
    if(safeCompare(this.heap[i*2], this.heap[i], this.compare) || safeCompare(this.heap[i*2+1], this.heap[i], this.compare)){
      if(safeCompare(this.heap[i*2], this.heap[i*2+1], this.compare)){
        this.heap.swap(i, i*2);
        this._heapify(i*2);
      }else{
        this.heap.swap(i, i*2+1);
        this._heapify(i*2+1);
      }
    }
  }
}

/**
 * Reorganizes the input array into a legal binary heap.
 * @param {number} the array to turn into a heap
 * @return {array} the new array in heap form
 */
BinaryHeap.prototype.heapify = function(arr){
  this.heap = arr;
  this.heap.unshift(null);
  console.log(this.heap);
  for(var i = Math.floor(arr.length-1); i >= 1; --i){
    this._heapify(i);
  }
  console.log(this.heap);
};

module.exports = BinaryHeap;
