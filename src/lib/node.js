/**
 * Very basic node
 */

const Node = function(data){
  this.data = data || undefined;
  this.next = null;
};

module.exports = Node;