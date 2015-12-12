/**
 * Basic bidirectional node
 * {data} *, any data for the node to hold
 * {next} Bidirectional_node, points to the next node
 * {prev} Bidirectional_node, points to the previous node
 */

/**
 * Single argument constructor.
 * @param {*} any data for the node to hold
 * @return {void}
 */
const Bidirectional_Node = function(data){
  this.data = data || undefined;
  this.next = null;
  this.prev = null;
};

module.exports = Bidirectional_Node;