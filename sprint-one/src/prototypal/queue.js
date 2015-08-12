var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.front = 0;
  obj.end = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue : function() {
    if(this.end > this.front) {
      var temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return temp;
    }
  },

  size : function() {
    return this.end - this.front;
  }
};

