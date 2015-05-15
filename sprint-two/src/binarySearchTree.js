var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, bstMethods);
  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  //var branch = BinarySearchTree(val);
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    else {
      this.left.insert(value);
    }
  }
  else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value) {
  var currentTree = this;
  if(currentTree.value === value) {
    return true;
  }
  else if(value < currentTree.value) {
    if(currentTree.left === null) {
      return false;
    }
    else {
      return currentTree.left.contains(value);
    }
  }
  else {
    if(currentTree.right === null) {
      return false;
    }
    else {
      return currentTree.right.contains(value);
    }
  }
};

bstMethods.depthFirstLog = function(func) {
  var currentTree = this;
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

//var Node = function (value) {
//  return {value: value, right: null, left: null};

//var tree = new BinarySearchTree(1);
//console.log(tree);

/*
 * Complexity: What is the time complexity of the above functions?
 */
