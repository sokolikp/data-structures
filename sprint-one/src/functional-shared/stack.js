var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {objSize: 0,
             storage: {}};
  for (var key in stackMethods) {
    obj[key] = stackMethods[key];
  }
  return obj;
};

var stackMethods = {
  push : function(value){
    this.storage[this.objSize] = value;
    this.objSize++;
  },

  pop : function(){
    if (this.objSize > 0) {
      this.objSize--;
      var temp = this.storage[this.objSize];
      delete this.storage[this.objSize];
      return temp;
    }
  },

  size : function(){
    return this.objSize;
  }
};


