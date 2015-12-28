var app = angular.module('lunchInWilm', []);
app.controller('lunchDataCtrl', function($scope, $http){
	$scope.suggestion = "Packing lunch";
	$scope.getSuggestion = function(venues){
		if (!venues.length){
			return "the fridge";
		}
		return venues[Math.floor(Math.random()*venues.length)].name;
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

