var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(val) {
    this.storage[this.end] = val;
    this.end++;
};

Queue.prototype.dequeue = function() {
  if(this.front < this.end) {
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.end - this.front;
};

