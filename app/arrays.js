exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum =0;
    for (var i=0; i < arr.length; i++){
      sum +=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    return arr.filter(function(el){ 
        return (el !== item);
      });
  },

  removeWithoutCopy: function(arr, item) {
   for(var i = 0; i < arr.length; i++){
      if(arr[i]==item) {
        arr.splice(i,1);
        i--; // no skipping an item!!
       }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0, item);
    return arr;
  },

  count: function(arr, item) {
    var counter =0;
    for (var i=0; i < arr.length; i++){
      if (arr[i] === item){
        counter++;
      } 
    }
    return counter;
  },

  duplicates: function(arr) {
    var duplicate_arr =[];
    for (var i=0; i < arr.length; i++) {
      for (var j =i+1; j <arr.length -1; j++){
        if (arr[i] === arr[j]){
          duplicate_arr.push(arr[j]);
          arr.splice(j, 1, arr[j]);
        }

      }
    }
    return duplicate_arr;
  },

  square: function(arr) {
    for (var i=0; i < arr.length; i++){
      arr[i] = arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var index_arr=[];
    for (var i=0; i < arr.length; i++){
      if (arr[i] === target){
        index_arr.push(i);
      }
    }
    return index_arr;
  }
};
//arr.indexOf(item)
