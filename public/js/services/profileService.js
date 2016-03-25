angular.module('tourApp')
	.factory('profileService', function(){
		var profileBadges = [
			{
				src: "public/images/grandcircus.png",
				name: "Grand Circus",
				owned: false
			},
			{
				src: "/public/images/superhero.png",
				name: "Superhero Alley",
				owned: false
			},
			{
				src: "/public/images/national.png",
				name: "Grand Circus",
				owned: false
			},
			{
				src: "/public/images/guardian.png",
				name: "Grand Circus",
				owned: false
			},
			{
				src: "/public/images/belt.png",
				name: "Grand Circus",
				owned: false
			},
			{
				src: "/public/images/hart.png",
				name: "Grand Circus",
				owned: false
			}

		];
	
		var addBadge = function(){
			profileBadges[0].owned = true;
		}
		var getBadges = function(){
			return profileBadges;
		};
		return {
			addBadge: addBadge,
			getBadges: getBadges
			};		
	});



