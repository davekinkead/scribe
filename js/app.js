'use strict';

// Declare app level module which depends on filters, and services
angular.module('scribe', ['scribe.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/post.html', controller: 'postCtrl'});
    $routeProvider.when('/:postId', {templateUrl: 'partials/post.html', controller: 'postCtrl'});
    $routeProvider.when('/:dir/:postId', {templateUrl: 'partials/post.html', controller: 'postCtrl'});
    $routeProvider.otherwise({templateUrl: 'partials/post.html', controller: 'postCtrl'});
  }]);
	
angular.module('scribe.controllers', [])
	.controller('postCtrl',function($scope, $routeParams, $http) {
		
		//	parse the path - and ugly hack until Angular supports regex routes
		var path = ''
		if ($routeParams.dir) 
			path += $routeParams.dir + '/';
		if ($routeParams.postId) {
			path += $routeParams.postId;
		}	else {
			path = 'index';
		}
				
		//	retrieve and parse the markdown
		$http.get(path + '.md')
			.success(function(data) {
				$scope.post = marked(data);
			})
			.error(function() {
				$http.get('404.md')
					.success(function(data) {
						$scope.post = marked(data);
				});
				console.log('Page not found: ' + $routeParams.postId);
		});
});