var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
  tree.parent = this;
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

treeMethods.removeFromParent = function() {
  var branch = this;
  var parent = branch.parent;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === branch) {
      parent.children[i] = undefined;
    }
  }
  //this.parent.children =
  branch.parent = null;
  return branch;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
