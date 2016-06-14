var movieApp= angular.module('myApp', [])

.run(function($rootScope) {

	$rootScope.apiKey= 'c22db90878b2c394665bd9f3319f074d';
	$rootScope.serviceAddress= {
		'movieCollection': 'https://api.themoviedb.org/3/collection/528?api_key=c22db90878b2c394665bd9f3319f074d',
		'movieCredits': 'https://api.themoviedb.org/3/movie/'
	} 
    $rootScope.test = new Date();
})

.directive('ngFocus', function( $timeout ) {

  return function( scope, elem, attrs ) {
    scope.$watch(attrs.ngFocus, function( newval ) {
      if ( newval ) {
        $timeout(function() {
          elem[0].focus(function () {
                elem[0].addClass('focus');
            });
        }, 0, false);
      }
    });
  };
});
