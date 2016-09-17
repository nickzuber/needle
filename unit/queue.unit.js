
// # Queue tests

var Needle = require('../src');
var test = require('tape');

test('Queue should run without errors', function(t){

  var q = new Needle.Queue();

  // enqueue
  try{
    q.enqueue("d1");
    q.enqueue("d2");
    q.enqueue("d3");
    t.equal(q.front.data, "d1", "Queue.enqueue checking to see if order is kept.");
  }catch(e){
    t.fail("Queue.enqueue has failed.\n" + e.message);
  }

  // dequeue
  try{
    q.dequeue();
    t.equal(q.front.data, "d2", "Queue.dequeue checking to see if order is kept.");
  }catch(e){
    t.fail("Queue.dequeue has failed.\n" + e.message);
  }
  
  t.end();
});