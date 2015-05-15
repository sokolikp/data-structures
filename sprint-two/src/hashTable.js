var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*HashTable.prototype.checkSize = function() {
  var count = 0;
  var max = 0;
  for (var i = 0; i < this._limit; i++) {
    var ref = this._storage.get(i);
    if(ref !== undefined) {
      for (var j = 0 ; j < ref.length; j++) {
        if (ref[j].length === 2) {
          count++;
        }
      }
      if(count > max) {
        max = count;
      }
    }
  }
  if (max/this._limit > 0.75) {
    this._limit *= 2;
  }
};*/

HashTable.prototype.insert = function(k, v){
  //this.checkSize();
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ref = this._storage.get(i);
  if(ref === undefined) {
    var insert = [];
    insert.push([k, v]);
    this._storage.set(i, insert);
  }
  else {
    ref.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ref = this._storage.get(i);
  for (var j = 0; j < ref.length; j++) {
    if (ref[j][0] === k) {
      return ref[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ref = this._storage.get(i);
  for (var j = 0; j < ref.length; j++) {
    if (ref[j][0] === k) {
      ref[j] =  [];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

