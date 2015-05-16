var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numRecords = 0;
};

HashTable.prototype.resize = function(newSize) {
  var oldStorage = this._storage;
  this._limit = newSize;
  this._storage = LimitedArray(newSize);
  this._numRecords = 0;
  var context = this;
  oldStorage.each(function(bucket) {
    if(bucket !== undefined) {
      for(var i=0; i<bucket.length; i++) {
        var tuple = bucket[i];
        context.insert(tuple[0], tuple[1]);
      }
    }
  });
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket === undefined) {
    bucket = [];
    this._storage.set(i, bucket);
  }
  for(var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  bucket.push([k,v]);
  this._numRecords++;
  if(this._numRecords/this._limit >= 0.75) {
    this.resize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket === undefined) {
    return null;
  }
  for(var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket === undefined) {
    return null;
  }
  for(var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      bucket.splice(i, 1);
      this._numRecords--;
      if(this._numRecords/this._limit < 0.25) {
        this.resize(Math.ceil(this._limit/2));
      }
      return tuple[1];
    }
  }
  return null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

