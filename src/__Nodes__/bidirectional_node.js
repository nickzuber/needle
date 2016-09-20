/** @header
 * Bidirectional_Node
 * @property {any} data Any data for the node to hold
 * @property {Bidirectional_node} next Points to the next node
 * @property {Bidirectional_node} prev Points to the previous node
 */

'use strict';

/**
 * Constructs a bidirectional node.
 * @param {*} data Any data for the node to hold
 * @return {void}
 */
const Bidirectional_Node = function(data){
  this.data = data || undefined;
  this.next = null;
  this.prev = null;
};

module.exports = Bidirectional_Node;
