var app = angular.module('lunchInWilm', []);
app.controller('lunchDataCtrl', function($scope, $http){
	$scope.suggestion = "Packing lunch";
	$scope.getSuggestion = function(venues){
		if (!venues.length){
			return "the fridge";
		}
		return venues[Math.floor(Math.random()*venues.length)].name;
	};

	// not quite ready; it's printing the anchor tag as plaintext
	$scope.getSuggestionWithLink = function(venues){
		if (!venues.length){
			return "the fridge";
		}
		var venueIndex = Math.floor(Math.random()*venues.length)
		var venue = venues[venueIndex]
		var url = venue["website-url"]
		console.log(url);
		if (url != undefined) 
		  return '<a href="' + url + '">' + venue.name + '</a>';
		return venue.name;
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

