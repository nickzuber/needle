
'use strict';

(function(){

  console.log("yo");

  if(typeof exports !== 'undefined'){
    if(typeof module !== 'undefined' && module.exports){
      exports = module.exports = Needle;
    }
    exports.Needle = Needle;
  }else{
    window.Needle = Needle;
  }
})();