angular.module('tourApp')
	.controller("directControl", function($scope){
		gapi.load('auth2', function(){
			gapi.auth2.init();
		});

		function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId(992517329332-h35op449h1qo196eldc1kqud4u00bvcj.apps.googleusercontent.com)); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

  // google login function to get profile info
	});