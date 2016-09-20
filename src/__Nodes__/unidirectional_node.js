/**
 * Unidirectional_Node
 * @property {any} data Any data for the node to hold
 * @property {Unidirectional_node} next Points to the next node
 */

'use strict';

/**
 * Constructs a unidirectional node.
 * @param {*} data Any data for the node to hold
 * @return {void}
 */
const Unidirectional_Node = function(data){
  this.data = data || undefined;
  this.next = null;
};

module.exports = Unidirectional_Node;
