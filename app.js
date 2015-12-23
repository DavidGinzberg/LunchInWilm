var app = angular.module('lunchInWilm', []);
app.controller('lunchDataCtrl', function($scope, $http){
	$scope.suggestion = "Packing lunch";
	$http({
	  method: 'GET',
	  url: 'data/venues.json'
	}).then(function successCallback(response) {
	    var venues = response.data.venues;
	    console.log("found " + venues.length + " venues.");
	    $scope.venues = venues;
	    $scope.suggestion = venues[Math.floor(Math.random()*venues.length)].name;
	  }, function errorCallback(response) {
	    console.error("failed to obtain venue list.");
	    $scope.venues = [];
	  });
});