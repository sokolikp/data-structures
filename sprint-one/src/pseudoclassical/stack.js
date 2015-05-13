var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.Objsize = 0;
};

Stack.prototype.push = function(val){
    this.storage[this.Objsize] = val;
    this.Objsize++;
};

Stack.prototype.pop = function(){
    if (this.Objsize > 0) {
      this.Objsize--;
      var temp = this.storage[this.Objsize];
      delete this.storage[this.Objsize];
      return temp;
    }
};
Stack.prototype.size = function(){
    return this.Objsize;
};



