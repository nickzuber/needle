/**
 * Rolling Hash
 * 
 * Time complexities (average)
 * +-------------------+
 * | skip     |  O(1)  |
 * | append   |  O(1)  |
 * | hash     |  O(1)  |
 * | set      |  O(1)  |
 * +-------------------+
 *
 * TODO: There is a known bug that causes the internal hash to be off
 * by exactly 1 when the window size is 7, therefore breaking the hash
 * when the window size is 7 or greater.
 * 
 */

'use strict';

/** @private
 * Takes in a number and a prime modular base and computes its
 * modular inverse.
 * @param {number} the number to find the modular inverse of
 * @param {number} the prime modular base
 * @return {number} the modular inverse of n
 */
var modInverse = function(n, p){
  // Make sure our modular base is prime
  var g = gcd(n, p);
  if(g !== 1){
    throw new Error("Modular base is not prime and inverse is no guarenteed in RollingHash.modInverse\n"+p);
  }
  return safePOW(n, p-2, p);
}

/** @private
 * Finds the greatest common denominator of the inputs.
 * @param {number} first number to find GCD of
 * @param {number} second number to find GCD of
 * @return {number} the GCD of the input
 */
var gcd = function(a, b){
  return (a === 0) ? b : gcd(b%a, a);
}

/** @private
 * Computes the power of two numbers under a modular base.
 * @param {number} the base number
 * @param {number} the degree to raise
 * @param {number} the modular base which bounds the computations
 * @return {number} the power of the input under the modular base
 */
var safePOW = function(a, b, m){
  b = parseInt(b); // increase precision and negates overflow bugs
  if(b === 0) return 1;
  var p = safePOW(a, b/2, m) % m;
  p = (p * p) % m;
  return (b%2 === 0) ? p : (a * p) % m;
}

/** @private
 * Computes the ascii digits of a string.
 * @param {string} the string to compute
 * @return {number} the ascii digits of the string as a number
 */
String.prototype.ascii = function(){
  var ascii="";
  if(this.length>0)
    for(var i=0; i<this.length; ++i)
      ascii += ""+this.charCodeAt(i);
  return ascii.length > 0 ? parseInt(ascii) : undefined;
}

/** @private
 * The prime modular base for rolling hash.
 * This is the closest prime number to 2^32
 * without going over.
 */
const PRIME_BASE = 113//4294967291;

/**
 * Single argument constructor which defines the base of the working 
 * @param {number} the base of which
 * @return {void}
 */
const RollingHash = function(base){
  if(typeof base === 'undefined'){
    throw new Error("Too few arguments in RollingHash constructor");
  }else if(typeof base !== 'number'){
    throw new TypeError("Invalid argument; expected a number in RollingHash constructor");
  }
  
  // The base of the number system
  this.BASE = base;

  // The internal hash value of the window
  this.state = 0;

  // A block of expensive code we will cache in order to optimize runtime
  this.CACHE = 1;

  // The amount of digits a number can hold given the base
  this.BUFFER_SIZE = Math.log(base-1) * Math.LOG10E + 1 | 0;

  // The modular inverse of the base
  this.INVERSE_BASE = modInverse(this.BASE, PRIME_BASE) % PRIME_BASE;

  // An offset to add when calulating a modular product, to make sure it can not go negative
  this.OFFSET_IF_NEGATIVE = PRIME_BASE * this.BASE;
}

/**
 * Computes a hash on the input assuming it is of the same base of
 * the instance of the rolling hash. 
 * @param {number || string} the item to hash
 * @return {void}
 */
RollingHash.prototype.hash = function(k){
  if(typeof k === 'undefined'){
    throw new Error("Too few arguments in RollingHash.hash");
  }

  // Initialize hash value
  var _hash = 0;

  // If argument is a string, we need to convert to a number the hash
  if(typeof k === 'string'){
    for(var i=0; i<k.length; ++i){
      _hash += k[i].ascii() * Math.pow(this.BASE, (k.length-1-i));
    }
  }else if(typeof k === 'number'){
    _hash = k;
  }else{
    throw new TypeError("Invalid argument; expecting number or string in RollingHash.hash\nk: "+k);
  }

  return _hash % PRIME_BASE;
}

/**
 * Appends a new segment onto the rolling hash window.
 * @param {string || number} the new item to append
 * @return {void}
 */
RollingHash.prototype.append = function(n){
  if(typeof n === 'string'){
    n = n.ascii();
  }
  // Check for overflow
  if(!(n < this.BASE)){
    throw new Error("Argument overflow in RollingHash.append\n"+"n: "+n);
  }

  // Append an item to the front of the window
  this.state = (this.state * this.BASE + n) % PRIME_BASE;

  // Update the cached chunk
  this.CACHE = (this.CACHE * this.BASE) % PRIME_BASE;
}

/**
 * Disjoins the trailing segment of rolling hash window.
 * @param {string || number} the old item to disjoin
 * @return {void}
 */
RollingHash.prototype.skip = function(o){
  if(typeof o === 'string'){
    o = o.ascii();
  }
  // Check for overflow
  if(!(o < this.BASE)){
    throw new Error("Argument overflow in RollingHash.skip\n"+"o: "+o);
  }
  
  // Update the cached chunk
  this.CACHE = (this.CACHE * this.INVERSE_BASE) % PRIME_BASE;

  // Remove trailing item from window
  this.state = (this.state - o * this.CACHE + this.OFFSET_IF_NEGATIVE) % PRIME_BASE;
}

/**
 * Shifts the window over by one iteration and returns the new internal hash value.
 * @param {string || number} the old item to disjoin
 * @param {string || number} the old item to disjoin
 * @return {number} returns the new internal hash
 */
RollingHash.prototype.slide = function(o, n){
  if(typeof o === 'undefined' || typeof n === 'undefined'){
    throw new Error("Too few arguments in RollingHash.slide");
  }
  // Convert characters to ascii if needed
  if(typeof o === 'string'){
    o = o.ascii();
  }
  if(typeof n === 'string'){
    n = n.ascii();
  }

  // Check for overflow
  if(!(o < this.BASE && n < this.BASE)){
    throw new Error("One or more arguments overflowed in RollingHash.slide\n"+"o: "+o+"\nn:"+n);
  }

  // Throw error if window is empty
  if(typeof this.state === 'undefined'){
    throw new Error("Attempted to slide an empty window in RollingHash.slide");
  }

  this.state = (this.state * this.BASE - o * this.CACHE + n + this.OFFSET_IF_NEGATIVE) % PRIME_BASE;

  return this.state;
}

/**
 * Sets the internal window of the rolling hash. Usually set with the beginning elements
 * that fit within the window of the item to find.
 * @param {string || Array} either a string or an array of base b numbers
 * @return {number} returns the new internal hash
 */
RollingHash.prototype.set = function(k){
  if(typeof k === 'undefined'){
    throw new Error("Too few arguments in RollingHash.set");
  }else if(typeof k === 'string' || k.constructor === Array){
    this.state = 0;
    this.CACHE = 1;
    for(var i=0; i<k.length; ++i){
      this.append(k[i]);
    }
    return this.state;
  }else{
    throw new TypeError("Invalid argument; expecting number or string in RollingHash.set");
  }
}



module.exports = RollingHash;