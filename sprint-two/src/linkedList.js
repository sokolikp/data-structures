var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    if(list.tail !== null) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
    else {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function(){
    if(list.head !== null) {
      var result = list.head.value;
      list.head = list.head.next;
      return result;
    }
  };

  list.contains = function(target){
    var currentObj = list.head;
    while(currentObj !== null) {
      if(currentObj.value === target) {
          return true;
      }
      currentObj = currentObj.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
