'use strict';
angular.module('users').controller('ChapterController',
	function ($scope, $routeParams) {
		$scope.name = "ChapterController";
		$scope.params = $routeParams;
	});