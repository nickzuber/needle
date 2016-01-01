
// # Binary Heap tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('Binary Heap should run without errors', function(t){
  
  var Node = function(key, value){
    this.key = key;
    this.value = value;
  }

  var bh = new Needle.BinaryHeap(function(a, b){
    return a.key < b.key;
  });

  // insert / peek
  try{
    bh.insert(new Node(3, "Level 3"));
    bh.insert(new Node(1, "Level 1"));
    bh.insert(new Node(2, "Level 2"));
    t.equal(bh.peek().key, 1, "BinaryHeap.insert checking to see if inserted elements properly & if BinaryHeap.peek works properly.");
  }catch(e){
    t.fail("BinaryHeap.insert / BinaryHeap.peek has failed.\n" + e.message);
  }

  // size (also tests insert)
  try{
    var newBh = new Needle.BinaryHeap();

    // add 100 elements
    for(var i=0; i<100; ++i){
      var rand = Math.floor(Math.random() * 100) + 1;
      newBh.insert(rand);
    }
    t.equal(newBh.size(), 100, "BinaryHeap.size checking to see if correct number of elements were inserted.");
  }catch(e){
    t.fail("BinaryHeap.size / BinaryHeap.insert has failed.\n" + e.message);
  }

  // delete
  try{
    bh.delete();
    t.equal(bh.peek().key, 2, "BinaryHeap.delete checking to see if new min has been selected properly.");
  }catch(e){
    t.fail("BinaryHeap.delete has failed.\n" + e.message);
  }
  
  t.end();
});