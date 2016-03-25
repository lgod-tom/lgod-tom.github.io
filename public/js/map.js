angular.module('tourApp')
    .factory('mapService', ['$window','$q','$rootScope', function($window,$q,$rootScope){
        var deferred = $q.defer();
        $window.getDirections = function(data){
            deferred.resolve(data);
            $rootScope.$apply();
        };
        return deferred.promise;
    }]);