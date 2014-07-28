

var app = angular.module('feedApp', []);

app.controller('feedCtrl', function($scope, $http) {

	$scope.feedUrl = 'http://blog.chromium.org/feeds/posts/default?alt=json';
	$scope.items = [];

	$scope.getUrl = function() {

		$http.jsonp($scope.feedUrl + '&callback=JSON_CALLBACK').success(function(data) {

			data.feed.entry.forEach(function(item) {

	      	$scope.items = data.responseData.feed.entries;

	      });

		});

	}

	$scope.getUrl();

	return $scope.items;

});

// app.controller('feedCtrl', function($scope, $http) {

// 	$scope.feedUrl = 'http://blog.chromium.org/feeds/posts/default?alt=json';
// 	$scope.items = [];

// 	$scope.getUrl = function() {

// 		$http.jsonp($scope.feedUrl + '&callback=JSON_CALLBACK').success(function(data) {

// 			data.feed.entry.forEach(function(item) {

// 	      	$scope.items = item;

// 	      });

// 		});

// 	}

// 	$scope.getUrl();

// 	return $scope.items;

// });