if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        var temp = str + ', ';
        return function(str){
            temp = temp + str;
            return temp;
        }
    },
    // examine
    makeClosures : function(arr, fn) {
        var functions = [];

        var closedFunc = function(val){
            return function(){ 
                return fn(val);
            };
        }
        for (var i = 0; i < arr.length; i++) {
            // console.log((arr[i]));
            // functions.push(closedFunc(arr[i]));
            functions[i] = (closedFunc(arr[i])); // indexing is faster http://www.scottlogic.co.uk/2010/10/javascript-array-performance/
        };
        return functions;
    },

    partial : function(fn, str1, str2) {
        return function(extra){
            var args = [str1, str2, extra];
            return fn.apply(this, args);
        }
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        };
        return sum;
    },

    callIt : function(fn) {
        // have to do this to let us use it as a Javascript array
        var args = Array.prototype.slice.call(arguments);
        args.shift(); // remove the first item
        fn.apply(this,args);
    },

    // examine
    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);

        return function() {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
      };
    }
  };
});
