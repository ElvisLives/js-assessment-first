if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] === item) {
                return i;
            };
        };
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i <= arr.length; i++) {
            sum += i;
        };
        return sum;
    },

    remove : function(arr, item) {
        for (var i = 0; i <= arr.length; i++) {
            if(arr[i] == item){
                arr.splice(i,1);
            }
        };
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i <= arr.length; i++) {
                    if(arr[i] == item){
                        arr.splice(i,1);
                    }
                };
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        var start = arr.slice(0, index);
        var end = arr.slice(index, arr.length);
        start.push(item);
        return start.concat(end);
    },

    count : function(arr, item) {
        var count= 0;
        for (var i = 0; i <= arr.length; i++) {
                if(arr[i] == item){
                    count++;
                }
        };
        return count;
    },

    duplicates : function(arr) {
        var dupeArray = [];
        for (var i = 0; i <= arr.length; i++) {
                var currentVal = arr[i];
                var firstIndex = arr.indexOf(currentVal);
                var lastIndex = arr.indexOf(currentVal,i+1)
                if(lastIndex !== -1){
                    dupeArray.push(currentVal)
                }
        };
        return dupeArray;
    },

    square : function(arr) {
       var squared = []
       for (var i = 0; i <= arr.length; i++) {
            var currentVal = arr[i];
            if (currentVal !== undefined) {
                currentVal = currentVal * currentVal;
                squared.push(currentVal)
            };
        };
        return squared;
    },

    findAllOccurrences : function(arr, target) {
        var occurences = [];
        var index = 0;
        while(index !== -1){
            index = arr.indexOf(target, index);

            if (index!==-1) {
                occurences.push(index);
            }else{
                break;
            }

            index++;
        }
        return occurences;
    }
  };
});
