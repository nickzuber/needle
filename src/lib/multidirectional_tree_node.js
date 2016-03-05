/**
 * Basic multidirectional tree node
 * {data} *, any data for the node to hold
 * {children} Array, the set of Multidirectional_Tree_Node which are direct children to this node
 */
 
'use strict';

/**
 * Single argument constructor.
 * @param {*} any data for the node to hold
 * @return {void}
 */
const Multidirectional_Tree_Node = function(data){
  this.data = data || undefined;
  this.children = [];
};

Multidirectional_Tree_Node.prototype.appendChild = function(data){
  this.children.push(new Multidirectional_Tree_Node(data));
};

module.exports = Multidirectional_Tree_Node;