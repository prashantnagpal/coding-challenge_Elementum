movieApp.controller('movieController', ['$scope', '$rootScope', 'MovieList', function($scope, $rootScope, MovieList) {
	
	// Movie Collection by Id Ajax

	MovieList.movieCollection().then(function(resp){
	
		$scope.imageHost= 'https://image.tmdb.org/t/p/w185';
		$scope.collectionParts= resp.data.parts;
		$scope.selectedMovie= $scope.collectionParts[0];
		$scope.movieDescription= $scope.selectedMovie.overview;
		MovieList.movieCredits($scope.collectionParts[0].id).then(function(resp){
					
			$scope.defaultCredits= resp.data;
			$scope.crewCredits= $scope.defaultCredits.crew;
			$scope.castCredits= $scope.defaultCredits.cast;
			$scope.selectedPerson= $scope.castCredits[0];
			$scope.writers= [];
			$scope.cast= [];
			for(var i=0; i<$scope.crewCredits.length; i++){
				
				if($scope.crewCredits[i].job == 'Director'){
					$scope.directorName= $scope.crewCredits[i].name;
				}

				if($scope.crewCredits[i].job == 'Writer'){
					$scope.writers.push($scope.crewCredits[i].name);
				}

				if(i<4){
					$scope.cast.push($scope.castCredits[i].name);
				}

			}

			$scope.writers= $scope.writers.join(', ');
			$scope.cast= $scope.cast.join(', ');

		})

	})

	// Selected Movie Details Ajax

	$scope.selectMovie= function(movie,e){
		e.target.focus();	//Another try on putting focus on click
		$scope.selectedMovie= movie;
		$scope.movieDescription= $scope.selectedMovie.overview;

		if($scope.selectedMovie != undefined || $scope.selectedMovie == null){
			MovieList.movieCredits(movie.id).then(function(resp){
					
			$scope.defaultCredits= resp.data;
			$scope.crewCredits= $scope.defaultCredits.crew;
			$scope.castCredits= $scope.defaultCredits.cast;
			$scope.selectedPerson= $scope.castCredits[0];
			$scope.writers= [];
			$scope.cast= [];
			for(var i=0; i<$scope.crewCredits.length; i++){
				
				if($scope.crewCredits[i].job == 'Director'){
					$scope.directorName= $scope.crewCredits[i].name;
				}

				if($scope.crewCredits[i].job == 'Writer'){
					$scope.writers.push($scope.crewCredits[i].name);
				}

				if(i<4){
					$scope.cast.push($scope.castCredits[i].name);
				}

			}
			$scope.writers= $scope.writers.join(', ');
			$scope.cast= $scope.cast.join(', ');

		})
			
		}

	}

	$scope.selectedCast= function(cast){
		$scope.selectedPerson= cast;
	}
	
}]);