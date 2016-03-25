angular.module('tourApp')
	.controller("goalControl",['$scope','adventureService', function($scope, adventureService){
		$scope.saveLocation = function(){
    		var currentPosition = navigator.geolocation.getCurrentPosition(function(position){
	   				// var lati = angular.element(document.querySelector('#latitude'));
	   				// 	lati.prepend(position.coords.latitude)[0];

	   				// var longi = angular.element(document.querySelector('#longitude'));
	   				// 	longi.prepend(position.coords.longitude)[0];

	   			var loc = {};
	   			loc.longi = position.coords.longitude;
	   			loc.lati = position.coords.latitude;
	   			adventureService.saveLocation(loc);
			});	

    	}	
	}]);