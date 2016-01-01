
// # Stack tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('Stack should run without errors', function(t){
  
  var s = new Needle.Stack();

  // push / peek
  try{
    s.push("d1");
    s.push("d2");
    s.push("d3");
    t.equal(s.peek().data, "d3", "Stack.push checking to see if order is kept & if Stack.peek is returning the top.");
  }catch(e){
    t.fail("Stack.push / Stack.peek has failed.\n" + e.message);
  }

  // pop
  try{
    var v = s.pop();
    t.equal(v.data, "d3", "Stack.pop checking to see if previous top was returned.");
    t.equal(s.peek().data, "d2", "Stack.peek checking to see if correct the top is returned.");
  }catch(e){
    t.fail("Stack.pop has failed.\n" + e.message);
  }
  
  t.end();
});