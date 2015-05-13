var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;
  var front = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    if(end - front > 0) {
      var result = storage[front];
      delete storage[front];
      front++;
      return result;
    }
  };

  someInstance.size = function(){
    return end - front;
  };

  return someInstance;
};
