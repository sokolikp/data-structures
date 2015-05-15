var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ref = this._storage.get(i);
  if(ref === undefined) {
    var insert = {};
    insert[k] = v;
    this._storage.set(i, insert);
  }
  else {
    ref[k] = v;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k] || null;
  //return ref[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ref = this._storage.get(i);
  delete ref[k];
  //this._storage.set(i, null);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//obj = {a: 'b'};
//delete obj[a];
