var app = angular.module('tourApp', ['ngRoute','ngAnimate', 'ui.bootstrap', 'bootstrapLightbox']);

app.config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: 'public/views/login.html',
    controller: 'FBController'
  });

  $routeProvider.when('/view2', {
    templateUrl: 'public/views/adventureList.html',
    controller: 'adventureList'
  });

  $routeProvider.when('/view3', {
  	templateUrl: 'public/views/adventureDetail.html',
  	controller: 'mapCTRL'
  });

  $routeProvider.when('/view4', {
    templateUrl: 'public/views/about.html',
    controller: 'aboutControl'
  });

  $routeProvider.when('/view5', {
    templateUrl: 'public/views/profile.html',
    controller: 'rewardControl'
  });

  $routeProvider.when('/view6', {
    templateUrl: 'public/views/proPhoto/proView.html',
    controller: 'photoControl'
  });
});


