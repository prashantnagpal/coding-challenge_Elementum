movieApp.factory('MovieList', ['$http','$rootScope',  function($http,$rootScope) {
	return {
		"movieCollection": function(){
			return $http({ 
					method: 'GET', 
					url: $rootScope.serviceAddress.movieCollection, 
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			}).success(function(resp, status, headers, config){
				return(resp);
			});
		},

		"movieCredits": function(movieId){
			return $http({ 
					method: 'GET', 
					url: $rootScope.serviceAddress.movieCredits + movieId + '/credits?api_key=' + $rootScope.apiKey, 
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			}).success(function(resp, status, headers, config){
				return(resp);
			});
		}
	}


}]);