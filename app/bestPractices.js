if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      var func = undefined;
      if (flag) {
        func = function getValue() { return "a"; }
      } else {
        func = function getValue() { return "b"; }
      }

      return func();
    },

    parseInt : function(num) {
      // always specify a radix 10 is decimal
      return parseInt(num,10);
    },

    identity : function(val1, val2) {
      return val1 === val2;
    }
  };
});
