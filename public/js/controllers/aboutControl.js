angular.module('tourApp')
	.controller("aboutControl",['$scope','profileService', function($scope, profileService){
		$scope.getBadges = getBadges();
	}]);