/**
 * Basic unidirectional node
 * {data} *, any data for the node to hold
 * {next} Unidirectional_node, points to the next node
 */

/**
 * Single argument constructor.
 * @param {*} any data for the node to hold
 * @return {void}
 */
const Unidirectional_Node = function(data){
  this.data = data || undefined;
  this.next = null;
};

module.exports = Unidirectional_Node;