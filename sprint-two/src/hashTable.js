var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numRecords = 0;
};

HashTable.prototype.checkSize = function() {
  if(this._numRecords/this._limit >= 0.75) {
    var oldStorage = this._storage;
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    var context = this;
    oldStorage.each(function(house) {
      if(house !== undefined) {
        for(var i=0; i<house.length; i++) {
          if(house[i][0] !== undefined) {
            context.insert(house[i][0], house[i][1]);
          }
        }
      }
    });
  }
  else if(this._numRecords/this._limit <= 0.25) {
    var oldStorage = this._storage;
    this._limit = Math.ceil(this._limit/2);
    this._storage = LimitedArray(this._limit);
    var context = this;
    oldStorage.each(function(house) {
      if(house !== undefined) {
        for(var i=0; i<house.length; i++) {
          if(house[i][0] !== undefined) {
            context.insert(house[i][0], house[i][1]);
          }
        }
      }
    });
  }
};

HashTable.prototype.insert = function(k, v){
  this._numRecords++;
  this.checkSize();
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
  this.numRecords--;
  this.checkSize();
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ref = this._storage.get(i);
  for (var j = 0; j < ref.length; j++) {
    if (ref[j][0] === k) {
      ref[j] =  [];
      //this._numRecords--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

