angular.module('productModule', []);
 
// register the service
angular.module('productModule').service('categoryService', ['$http', function($http) {
  return {
    		getCategories: function(id) {
	            return $http.get('something/data/' + id).then(function (result) {
	                return result.data;
	            });
        },

        addCategory: function(name){
	            	return $http.post('/something', name).then(function(result){
	            		return result.id;
	            	})
	            }
  }; 

}]);