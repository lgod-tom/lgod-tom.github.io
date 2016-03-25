angular.module('tourApp')
  .controller('FBController',['$scope',function($scope){
    // var profile;
    // $scope.profile.name = profile.getName();

    }]);

function onSignIn(googleUser) {
  profile = googleUser.getBasicProfile()
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  $scope.profile.name = profile.getName();
}


  // google login function to get profile info