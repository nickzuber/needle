/**
 * Bit Array
 * {bits} Array, the array of bits
 * 
 * Asymptotic time complexities
 * +-----------------------+
 * | complement   |  O(1)  |
 * | union        |  O(1)  |
 * | intersection |  O(1)  |
 * | difference   |  O(1)  |
 * | resize       |  O(n)  |
 * | get          |  O(1)  |
 * | set          |  O(1)  |
 * | size         |  O(1)  |
 * +-----------------------+
 * 
 */

'use strict';

/**
 * Transforms input into a number.
 * @param {*} input to become a number
 * @return {number} number version of input
 */
var shred = function(n){
  if(typeof n === 'number'){
    return n;
  }
  if(typeof n !== 'string'){
    n = JSON.stringify(n)
  }
  var res = 0;
  n.split("").map(function(bit){
    res += bit.charCodeAt(0);
  });
  return res;
}

/** Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones) */
const INTEGER_SIZE = 32;
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

/** 
 * Instantiates a bit array with given size.
 * @param {number} the size of the bit array
 * @return {void}
 */
const BitArray = function(size){
  this.data = [];
  if(typeof size === 'undefined'){
    return; // Empty instance of a bit array
  }
  if(typeof size !== 'number'){
    size = shred(size);
  }
  for(var i=0; i<Math.ceil(size/INTEGER_SIZE); ++i){
    this.data.push(0);
  }
}

/**
 * Sets the bit from the bit array at desired location. It is important to
 * note that indexing starts at 0 (where 0 refers to the first element).
 * @param {number} the position of bit 
 * @param {boolean} the new value of bit
 * @return {void}
 */
BitArray.prototype.set = function(index, value){
  if(index < 0 || index >= this.data.length * INTEGER_SIZE){
    throw new Error("Index out of bounds in BitArray.set");
  }
  var _index = Math.floor(index++/INTEGER_SIZE);
  if(!!value){
    this.data[_index] |= 1 << (INTEGER_SIZE - index);
  }else{
    this.data[_index] &= ~(1 << (INTEGER_SIZE- index));
  }
};

/**
 * Returns the bit from the bit array at desired location.
 * @param {number} the bit to find
 * @return {number} the bit at desired index
 */
BitArray.prototype.get = function(index){
  if(index < 0 || index >= this.data.length * INTEGER_SIZE){
    throw new Error("Index out of bounds in BitArray.get");
  }
  var _index = Math.floor(index++/INTEGER_SIZE);
  var seqCpy = this.data[_index];
  return (seqCpy >> INTEGER_SIZE-index) & 1;
};

/**
 * Resolve the complement bit array.
 * @param {BitArray} [bitarray = this] input bit array to complement
 * @return {BitArray} the complement bit array
 */
BitArray.prototype.complement = function(bitarray){
  if(typeof bitarray === 'undefined'){
    bitarray = this;
  }
  // If not bit array, attempt to convert
  else if(!(bitarray instanceof BitArray)){
    bitarray = new BitArray(bitarray);
  }
  var _bitarray = new BitArray();
  bitarray.data.map(function(sequence){
    _bitarray.data.push(~sequence);
  });
  return _bitarray;
};

/**
 * Converts the bit array into a string of bits.
 * @param {void}
 * @return {string} the string of bits for the bit array
 */
BitArray.prototype.toString = function(){
  var bitString = "";
  this.data.map(function(sequence){
    for (var i = 0; i<INTEGER_SIZE; i++){
      bitString += String(sequence >>> 31);
      sequence <<= 1;
    }
    bitString.split("").reverse().join("");
  });
  return bitString;
}

/**
 * Returns the size of the bit array.
 * @param {void} 
 * @return {number} the size of the bit array
 */
BitArray.prototype.size = function(){
  return this.data.length * INTEGER_SIZE;
};

module.exports = BitArray;