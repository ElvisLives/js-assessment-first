if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var regext = /\d/;
        var output = regext.test(str)
        return output;
    },

    containsRepeatingLetter : function(str) {
        var regext = /([A-Za-z])\1/;
        var output = regext.test(str);
        return output;
    },

    endsWithVowel : function(str) {
        var regext = /(a|e|i|o|u|A|E|I|O|U)$/; // /[aeiou]$/i
        var output = regext.test(str);
        return output;
    },

    captureThreeNumbers : function(str) {
        var regext = /(\d){3}/; 
        var output = regext.exec(str);

         if (output) {
            return output[0];
        }
        return false;
    },

    matchesPattern : function(str) {
        var regext = /^(\d){3}-(\d){3}-(\d){4}$/; ///^\d{3}-\d{3}-\d{4}$/
        var output = regext.test(str);
        return output;
    },
    // examine
    isUSD : function(str) {
        var regext = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
        var output = regext.test(str);
        return output;
    }
  };
});
