var app = angular.module('lunchInWilm', []);
app.controller('lunchDataCtrl', function($scope, $http){
	$scope.suggestion = "Packing lunch";

	$scope.getSuggestion = function(venues){
		if (!venues.length){
			return "the fridge";
		}
		var venueIndex = Math.floor(Math.random()*venues.length)
		var venue = venues[venueIndex]
		var url = venue["website-url"]
		if (url != undefined) 
		  return {"name": venue.name, "url": url};
		return {"name": venue.name};
	};

	$scope.setNewSuggestion = function (){
		$scope.suggestion = $scope.getSuggestion($scope.venues);
	};

	$http({
	  method: 'GET',
	  url: 'data/venues.json'
	}).then(function successCallback(response) {
	    var venues = response.data.venues;
	    console.log("found " + venues.length + " venues.");
	    $scope.venues = venues;
	    $scope.setNewSuggestion();
	  }, function errorCallback(response) {
	    console.error("failed to obtain venue list.");
	    $scope.venues = [];
	  });
});

