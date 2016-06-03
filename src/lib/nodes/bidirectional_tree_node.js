/**
 * Basic bidirectional tree node
 * {data} *, any data for the node to hold
 * {right} Bidirectional_Tree_Node, points to the right child node
 * {left} Bidirectional_Tree_Node, points to the left child node
 */
 
'use strict';

/**
 * Single argument constructor.
 * @param {*} any data for the node to hold
 * @return {void}
 */
const Bidirectional_Tree_Node = function(data){
  this.data = data || undefined;
  this.right = null;
  this.left = null;
};

module.exports = Bidirectional_Tree_Node;