
'use strict';

(function(){

  // Create a reference to global scope
  var global = this;


  if(typeof exports !== 'undefined'){
    if(typeof module !== 'undefined' && module.exports){
      exports = module.exports = Needle;
    }
    exports.Needle = Needle;
  }else{
    global.Needle = Needle;
  }
}).call(window);