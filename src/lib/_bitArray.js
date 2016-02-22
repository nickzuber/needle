
/** @deprecated
 *  @probablyWrong
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

/** @private
 * Convert an integer into an array of its bits.
 * @param {number}
 * @return {array} the array of bits
 */
const shred = function(n){
  var bits = [];
  do{
    bits.push(n & 1);
  }while(n >>=1 > 0);
  return bits;
}

/**
 * Instantiates a bit array with either an optional size parameter which
 * will trim or expand the input bit sequence if implied.
 * @param {number|array} the input sequence of bits
 * @param {number} [size] the size of the bit array
 * @param {number} [bit_type = 0] grow with 0s or 1s
 * @return {array} the array of bits
 */
const BitArray = function(bits, size, bit_type){
  // Empty bit array
  if(typeof bits === 'undefined'){
    this.bits = [];
    return;
  }
  if(!(bits instanceof Array || typeof bits === 'number')){
    throw new TypeError("Invalid argument: expecting an array or number in BitArray constructor.");
  }
  this.bits = [];
  if(bits.length){
    bits.map(function(bit){
      this.bits.push(bit ? 1 : 0);
    });
  }else{
    this.bits = shred(bits);
  }
  if(typeof size === 'number'){
    bit_type = bit_type || 0;
    this.resize(size, bit_type);
  }
  // Resolve backwards insertion of bits
  this.bits.reverse();
}

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
  bitarray = bitarray.bits.map(function(bit){
    _bitarray.bits.push(!bit ? 1 : 0);
  });
  return _bitarray.bits;
};

/**
 * Shrinks or grows the bit array.
 * @param {number} the size to convert to
 * @param {number} [bit_type = 0] grow with 0s or 1s
 * @return {void}
 */
BitArray.prototype.resize = function(size, bit_type){
  var bit = !!bit_type ? 1 : 0;
  if(typeof size !== 'number'){

  }
  if(size >= this.bits.length){
    for(var i=0; i<size; ++i){
      this.bits.push(bit_type);
    }
  }else{
    for(var i=size; i<this.bits.length; ++i){
      this.bits.pop();
    }
  }
};

/**
 * Returns the bit from the bit array at desired location.
 * @param {number} the bit to find
 * @return {number} the bit at desired index
 */
BitArray.prototype.get = function(index){
  if(index < 0 || index >= this.bits.length){
    throw new Error("Index out of bounds in BitArray.get");
  }
  return this.bits[index];
};

/**
 * Sets the bit from the bit array at desired location.
 * @param {number} the bit to find
 * @param {number} the value of bit
 * @return {void} 
 */
BitArray.prototype.set = function(index, bit_type){
  if(index < 0 || index >= this.bits.length){
    throw new Error("Index out of bounds in BitArray.get");
  }
  var bit = !!bit_type ? 1 : 0;
  this.bits[index] = bit;
};

/**
 * Returns the size of the bit array.
 * @param {void} 
 * @return {number} the size of the bit array
 */
BitArray.prototype.size = function(){
  return this.bits.length;
};