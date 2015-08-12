var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    if(list.tail !== null) {
      var tempNode = list.tail;
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      list.tail.previous = tempNode;
    }
    else {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  list.addToHead = function(value) {
    if(list.head !== null) {
      var tempNode = list.head;
      list.head = Node(value);
      list.head.next = tempNode;
    }
    else {
      list.head = Node(value);
      list.tail = list.head;
    }
  }

  list.removeHead = function(){
    if(list.head !== null) {
      var result = list.head.value;
      list.head = list.head.next;
      if(list.head !== null) {
        list.head.previous = null;
      }
      else {
        list.tail = list.head;
      }
      return result;
    }
  };

  list.removeTail = function() {
    if (list.tail !== null) {
      var result = list.tail.value;
      list.tail = list.tail.previous;
      if(list.tail !== null) {
        list.tail.next = null;
      }
      else {
        list.head = list.tail;
      }
      return result;
    }
  }

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
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
