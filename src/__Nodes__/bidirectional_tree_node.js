/** @header
 * Bidirectional_Tree_Node
 * @property {any} data Any data for the node to hold
 * @property {Bidirectional_Tree_Node} right Points to the right child node
 * @property {Bidirectional_Tree_Node} left Points to the left child node
 */

'use strict';

/**
 * Constructs a bidirectional tree node.
 * @param {*} data Any data for the node to hold
 * @return {void}
 */
const Bidirectional_Tree_Node = function(data){
  this.data = data || undefined;
  this.right = null;
  this.left = null;
};

module.exports = Bidirectional_Tree_Node;
