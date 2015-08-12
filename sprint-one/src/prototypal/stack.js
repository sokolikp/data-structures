var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.Objsize = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push : function(value) {
    this.storage[this.Objsize] = value;
    this.Objsize++;
  },

  pop : function() {
    if(this.Objsize > 0) {
      this.Objsize--;
      var temp = this.storage[this.Objsize];
      delete this.storage[this.Objsize];
      return temp;
    }
  },

  size : function() {
    return this.Objsize;
  }
};


