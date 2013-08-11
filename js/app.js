'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/post.html', controller: 'indexCtrl'});
    $routeProvider.when('/:postId', {templateUrl: 'partials/post.html', controller: 'postCtrl'});
    $routeProvider.otherwise({templateUrl: 'partials/post.html', controller: 'postCtrl'});
  }]);
	
angular.module('myApp.controllers', [])
	.controller('indexCtrl', function($scope, $http, $routeParams) {
		$http.get('posts/index.md')
			.success(function(data) {
				$scope.post = marked(data);
				$scope.title = 'Scribe App';
			});
	})
	.controller('errorCtrl', function($scope, $http, $routeParams) {
		$http.get('posts/404.md')
			.success(function(data) {
				$scope.post = marked(data);
				$scope.title = 'Scribe App';
			});
	})
	.controller('postCtrl',function($scope, $routeParams, $http) {
		$http.get('posts/' + $routeParams.postId + '.md')
			.success(function(data) {
				$scope.post = marked(data);
				$scope.title = $routeParams.postId;
			})
			.error(function() {
				$scope.post = marked("# Page does not exist\n\nSorry, " + $routeParams.postId + " doesn't seem to exist");
				console.log('Page not found: ' + $routeParams.postId);
			});
	});
