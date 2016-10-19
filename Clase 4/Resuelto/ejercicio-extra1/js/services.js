(
	function(){
		angular.module('appMarket')
		.factory('AppService', AppService);

		function AppService($window){
			var apps = [{
		        name: 'App 1',
		        developer: "desc 1",        
		        price: 110.50,
		        image:'images/forecast.jpg'        
		    },
		    {
		        name: 'App 2',
		        description: "desc 2",        
		        price: 43.50,
		        image:'images/gameboard.jpg'        
		    },
		    {
		        name: 'App 3',
		        developer: "desc 3",        
		        price: 12.35,
		        image:'images/move.jpg'                
		    },
		    {
		        name: 'App 4',
		        developer: "desc 4",        
		        price: 29.45,
		        image:'images/shutterbugg.jpg'               
		    } 
		    ];

			return {
				getApps: function(){
					return apps;
				}
			}
		}
	}
)();		