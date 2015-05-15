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
  if (this.value < value) {
    if (this.left.value === null) {
      this.left.value = BinarySearchTree(value);
    }
    else {
      this.left.insert(value);
    }
  }
  else {
    if (this.right.value === null) {
      this.right.value = BinarySearchTree(value);
    }
    else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value) {

};

bstMethods.depthFirstLog = function(value) {

};

//var Node = function (value) {
//  return {value: value, right: null, left: null};

//var tree = new BinarySearchTree(1);
//console.log(tree);

/*
 * Complexity: What is the time complexity of the above functions?
 */
