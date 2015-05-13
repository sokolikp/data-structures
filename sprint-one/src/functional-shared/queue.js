var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {front: 0,
             end: 0,
             storage: {}};
  for (var key in queueMethods) {
    obj[key] = queueMethods[key];
  }
  return obj;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue : function(){
    if(this.front < this.end) {
      var temp = this.storage[this.front];
      this.front++;
      return temp;
    }
  },

  size : function(){
    return this.end - this.front;
  }

};
