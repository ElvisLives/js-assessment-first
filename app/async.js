if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
  	// examine
    async : function(value) {
   //  	return {
			// temp : value,
			// then : function(result){
			// 	result(this.temp);
			// }	
   //  	}

   var dfd = $.Deferred();

      setTimeout(function() {
        dfd.resolve(value);
      }, 1);
      return dfd.promise();
    },

	// examine
    manipulateRemoteData : function(url) {
 		var dfd = $.Deferred();

			$.ajax(url).then(function(resp) {
				var people = $.map(resp.people, function(person) {
				  return person.name;
				});
				dfd.resolve(people.sort());
			});

      return dfd.promise();

 //    	var peeps = [];
 //    	$.ajaxSetup({async:false});
 //    	$.get(url, function(data){
	//     		for (var i = data.people.length - 1; i >= 0; i--) {
	//     			peeps.push(data.people[i]);
	//     		};
	//     	});
	// 	console.log(peeps);

	// return {
	// 		then : function(){
	// 			return "datadone";
	// 		}	
 //    	}
    }
  };
});
