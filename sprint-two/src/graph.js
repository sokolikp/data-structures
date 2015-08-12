//obj = {kitten: {dog: null, bird: null}, dog: {kitten: null}, bird: {kitten:null}}
var Graph = function(){
  this.storage = {};
  //this.connections = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {};
};

Graph.prototype.contains = function(node){
  if(this.storage.hasOwnProperty(node)) {
    return true;
  }
  else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  if(this.storage.hasOwnProperty(node)) {
    for(var key in this.storage.node) {
      delete this.storage.key[node];
    }
    delete this.storage[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.storage[fromNode].hasOwnProperty(toNode)) {
    return true;
  }
  else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.storage.hasOwnProperty(fromNode) && this.storage.hasOwnProperty(toNode)) {
    this.storage[fromNode][toNode] = null;
    this.storage[toNode][fromNode] = null;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.storage.hasOwnProperty(fromNode) && this.storage.hasOwnProperty(toNode)) {
    delete this.storage[fromNode][toNode];
    delete this.storage[toNode][fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



