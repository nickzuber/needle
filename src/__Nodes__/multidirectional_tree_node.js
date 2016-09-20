/** @header
 * Multidirectional_Tree_Node
 * @property {any} data Any data for the node to hold
 * @property {Array} children The set of Multidirectional_Tree_Node which are direct children to this node
 */

'use strict';

/**
 * Single argument constructor.
 * @param {*} data Any data for the node to hold
 * @return {void}
 */
const Multidirectional_Tree_Node = function(data){
  this.data = data || undefined;
  this.children = [];
};

/**
 * Appends data as a node as a direct child to the tree.
 * @param {*} data Any data for the node to hold
 * @return {void}
 */
Multidirectional_Tree_Node.prototype.appendChild = function(data){
  this.children.push(new Multidirectional_Tree_Node(data));
};

module.exports = Multidirectional_Tree_Node;
