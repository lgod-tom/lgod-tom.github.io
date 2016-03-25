angular.module('tourApp')
    .controller('mapCTRL', ['$scope', 'adventureService', 'mapService','profileService','$uibModal', function ($scope, adventureService, mapService, profileService,$uibModal) {
							var target = {};
								target.lng = -83.049911;
								target.lat = 42.335706;
               $scope.showModal = false;
             $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
         };  

         	$scope.ok = function () {
    		$scope.$close();
  			};


        $scope.callback = function (map) {
        map.setView([42.3317856, -83.0487986], 16.12);
        };
        
        $scope.checkIn = function(){
			mapService.then(function(data){
				console.log(data);
			});
	        	var error;
				var options = options || {};
					options.accuracy <= 10; //supposed to be accurate to 10 meters
					options.timeOut = 5000; // times out after 5 seconds
					options.maximumAge = 0; // Force current locations only
					options.enableHighAccuracy = true;
						function success(position) {      
							var cords = {};
								cords.lng = position.coords.longitude;
								cords.lat  = position.coords.latitude;
								// cords.acc = position.coords.accuracy;

								if(Math.abs(cords.lat - target.lat) <= 0.0005 && (Math.abs(cords.lng - target.lng)<= 0.0005)){
    									profileService.addBadge();
							    var modalInstance = $uibModal.open({
							      templateUrl: 'public/views/modal/successModal.html',
							      controller: 'mapCTRL',
							      size: 'sm',
							      class: 'modal-content-success'
							    });

    									target.lng = -83.049911;
										target.lat = 45.335706;
    								// alert('You are checked in!!');	
								} else {
									var modalInstance = $uibModal.open({
							      templateUrl: 'public/views/modal/failModal.html',
							      controller: 'mapCTRL',
							      size: 'sm'
							    	});
								};
      						};
        		navigator.geolocation.getCurrentPosition(success, error, options);
        }; 	
  }]);

    

