var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var end = front;

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    if(front < end) {
      var temp = storage[front];
      front++;
      return temp;
    }
  };

  someInstance.size = function(){
    return end - front;
  };

  return someInstance;
};
