if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	// obj.sayIt = fn;
    	// return obj.sayIt()
    	//fn.call(obj)
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var properties = [];
    	for(var property in obj){
    		if(obj.hasOwnProperty(property))
    		{
    			properties.push(property + ": " + obj[property])
    		}
    	}
    	return properties;
    }
  };
});
