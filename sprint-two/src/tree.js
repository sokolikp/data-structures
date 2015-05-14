var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  var branch = this;
  if (branch.value === target) {
    return true;
  }
  for (var i = 0; i < branch.children.length; i++) {
    if (branch.children[i] !== undefined) {
      if(branch.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
