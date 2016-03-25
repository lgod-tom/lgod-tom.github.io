angular.module('tourApp')
	.controller("rewardControl",['$scope','profileService', function($scope, profileService){
			// profileService.addBadge();
			$scope.badges = profileService.getBadges();
				
			// $scope.callToAddBadge = function(currentBadge){
			// 	profileService.addBadge(currentBadge);
			// };
		// $scope.profileBadges = [];

		// $scope.checkInStatus = profileService.getStatus();


		// profileService.getStatus = function($scope){
			
		// 	$scope.profileBadges.push("public/images/grandcircus.png");
		// 	console.log('fucking work!');
		// };

		// $scope.getBadges = function getBadges(){
		// 	$scope.getBadges();
		// 	console.log('reward control is doing something');
		// };
		// $scope.getBadges = getBadges();
	}]);
	
	$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});
