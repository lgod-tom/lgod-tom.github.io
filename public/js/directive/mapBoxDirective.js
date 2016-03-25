L.mapbox.accessToken = 'pk.eyJ1IjoibGdvZC10b20iLCJhIjoiY2lsc2E2Y3Y4MDh4c3R5a245aXg1cHg5eiJ9.JXNc2afO-soiBxL0iHyMFw';
angular.module('tourApp')
	.directive('mapBoxMap', function() {
    return {
      restrict: 'A',
      scope: {
        lat: '=',
        lng: '=',
        mapId: '=',
        zoomLevel: '=',
        markers: '=',
        zoomControl: '='
      },
      link: function($scope, $element, $attrs) {
        $scope.map = L.mapbox.map($element[0], $scope.mapId)
          .setView([$scope.lat, $scope.lng], $scope.zoomLevel);
        $scope.map.scrollWheelZoom.disable();
        if (!!$scope.markers) {
          $scope.markers.forEach(function(marker) {
            L.marker(marker, {
              icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'town-hall',
                'marker-color': '#fa0'
              })
            }).addTo($scope.map);
          });
        }
        var featureLayer = L.mapbox.featureLayer()
          .addTo($scope.map);
        featureLayer.on('ready', function() {
          $scope.map.fitBounds($scope.map.getBounds());
        });
      }
    };
  });