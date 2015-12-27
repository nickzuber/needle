/**
 * Basic bidirectional tree node
 * {data} *, any data for the node to hold
 * {next} Bidirectional_node, points to the next node
 * {prev} Bidirectional_node, points to the previous node
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